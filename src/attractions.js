const data = require("/public/data.json");

class AttractionsPage extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		let attractions = "";
		for (let i in data.attractions) {
			let attr = data.attractions[i];
			attractions += `<div class="attractions-item"><img src="`+attr.img+`" alt=""><div class="details"><h3>`+attr.title+`</h3><p>`+attr.descr+`</p><p><strong>Location:</strong>`+attr.locationName+`</p><button onclick="window.location.href='`+attr.locationEmbed+`'">Get There</button></div></div>`;
		}
		this.shadow.innerHTML = `
			<style>
				:host {
					display: block;
					font-family: 'Poppins', sans-serif;
				}

				#attractions {
					background-color: #f8f8f8;
					padding: 50px 20px;
					text-align: center;
				}

				#attractions h2 {
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

				#attractions p {
					font-size: 16px;
					margin-bottom: 40px;
					color: #777;
				}

				.attractions-list {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					gap: 20px;
				}

				.attractions-item {
					background-color: #fff;
					border-radius: 10px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					overflow: hidden;
					width: 700px;
					display: flex;
					flex-direction: row;
				}

				.attractions-item img {
					width: 50%;
					height: auto;
					object-fit: cover;
				}

				.attractions-item .details {
					padding: 20px;
					flex-grow: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				.attractions-item h3 {
					font-size: 24px;
					margin: 0 0 10px;
					color: #333;
				}

				.attractions-item p {
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

			<section id="attractions">
				<h2>Cultural Attractions</h2>
				<div class="attractions-list">`+attractions+`</div>
			</section>
		`;
	}
}

customElements.define('attractions-page', AttractionsPage);
