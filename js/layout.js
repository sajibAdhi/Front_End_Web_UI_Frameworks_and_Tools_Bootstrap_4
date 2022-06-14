"use strict";

const hostname = window.location.hostname;
const port = window.location.port;
const base_url = window.location.protocol + "//" + hostname + ":" + port + "/";

const pathName = () => window.location.pathname;
const active = (path = '') => (pathName() == `/${path}`) ? 'active' : null;
const getNavBar = () => document.getElementById("navBarHolder").innerHTML = navbar;
const getFooter = () => document.getElementById("footerHolder").innerHTML = footer;

const navbar = `
<nav class="navbar navbar-expand-sm navbar-dark fixed-top">
    <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mr-auto" href="./index.html"><img src="img/logo.png" height="30" width="41"></a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav">
                <li class="nav-item ${active('index.html') || active()} "><a class="nav-link" href="${base_url}"><span class="fa fa-home fa-lg"></span>
                        Home</a></li>
                <li class="nav-item ${active('aboutus.html')}"><a class="nav-link" href="./aboutus.html"><span
                            class="fa fa-info fa-lg"></span> About</a></li>
                <li class="nav-item ${active('menu.html')}"><a class="nav-link" href="${base_url}"><span class="fa fa-list fa-lg"></span> Menu</a>
                </li>
                <li class="nav-item ${active('contactus.html')}"><a class="nav-link" href="./contactus.html"><span
                            class="fa fa-address-card fa-lg"></span>
                        Contact</a></li>
            </ul>
            
        </div>
        <span class="navbar-text">
                <a id="login">
                    <span class="fa fa-sign-in"></span> 
                    Login
                </a>
            </span>
    </div>
</nav>`;


const footer = `
<footer class="footer" id="footerHolder">
    <div class="container">
        <div class="row">
            <div class="col-5 offset-1 col-sm-2">
                <h5>Links</h5>
                <ul class="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <!-- Footer Address -->
            <div class="col-6 col-sm-5">
                <h5>Our Address</h5>
                <address>
                    121, Clear Water Bay Road<br>
                    Clear Water Bay, Kowloon<br>
                    HONG KONG<br>
                    <i class="fa fa-phone fa-lg"></i>: <a href="tel:+852 1234 5678">+852 1234 5678</a> <br>
                    <i class="fa fa-fax fa-lg"></i>: +852 8765 4321<br>
                    <i class="fa fa-envelope fa-lg"></i>:
                    <a href="mailto:confusion@food.net">confusion@food.net</a>
                </address>
            </div>
            <!-- Footer Social Buttons -->
            <div class="col col-sm-4 align-self-center">
                <div style="text-align:center">
                    <a class="btn btn-social-icon btn-google" href="http://google.com/+"> <i
                            class="fa fa-google-plus fa-lg" aria-hidden="true"></i></a>
                    <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="> <i
                            class="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                    <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"> <i
                            class="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
                    <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"> <i
                            class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                    <a class="btn btn-social-icon btn-google" href="http://youtube.com/"> <i
                            class="fa fa-youtube fa-lg" aria-hidden="true"></i></a>
                    <a class="btn btn-social-icon" href="mailto:"> <i class="fa fa-envelope  fa-lg"></i></a>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-auto">
                <p>© Copyright 2015 Ristorante Con Fusion</p>
            </div>
        </div>
    </div>
</footer>`;