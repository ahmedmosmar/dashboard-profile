window.onload = function () {

    const toggle_collpase = document.getElementById('collapse-menu'),
        main_menu = document.querySelector('#main-menu'),
        nav_item = document.querySelectorAll('.nav-item');

    nav_item.forEach((el) => {
        el.addEventListener('click', () => {
            main_menu.classList.add('width');
        });
    });

    toggle_collpase.addEventListener('click', () => {
        main_menu.classList.toggle('collapsed');
    });


    if (document.querySelector('.btn-collapse')) {
        document.querySelector('.btn-collapse').addEventListener('click', () => {
            document.querySelector('.btn-collapse').classList.toggle('change-arrow');
            main_menu.classList.toggle('width');
        });
    }


    let href = document.querySelectorAll('.nav-link');

    if (location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '') !== 'index.html') {
        href.forEach((el) => {
            if (el.getAttribute('href').split("/").slice(-1)[0].replace(/^\/|\/$/g, '') == location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '')) {
                el.classList.add('link-active');
                el.parentElement.parentElement.parentElement.classList.add('show');
                el.parentElement.parentElement.parentElement.parentElement.children[0].classList.add('active');
            }
        });
    } else {
        href.forEach((el) => {
            if (el.getAttribute('href').split("/").slice(-1)[0].replace(/^\/|\/$/g, '') == location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '')) {
                el.classList.add('active');
            }
        });
    }

}