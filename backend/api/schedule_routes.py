from flask import Blueprint

schedule_bp = Blueprint('schedule', __name__)

@schedule_bp.route('/schedule')
def schedule_home():
    return 'Schedule route works'