from flask import Blueprint, request, jsonify
from src.Backend.models import db, BlogPost

# Crear un Blueprint para las rutas
app = Blueprint('app', __name__)

# CORS ya no se inicializa aquí, sino en app.py

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
