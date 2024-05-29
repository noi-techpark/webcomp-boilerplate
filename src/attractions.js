class AttractionsPage extends HTMLElement {
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
				<div class="attractions-list">

					<div class="attractions-item">
						<img src="pictures/Archive.jpg" alt="Archivio Storico">
						<div class="details">
							<h3>Archivio Storico della Città di Bolzano</h3>
							<br>
							<p>The exhibition path documents, across 13 rooms and 700 square meters, the history of the Victory Monument and its weighty ideological meanings, as well as more generally the local events from 1918 to 1945 related to the fascist and Nazi dictatorships. The rooms were made accessible to the public in July 2014.</p>
							<p><strong>Location:</strong> Via Portici 30, Bolzano </p>
							<button class="button1">Get There</button>
						</div>
					</div>
					
					<div class="attractions-item">
						<img src="pictures/Museum.png" alt="Archivio Storico">
						<div class="details">
							<h3>Museo Civico di Bolzano</h3>
							<br>
							<p>The oldest museum in South Tyrol, located in the provincial capital of Bolzano, exhibits precious historical-artistic collections related to the territory.</p>
							<p>The following areas are open to the public:
								<li>The ground floor, hosting temporary exhibitions.</li>
								<li>The first floor and the tower, where selected works from the museum's collections and from private collections are displayed.</li>
								<li>The garden, hosting outdoor events and providing access to the lapidarium.</li>
							</p>
							<p><strong>Location: </strong> Via Cassa di Risparmio, No. 14, Bolzano</p>
							<button class="button2">Get There</button>
						</div>
					</div>

					<div class="attractions-item">
						<img src="pictures/Galleria.jpg" alt="Piccola Galleria">
						<div class="details">
							<h3>Piccola Galleria</h3>
							<br>
							<p>The Piccola Galleria is an exhibition space located in the historic center of the city, available to artists, organizations, and associations at an affordable cost. Managed by the Cultural Services Division of the Municipality of Bolzano, this gallery has been offering intriguing proposals of art and culture since 2002. Available by reservation, it serves as a vibrant platform for creative expression and community engagement.</p>
							<p><strong>Address:</strong> Am Alten Rathaus, 8, Bolzano</p>
							<button class="button3">Get There</button>
						</div>
					</div>

					<div class="attractions-item">
						<img src="pictures/SchoolMuseum.jpg" alt="Museo della Scuola">
						<div class="details">
							<h3>Museo della Scuola di Bolzano</h3>
							<br>
							<p>The Museo della Scuola, or School Museum, was inaugurated on May 12, 1995, at the historic "Elisabethschule," now known as the "Dante Alighieri" school. Since 2015, it has been located in Rencio, within the Renaissance palace also known as the "ex Agnello," which was formerly the site of the old neighborhood school.</p>
							<p>The museum's exhibition allows visitors to rediscover various aspects of past school life in an engaging manner, with a focus primarily on Bolzano and the Alto Adige region from the late nineteenth century to the present day.							 . It was the first School Museum in Italy and the first in Europe dedicated to schools of linguistic minorities.</p>
							<p><strong>Location:</strong> Via Rencio, 51b, Bolzano</p>
							<button class="button4">Get There</button>
						</div>
					</div>

					<div class="attractions-item">
						<img src="pictures/Vittoria.jpg" alt="Monumento alla Vittoria">
						<div class="details">
							<h3>Monumento alla Vittoria</h3>
							<br>
							<p>The Historical Archive of the City of Bolzano preserves documentation produced and received in over seven hundred years of political and administrative activity and is therefore a vital testimony to the cultural heritage and historical memory of the city. It also preserves the archives of the former municipalities of Zwölfmalgreien (Dodiciville) and Gries, which, autonomous since 1849, were annexed to Bolzano in 1910 and 1925 respectively.</p>
							<p><strong>Location:</strong> Piazza della Vittoria, Bolzano </p>
							<button class="button5">Get There</button>
						</div>
					</div>

					<div class="attractions-item">
						<img src="pictures/Gusen.jpg" alt="I "Sette di Gusen"">
						<div class="details">
							<h3>I "Sette di Gusen"</h3>
							<br>
							<p>During the years of Nazi occupation, the "Seven of Gusen" were part of the clandestine National Liberation Committee of Bolzano, which was led by Manlio Longon. For their resistance activity against Nazism, they were arrested at their respective workplaces in the second half of December 1944. Interrogated and tortured by Major Schiffer, head of the Gestapo, their silence saved other women and men involved in the resistance within the clandestine committee assisting deportees from the Lager at Via Resia. After the interrogations, they were imprisoned in the Bolzano Lager for just over a month. On February 1, 1945, along with 528 other deportees, they departed from the Via Pacinotti platform, arriving at the Mauthausen Lager on February 4. After quarantine and registration at Mauthausen, they were transferred to Gusen. Due to the terrible living and working conditions in the camps, none of them returned.</p>
							<p><strong>Location:</strong> Georgestraße 7, 4222 Gusen</p>
							<button class="button6">Get There</button>
						</div>
					</div>
				</div>
			</section>
		`;

		// Event listener for all buttons
		this.shadow.addEventListener('click', (event) => {
			const button = event.target.closest('button');
			if (!button) return;

			const buttonClass = button.classList[0];
			switch (buttonClass) {
				case 'button1':
					window.location.href = 'https://maps.app.goo.gl/aWqfWZGCYoxf3v2s8';
					break;
				case 'button2':
					window.location.href = 'https://maps.app.goo.gl/WWtXCCtGumX7Kszf8';
					break;
				case 'button3' :
					window.location.href = 'https://maps.app.goo.gl/ktzcEza29XGA9c5L6';
					break;
				case 'button4' :
					window.location.href = 'https://maps.app.goo.gl/HAmcs2tK5mYDJ7Jq8';
					break;
				case 'button5' :
					window.location.href = 'https://maps.app.goo.gl/FNh5N6RUCJSBrzyJ7';
					break;
				case 'button6' :
					window.location.href = 'https://maps.app.goo.gl/mMKgVWpeYMuk9jhN9';
					break;
			}
		});
	}
}

customElements.define('attractions-page', AttractionsPage);
