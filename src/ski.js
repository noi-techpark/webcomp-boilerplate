let data = require("/public/data.json");

class SkiResortPage extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		let skiResorts = "";
		for (let i in data.skiing) {
			let resort = data.skiing[i];
			skiResorts += `<div class="ski-resort-item"><img src="`+resort.img+`"><h3>`+resort.title+`</h3><p>`+resort.descr+`</p><button onclick="window.location.href='`+resort.locationEmbed+`'">Get There</button></div>`;
		}
		this.shadow.innerHTML = `
			<style>
				:host {
					display: block;
					font-family: 'Poppins', sans-serif;
				}

				.ski-resorts-section {
					padding: 50px 20px;
					background-color: #f8f8f8;
					text-align: center;
				}

				.ski-resorts-section h2 {
					font-size: 36px;
					margin-bottom: 30px;
					color: #333;
					font-weight: bold;
					text-transform: uppercase;
					letter-spacing: 2px;
					text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
					border-bottom: 2px solid #333;
					padding-bottom: 8px;
				}

				.ski-resorts-list {
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;
					gap: 20px;
				}

				.ski-resort-item {
					background-color: #fff;
					border-radius: 10px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					overflow: hidden;
					width: 300px;
					padding: 20px;
					text-align: center;
				}

				.ski-resort-item img {
					width: 100%;
					height: 200px;
					object-fit: cover;
					margin-bottom: 20px;
				}

				.ski-resort-item h3 {
					font-size: 24px;
					margin: 0 0 10px;
					color: #333;
				}

				.ski-resort-item button {
					background-color: #4CAF50;
					color: white;
					border: none;
					padding: 10px 20px;
					font-size: 16px;
					border-radius: 5px;
					cursor: pointer;
					transition: background-color 0.3s ease;
				}

				.ski-resort-item button:hover {
					background-color: #45a049;
				}
			</style>

			<section class="ski-resorts-section">
				<h2> Ski Resorts </h2>

				<div class="ski-resorts-list">`+skiResorts+`</div>
			</section>
		`;
	}
}

customElements.define('ski-resort-page', SkiResortPage);
