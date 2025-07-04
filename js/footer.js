const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="src/dark-logo.png" class="footer-logo" alt="">
        <div class="footer-p-container">
            <p class="footer-title">About</p>
            <p class="info">Quick online payment</p>
            <p class="footer-credit">Fast and accessfull</p>
        </div>
    </div>
    
    `;
}

createFooter();