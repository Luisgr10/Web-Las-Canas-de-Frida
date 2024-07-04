import os
from flask_admin import Admin
from src.Backend.models import db, BlogPost
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    # Configurar la clave secreta de la aplicación Flask (opcional)
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    
    # Configurar el tema de Flask-Admin
    app.config['FLASK_ADMIN_SWATCH'] = 'Flatly'
    
    # Inicializar Flask-Admin con la aplicación Flask y configuraciones
    admin = Admin(app, name='Las Canas de Frida Admin', template_mode='bootstrap3')

    # Agregar vistas de modelos a Flask-Admin
    admin.add_view(ModelView(BlogPost, db.session))

