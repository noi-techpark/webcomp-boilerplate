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
				#camping h1 {
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
				
				#camping table {
					width: 100%;
					border-collapse: separate;
					margin: 0px 0;
					font-size: 18px;
					text-align: left;
					background-color: #f8f8f8;
				}
				td {
					border: 1px solid #ddd;
				}
				th, td {
					padding: 12px;
					border: 1px solid black;
				}
				th {
					background-color: #f2f2f2;
				}
				img {
					width: 200px;
					height: auto;
					display: block;
				}
				iframe {
					width: 100%;
					height: 300px;
					border: 0;
				}
			</style>

			<section id="camping">
				<h1>Camping in South Tyrol</h1>

				<table>
					<thead>
						<tr>
							<th>Image</th>
							<th>Title</th>
							<th>Accommodation Type</th>
							<th>Category</th>
							<th>Location</th>
							<th>Map</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><img src="camping/Camping1.jpg" alt=""></td>
							<td>Schlosshof Resort Luxury Camping</td>
							<td>Camping</td>
							<td>5 stars</td>
							<td>Lana/Lana</td>
							<td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.1587570301053!2d11.16576727617149!3d46.611552871115855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782bdee4c5a6c8b%3A0xde6aacb7eaaf8531!2sSchlosshof%20Resort%20-%20Hotel%20%26%20Camping!5e1!3m2!1sen!2sit!4v1716565602348!5m2!1sen!2sit" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></td>
						</tr>
						<tr>
							<td><img src="camping/Camping2.jpg" alt=""></td>
							<td>Camping Sägemühle</td>
							<td>Camping</td>
							<td>4 stars</td>
							<td>Prato/Prad</td>
							<td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.8650031333614!2d10.593599576171846!3d46.617659571116334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47831fa79ff345d5%3A0x2e2a53bff6c6d3dd!2sCamping%20Residence%20S%C3%A4gem%C3%BChle!5e1!3m2!1sen!2sit!4v1716567420414!5m2!1sen!2sit" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></td>
						</tr>
						<tr>
							<td><img src="camping/Camping3.jpg" alt=""></td>
							<td>Waldcamping</td>
							<td>Camping</td>
							<td>4 stars</td>
							<td>Naturno/Naturns</td>
							<td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.177030520738!2d11.005901976173364!3d46.643018471117635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782c056653a6583%3A0x5d9fe761978a0ae3!2sWaldcamping%20Naturns!5e0!3m2!1sen!2sit!4v1716575525947!5m2!1sen!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></td>
						</tr>
						<tr>
						<td><img src="camping/Camping4.jpg" alt=""></td>
						<td>Camping Antholz</td>
						<td>Camping</td>
						<td>3 stars</td>
						<td>Anterselva di Sopra/Antholz-Obertal</td>
						<td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.9290430938004!2d12.10701777618639!3d46.86476877113139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477788e09a76aac1%3A0x707992ed86433f4c!2sCamping%20Antholz!5e0!3m2!1sen!2sit!4v1716575455636!5m2!1sen!2sit" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></td>
					</tr>
					<tr>
						<td><img src="camping/Camping5.jpg" alt=""></td>
						<td>Camping AL PLAN-Dolomites</td>
						<td>Camping</td>
						<td>3 stars</td>
						<td>San Vigilio</td>
						<td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2736.5460308073284!2d11.936019276176374!3d46.69496017112074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477822fd4ef8dab7%3A0x880177044ae4a8e!2sCamping%20AL%20PLAN-Dolomites!5e0!3m2!1sen!2sit!4v1716636147508!5m2!1sen!2sit" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></td>
					</tr>
					<tr>
						<td><img src="camping/Camping6.jpg" alt=""></td>
						<td>Camping Zum See</td>
						<td>Camping</td>
						<td>3 stars</td>
						<td>S.Valentino/St. Valentin</td>
						<td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.052776393551!2d10.528939976180432!3d46.7638561711249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478324e3c5a4fa4d%3A0xc4f7eaa13e11ae86!2sCamping%20zum%20See!5e0!3m2!1sen!2sit!4v1716636356536!5m2!1sen!2sit" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></td>
					</tr>
					<tr>
						<td><img src="camping/Camping7.jpg" alt=""></td>
						<td>Radlstadl Camping Saltaus</td>
						<td>Camping</td>
						<td>2 stars</td>
						<td>Rifiano/Riffian</td>
						<td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.9273684226!2d11.199520176178304!3d46.72689407112268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782bbde2ec1ba8b%3A0xa5c7f6f27f933809!2sRadlstadl%20%26%20Camping%20Saltaus!5e0!3m2!1sen!2sit!4v1716636457381!5m2!1sen!2sit" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></td>
					</tr>
					</tbody>
				</table>
			</section>
		`;
	}
}

customElements.define('camping-page', CampingPage);
