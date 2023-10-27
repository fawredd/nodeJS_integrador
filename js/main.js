const pageFooter = document.querySelector('footer')
pageFooter.innerHTML = `
<section>
<nav>
    <ul>
        <li>
            <a href="/pages/shop.html">SHOP</a>
        </li>
        <li>
            <a href="/pages/register.html">REGISTRARSE</a>
        </li>
        <li>
            <a href="/pages/login.html">LOGIN</a>
        </li>
        <li>
            <a href="/pages/contact.html">CONTACTO</a>
        </li>
    </ul>
    <picture>
        <img src="/img/branding/isotype.svg" alt="Isotipo de la marca Funkoshop">
    </picture>
</nav>
</section>
<p>All rights reserved 2023 - Funkoshop &copy;</p>
`
const pageHeader = document.querySelector('header')
pageHeader.innerHTML = `
<nav class="navbar container">
<picture class="navbar__logo">
    <a href="/index.html">
        <img src="/img/branding/logo_light_horizontal.svg" alt="Isologotipo de la Marca Funkoshop">
    </a>
</picture>
<ul class="navbar__menu">
    <li class="menu__item menu__item__submenu">
        <a href="/pages/shop.html">SHOP<iconify-icon icon="tabler:chevron-down"></iconify-icon></a>
    </li>
    <li class="menu__item">
        <a href="/pages/contact.html">CONTACTO</a>
    </li>
    <li class="menu__item">
        <a href="/pages/login.html">LOGIN</a>
    </li>
    <li class="menu__item">
        <a href="/pages/cart.html">
            <img src="/img/icons/cart-icon.svg" alt="ícono de carrito">
        </a>
    </li>
</ul>
</nav>
`