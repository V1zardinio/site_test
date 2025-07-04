const createNav = () => {
    let nav = document.querySelector('.navbar');

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