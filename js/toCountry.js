function toCountry(country) {
    const botToken = '7246354262:AAHntXSjinje1yphb59Tua15AwyAjVUOZPU'; // ⚠️ НЕБЕЗОПАСНО!
    const chatId = '7559611229';


    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(`🌐 IP: 000 
    🛒 Перешёл на страницу оплаты ${country}`)}`, {
        method: 'GET'
    })   

}