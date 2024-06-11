from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from sqlalchemy import text  # Importar text desde sqlalchemy
import os

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
db = SQLAlchemy(app)

@app.route('/')
def hello_world():
    try:
        # Probar la conexión a la base de datos
        db.session.execute(text('SELECT 1'))  # Corregir aquí
        return 'Hello, World! Connected to the database!'
    except Exception as e:
        return f'Hello, World! Could not connect to the database. Error: {e}'

if __name__ == '__main__':
    app.run(debug=True)

