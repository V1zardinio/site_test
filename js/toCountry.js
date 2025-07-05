function toCountry(country) {
    const botToken = '7246354262:AAHntXSjinje1yphb59Tua15AwyAjVUOZPU'; // ⚠️ НЕБЕЗОПАСНО!
    const chatId = '7559611229';

    // fetch('https://api.ipify.org?format=json')
    // .then(res => res.json())
    // .then(data => {
    //     const clientIp = data.ip;
    //     fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(`🌐 IP: ${clientIp} 
    // 🛒 Перешёл на страницу оплаты ${country}`)}`, {
    //         method: 'GET'
    //     })
    // }); 

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(`🌐 IP: 000 
    🛒 Перешёл на страницу оплаты ${country}`)}`, {
        method: 'GET'
    })   

}