import './attractions.js';
import './ski.js';
import './camping.js';

class MainPage extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
		this.setupNavigation();
	}

	render() {
		this.shadowRoot.innerHTML = `
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
					flex: left;
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
					background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('pictures/Bolzano0.webp') center/cover repeat;
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

			</style>

			<div class="navbar">
				<div class="brand">
					<h1>Journey Through Bolzano</h1>
				</div>
				<div class="menu">
					<ul>
					</ul>
				</div>
			</div>

			<div class="body">
				<div class="heading">
					<h1>Explore Bolzano</h1>
					<p>Find Bolzano's top attractions in our web component and plan your next adventure!</p>
				</div>

				<div id="attractionsPage" class="locations">
					<div class="places">
						<img src="pictures/Bolzano1.jpg" alt="Bolzano">
					</div>
					<div class="places">
						<img src="pictures/Bolzano2.webp" alt="Bolzano">
					</div>
					<div class="places">
						<img src="pictures/Bolzano3.jpg" alt="Bolzano">
					</div>
					<div class="places">
						<img src="pictures/Bolzano4.jpg" alt="Bolzano">
					</div>
				</div>
			</div>
		`;
	}
}

customElements.define('main-page', MainPage);
