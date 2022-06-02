"use strict";

const pathName = () => window.location.pathname;
const active = (path) => (pathName() == `/${path}`) ? 'active' : null;
const navbar = () => `
<nav class="navbar navbar-expand-sm navbar-dark fixed-top">
    <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mr-auto" href="./index.html"><img src="img/logo.png" height="30" width="41"></a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav">
                <li class="nav-item ${active('index.html')} "><a class="nav-link" href="#"><span class="fa fa-home fa-lg"></span>
                        Home</a></li>
                <li class="nav-item ${active('aboutus.html')}"><a class="nav-link" href="./aboutus.html"><span
                            class="fa fa-info fa-lg"></span> About</a></li>
                <li class="nav-item ${active('menu.html')}"><a class="nav-link" href="#"><span class="fa fa-list fa-lg"></span> Menu</a>
                </li>
                <li class="nav-item ${active('contactus.html')}"><a class="nav-link" href="./contactus.html"><span
                            class="fa fa-address-card fa-lg"></span>
                        Contact</a></li>
            </ul>
        </div>
    </div>
</nav>`;
const getNavBar = () => {
    let navBarHolder = document.getElementById("navBarHolder");
    navBarHolder.innerHTML = navbar();
}