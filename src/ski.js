class SkiResortPage extends HTMLElement {
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

            <div class="ski-resorts-list">

                <div class="ski-resort-item">
                    <img src="ski/Ski1.jpg" alt="Carezza Dolomites ski area	">
                    <h3>Carezza Dolomites ski area	</h3>
                    <p>Carezza Dolomites, a historic Alpine ski area since 1950, boasts 40 km of slopes accessed by modern cable cars and 11 lifts, just 20 minutes from Bolzano/Bozen. Perfect for families, it offers "King Laurin Children's World" and eco-friendly practices, using water from its own reservoirs for snow production.</p>
                    <button onclick="window.location.href='https://maps.app.goo.gl/ppRbkRPy8HZ2EAMT6'">Get There</button>
                </div>

                <div class="ski-resort-item">
                    <img src="ski/Ski2.jpg" alt="Jochgrimm ski area">
                    <h3> Jochgrimm ski area </h3>
                    <p>Jochgrimm ski area offers seven kilometers of slopes serviced by four lifts, ideal for beginners and families. With 'Fantiland' for kids and connections to Lavazè cross-country ski center, it's a top choice for school outings. Explore nearly 80 km of trails in surrounding villages, or opt for snowshoeing for serene views of Dolomite peaks.                    </p>
                    <button onclick="window.location.href='https://maps.app.goo.gl/H7h9CkP71M2mr8Yq7'">Get There</button>
                </div>

                <div class="ski-resort-item">
                    <img src="ski/Ski3.jpg" alt="Reinswald ski area">
                    <h3> Reinswald ski area </h3>
                    <p>In the Sarntal valley, the ski lifts climb to 2400 m, offering various slopes, including the challenging "Joch slope". Snowboarders enjoy the Sunpark, while cross-country skiers explore scenic trails. Don't miss the famous "Sarner Striezl" bread at the valley station and experience thrilling toboggan runs under the full moon in Reinswald.</p>
                    <button onclick="window.location.href='https://maps.app.goo.gl/3dZJ5Uvp38G11oK97'">Get There</button>
                </div>

                <div class="ski-resort-item">
                <img src="ski/Ski4.jpg" alt="Rittner Horn ski area">
                <h3>Rittner Horn ski area</h3>
                <p>Climb the Rittner Horn for a stunning 360° panorama of the Dolomites and Alps. Families enjoy the quiet ski area at Rittner Horn, while cross-country skiers explore the alpine trails. Enjoy winter hiking and sledding, and don't miss speed skating at the high-altitude rink. Access by cable car from Bolzano to Soprabolzano, then a scenic railway to Collalbo.</p>
                <button onclick="window.location.href='https://maps.app.goo.gl/VRcjwrzhETZ2o2sp9'">Get There</button>
                </div>

            </div>
        </section>
    `;
}
}

customElements.define('ski-resort-page', SkiResortPage);
