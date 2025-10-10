from flask import Blueprint

canvas_bp = Blueprint('canvas',__name__)

@canvas_bp.route('/canvas')
def canvas_home():
    return 'Canvas route works!'