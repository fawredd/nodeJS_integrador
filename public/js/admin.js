const pageFooter = document.querySelector('footer')
pageFooter.innerHTML = `
<section>
<nav>
    <ul>
        <li>
            <a href="/pages/shop/shop.html">SHOP</a>
        </li>
        <li>
            <a href="/pages/admin/register.html">REGISTRARSE</a>
        </li>
        <li>
            <a href="/pages/admin/login.html">LOGIN</a>
        </li>
        <li>
            <a href="mailto:info@funkshop.web">CONTACTO</a>
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
pageHeader.innerHTML =
`<nav class="navbar container">
<picture class="navbar__logo">
    <a href="/index.html">
        <img src="/img/branding/logo_light_horizontal.svg" alt="Isologotipo de la Marca Funkoshop">
    </a>
</picture>
<ul class="navbar__menu">
    <li class="menu__item">
        <a href="/index.html">VER TIENDA</a>
    </li>
    <li class="menu__item">
        <a href="/pages/admin/admin.html">ADMIN</a>
    </li>
    <li class="menu__item">
        <a href="/pages/admin/login.html">SALIR</a>
    </li>
</ul>
</nav>`