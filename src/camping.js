let data = require("/public/data.json");

class CampingPage extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		let camping = "";
		for (let i in data.camping) {
			let camp = data.camping[i];
			camping += `<div class="camping-item"><img src="`+camp.img+`" alt=""><div class="details"><h3>`+camp.title+`</h3><p>`+camp.descr+`</p><p><strong>Location:</strong> `+camp.locationName+`</p><button onclick="window.location.href='`+camp.locationEmbed+`'">Get There</button></div></div>`;
		}
		this.shadow.innerHTML = `
			<style>
				:host {
					display: block;
					font-family: 'Poppins', sans-serif;
				}

				#camping {
					background-color: #f8f8f8;
					padding: 50px 20px;
					text-align: center;
				}

				#camping h2 {
					color: #333;
					font-size: 36px;
					margin-bottom: 30px;
					font-weight: bold;
					text-transform: uppercase;
					letter-spacing: 2px;
					text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
					border-bottom: 2px solid #333;
					padding-bottom: 8px;
				}

				#camping p {
					font-size: 16px;
					margin-bottom: 40px;
					color: #777;
				}

				.camping-list {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					gap: 20px;
				}

				.camping-item {
					background-color: #fff;
					border-radius: 10px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					overflow: hidden;
					width: 700px;
					display: flex;
					flex-direction: row;
				}

				.camping-item img {
					width: 50%;
					height: auto;
					object-fit: cover;
				}

				.camping-item .details {
					padding: 20px;
					flex-grow: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				.camping-item h3 {
					font-size: 24px;
					margin: 0 0 10px;
					color: #333;
				}

				.camping-item p {
					font-size: 16px;
					color: #666;
					margin: 0 0 20px;
				}

				button {
					background-color: #4CAF50;
					color: white;
					border: none;
					padding: 10px 20px;
					text-align: center;
					text-decoration: none;
					display: inline-block;
					font-size: 16px;
					border-radius: 5px;
					cursor: pointer;
					transition: background-color 0.3s ease;
				}
				
				button:hover {
					background-color: #45a049;
				}
			</style>

			<section id="camping">
				<h2>Camping in South Tyrol</h2>
				<div class="camping-list">`+camping+`</div>
			</section>
		`;
	}
}

customElements.define('camping-page', CampingPage);
