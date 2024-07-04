import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from src.Backend.models import db
from src.Backend.admin import setup_admin
from src.Backend.routes import app as routes_app

# Crear la instancia de la aplicación Flask
app = Flask(__name__)

# Configurar la conexión a la base de datos PostgreSQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Luis1001@localhost:5432/LasCanasDeFrida'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializar SQLAlchemy con la aplicación Flask
db.init_app(app)

# Inicialización de Flask-Migrate con la aplicación Flask y SQLAlchemy
migrate = Migrate(app, db)

# Configurar CORS para permitir peticiones cruzadas
CORS(app)

# Importar y configurar el administrador de Flask-Admin
setup_admin(app)

# Registrar el Blueprint 'app' de las rutas
app.register_blueprint(routes_app)

# Ejecutar la aplicación solo si se ejecuta este script directamente
if __name__ == '__main__':
    app.run(debug=True)
