from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Luis1001@localhost:5432/LasCanasDeFrida'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app)

class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content
        }

@app.route('/', methods=['GET'])
def test_db_connection():
    try:
        # Realiza una consulta simple para verificar la conexión
        blog_post = BlogPost.query.first()
        if blog_post:
            return jsonify({
                'message': 'Conexión con la base de datos exitosa',
                'data': blog_post.to_dict()
            }), 200
        else:
            return jsonify({
                'message': 'No se encontraron datos en la base de datos'
            }), 404
    except Exception as e:
        return jsonify({
            'message': 'Error al conectar con la base de datos',
            'error': str(e)
        }), 500

@app.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    new_post = BlogPost(title=data['title'], content=data['content'])

    try:
        db.session.add(new_post)
        db.session.commit()
        return jsonify({'message': 'Post creado correctamente', 'post': new_post.to_dict()}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error al crear el post', 'error': str(e)}), 500
    finally:
        db.session.close()

@app.route('/posts', methods=['GET'])
def get_all_posts():
    try:
        posts = BlogPost.query.all()
        return jsonify([post.to_dict() for post in posts]), 200
    except Exception as e:
        return jsonify({'message': 'Error al obtener los posts', 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
