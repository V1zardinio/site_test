import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

TELEGRAM_TOKEN = '7246354262:AAHntXSjinje1yphb59Tua15AwyAjVUOZPU'
CHAT_ID = '7559611229'

def send_telegram_message(message):
    url = f'https://api.telegram.org/bot 7246354262:AAHntXSjinje1yphb59Tua15AwyAjVUOZPU/sendMessage'
    payload = {
        'chat_id': CHAT_ID,
        'text': message,
        'parse_mode': 'HTML'
    }
    requests.post(url, data=payload)

@app.route('/notify', methods=['POST'])
def notify():
    data = request.json
    action = data.get('action')
    user = data.get('user', 'аноним')
    
    message = f"🔔 Действие на сайте: <b>{action}</b>\nПользователь: {user}"
    send_telegram_message(message)
    
    return jsonify({"status": "ok"}), 200

if __name__ == '__main__':
    app.run(port=5000)