const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <ul class="nav-container">
            <img src="src/dark-logo.png" class="nav-logo" alt="">
            <p class="nav-name">Payment</p>

            <img src="src/dark-menu.png" alt="" class="menu-image">
            <ul class="dropdown-menu">
                <li><p class="menu-h">Menu</p></li>
                <div class="menu-hr"></div>
                <li><a href="#" class="menu-task">Действие 1</a></li>
                <div class="menu-hr"></div>
                <li><a href="#" class="menu-task">Действие 2</a></li>
                <div class="menu-hr"></div>
                <li><a href="#" class="menu-task">Действие 3</a></li>
            </ul>
        </ul>
    `;
}

createNav();