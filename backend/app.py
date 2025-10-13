# importing the neccessary files as API's
from flask import Flask
from flask_cors import CORS # pyright: ignore[reportMissingModuleSource]
from api.canvas_routes import canvas_bp
from api.user_routes import user_bp
from api.schedule_routes import schedule_bp

app = Flask(__name__)
CORS(app)

# Registering bp's 
app.register_blueprint(canvas_bp, url_prefix = '/api/canvas')
app.register_blueprint(user_bp, url_prefix = '/api/user')
app.register_blueprint(schedule_bp, url_prefix = '/api/schedule')

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug=True)

