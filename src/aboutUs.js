class AboutUsPage extends HTMLElement {
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

                .about-us-section {
                    padding: 50px 20px;
                    background-color: #f8f8f8;
                    text-align: center;
                }

                .about-us-section h2 {
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

                .about-us-list {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .about-us-item {
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    width: 300px;
                    padding: 20px;
                    text-align: center;
                }

                .about-us-item img {
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                    margin-bottom: 20px;
                }

                .about-us-item h3 {
                    font-size: 24px;
                    margin: 0 0 10px;
                    color: #333;
                }

                .about-us-item p {
                    font-size: 16px;
                    color: #666;
                    margin: 0 0 20px;
                }
            </style>

            <section class="about-us-section">
                <h2> About Us </h2>
                <div class="about-us-list">
                    <div class="about-us-item">
                        <img src="pictures/goal.jpg" alt="Our Goal">
                        <h3> Our Goal </h3>
                        <p>The project aims to create a dynamic web component that provides users with detailed information about Bolzano's touristic attractions. This includes historical sites, cultural venues, natural landmarks, and other points of interest. The component will leverage open data to offer accurate information, enhancing the user experience for both tourists and residents.</p>
                    </div>

                    <div class="about-us-item">
                        <img src="pictures/data.jpg" alt="Data Sources">
                        <h3> Data Sources </h3>
                        <p>Our project contains data that were available from Open Data Hub, a cross-border digital platform that helps start-ups, companies, and research institutes to develop digital solutions based on real data. These data are sourced from various data providers, ensuring comprehensive and up-to-date information.</p>
                    </div>

                    <div class="about-us-item">
                        <img src="pictures/question.jpg" alt="Who We Are">
                        <h3> Who We Are </h3>
                        <p>Ridvan Plluzhina and Fabio Schick are computer science students who have developed this web component as part of the Software Systems Architecture subject. With a passion for technology and innovation, they are committed to creating solutions that enhance user experiences and contribute to the advancement of digital platforms.</p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('aboutus-page', AboutUsPage);
