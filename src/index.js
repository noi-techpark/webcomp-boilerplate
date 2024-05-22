// Import the HomePage and AttractionsPage components
import './attractions.js'; 
import './aboutUs.js';

// MainPage component definition
class MainPage extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.setupNavigation();
    }

    render() {
        const imagePath1 = 'pictures/Bolzano1.jpg';
        const imagePath2 = 'pictures/Bolzano2.webp';
        const imagePath3 = 'pictures/Bolzano3.jpg';
        const imagePath4 = 'pictures/Bolzano0.webp';
        const imagePath5 = 'pictures/Bolzano4.jpg';

        this.shadow.innerHTML = `
            <style>
                :host {
                    font-family: 'Poppins', sans-serif;
                    box-sizing: border-box;
                    padding: 0;
                    margin: 0;
                }

                .navbar {
                    width: 100%;
                    height: 80px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background-image: linear-gradient(120deg, #87cefa, #add8e6); 
                    background-size: cover;
                    background-repeat: no-repeat;
                    position: relative;
                }

                .brand { 
                    color: black;
                }

                .menu ul {
                    display: flex;
                    align-items: center;
                    letter-spacing: 2px;
                    font-size: 20px;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .menu ul li {
                    list-style: none;
                }

                .menu ul li a {
                    text-decoration: none;
                    color: #000;
                    padding: 5px 12px;
                    transition: border-bottom 0.4s;
                    cursor: pointer;
                }

                .menu ul li a:hover {
                    border-bottom: 4px solid #000;
                }

                .body {
                    width: 100%;
                    height: 90vh;
                    display: flex;
                    flex-direction: column; 
                    justify-content: center; 
                    align-items: center; 
                    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${imagePath4}') center/cover repeat;
                }

                .heading {
                    text-align: center; 
                    color: #fff;
                    margin-top: 100px;
                }

                .heading h1 {
                    font-size: 40px;
                    margin-bottom: 20px; 
                }

                .heading p {
                    margin-bottom: 40px; 
                }

                .heading a {
                    text-decoration: none;
                    color: #000;
                    font-size: 24px;
                    font-weight: bold;
                    border-radius: 45px;
                    padding: 14px 50px;
                    background-color: #fff;
                    transition: letter-spacing 0.6s;
                }

                .heading a:hover {
                    background-color: #f0f0f0; 
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9); 
                }

                .locations {
                    display: flex;
                    justify-content: space-around;
                    margin-top: 50px;
                    padding-top: 50px; 
                    padding-bottom: 50px; 
                    background: linear-gradient(to bottom, #f2f2f2 50%, rgba(0,0,0,0)); 
                    background-size: cover;
                }

                .places {
                    text-align: center; 
                    font-size: 25px;
                    letter-spacing: 3px;
                    padding: 20px 30px; 
                    border-radius: 10px;
                    margin-bottom: 20px;
                }

                .places img {
                    width: 200px; 
                    height: 150px; 
                    margin-bottom: 20px;
                }

                .places img:hover {
                    transform: scale(1.1); 
                    transition: transform 0.3s ease;
                }

                /* Smooth scrolling */
                html {
                    scroll-behavior: smooth;
                }

            </style>

            <div class="navbar">
                <div class="brand"> 
                    <h1>Journey Through Bolzano</h1>
                </div>
                <div class="menu">
                    <ul>
                        <li><a id = "aboutUsLink" href="#aboutUsPage">About Us</a></li>
                        <li><a id="attractionsLink" href="#attractionsPage">Attractions</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <div class="body">
                <div class="heading">
                    <h1>Explore Bolzano</h1>
                    <p>Find Bolzano's top attractions in our web component and plan your next adventure!</p>
                    <a id= "seemoreLink" href = "#attractionsPage">See More</a>
                </div>

                <div class="locations">
                    <div class="places">
                        <img src="${imagePath1}" alt="Bolzano">
                    </div>
                    <div class="places">
                        <img src="${imagePath2}" alt="Bolzano">
                    </div>
                    <div class="places">
                        <img src="${imagePath3}" alt="Bolzano">
                    </div>
                    <div class="places">
                        <img src="${imagePath5}" alt="Bolzano">
                    </div>
                </div>
            </div>
        `;
    }

    setupNavigation() {
        const aboutUsLink = this.shadow.querySelector('#aboutUsLink');
        const attractionsLink = this.shadow.querySelector('#attractionsLink');
        const seemoreLink = this.shadow.querySelector('#attractionsLink');

        aboutUsLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('aboutUsPage').scrollIntoView({ behavior: 'smooth' });
        });

        attractionsLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('attractionsPage').scrollIntoView({ behavior: 'smooth' });
        });

        seemoreLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('attractionsPage').scrollIntoView({ behavior: 'smooth'});
        });


    }
}

customElements.define('main-page', MainPage);
