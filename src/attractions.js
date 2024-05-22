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
                    font-size: 36px;
                    margin-bottom: 20px;
                    color: #333;
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
            </style>

            <section id="attractions">
                <h2>Cultural Attractions</h2>
                <div class="attractions-list">
                    <div class="attractions-item">
                        <img src="pictures/Archive.jpg" alt="Archivio Storico">
                        <div class="details">
                            <h3>Archivio Storico della Città di Bolzano</h3>
                            <br>
                            <p>The Historical Archive of the City of Bolzano preserves documentation produced and received in over seven hundred years of political and administrative activity and is therefore a vital testimony to the cultural heritage and historical memory of the city. It also preserves the archives of the former municipalities of Zwölfmalgreien (Dodiciville) and Gries, which, autonomous since 1849, were annexed to Bolzano in 1910 and 1925 respectively.</p>
                            <p><strong>Location:</strong> Via Portici 30, Bolzano</p>
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
                        </div>
                    </div>

                    <div class="attractions-item">
                        <img src="pictures/Galleria.jpg" alt="Piccola Galleria">
                        <div class="details">
                            <h3>Piccola Galleria</h3>
                            <br>
                            <p>The Piccola Galleria is an exhibition space located in the historic center of the city, available to artists, organizations, and associations at an affordable cost. Managed by the Cultural Services Division of the Municipality of Bolzano, this gallery has been offering intriguing proposals of art and culture since 2002. Available by reservation, it serves as a vibrant platform for creative expression and community engagement.</p>
                            <p><strong>Address:</strong> Am Alten Rathaus, 8, Bolzano</p>
                        </div>
                    </div>

                    <div class="attractions-item">
                        <img src="pictures/SchoolMuseum.jpg" alt="Museo della Scuola">
                        <div class="details">
                            <h3>Museo della Scuola di Bolzano</h3>
                            <br>
                            <p>The Museo della Scuola, or School Museum, was inaugurated on May 12, 1995, at the historic "Elisabethschule," now known as the "Dante Alighieri" school. Since 2015, it has been located in Rencio, within the Renaissance palace also known as the "ex Agnello," which was formerly the site of the old neighborhood school.</p>
                            <p>The museum's exhibition allows visitors to rediscover various aspects of past school life in an engaging manner, with a focus primarily on Bolzano and the Alto Adige region from the late nineteenth century to the present day.                             . It was the first School Museum in Italy and the first in Europe dedicated to schools of linguistic minorities.</p>
                            <p><strong>Location:</strong> Via Rencio, 51b, Bolzano</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('attractions-page', AttractionsPage);

