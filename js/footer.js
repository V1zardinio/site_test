const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer class="bg-white border-t border-gray-200 mt-12">
      <div class="container mx-auto px-4 py-12">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div class="flex items-center gap-6">
            <img src="src/dark-logo.png" alt="Company logo" class="w-12 h-12 object-contain"/>
            <div>
              <h3 class="text-xl font-['Pacifico'] text-primary mb-2">Online payment</h3>
              <p class="text-gray-600 text-sm max-w-md">
                A quick and convenient option for online payment using a bank card.
              </p>
            </div>
          </div>
          <div class="text-gray-500 text-sm">
            © 2025 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
    `;
}

createFooter();