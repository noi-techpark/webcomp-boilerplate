class FooterElement extends HTMLElement {
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
  
          .footer {
            background-color: #000000;
            color: #ffffff;
            padding: 40px 20px;
          }
  
          .footer-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
  
          .footer-section {
            flex: 1;
            margin: 20px;
            min-width: 200px;
          }
  
          .footer-logo {
            font-size: 30px;
            margin-bottom: 20px;
            font-weight: bold; 
          }

          .footer-contact {
            font-size: 25px; 
            font-weight: bold; 
          }  
          
          .footer-section h3 {
            margin-bottom: 20px;
          }
  
          .footer-section ul {
            list-style: none;
            padding: 0;
          }
  
          .footer-section ul li {
            margin-bottom: 10px;
          }
  
          .footer-section ul li a {
            color: #ffffff;
            text-decoration: none;
          }
  
          .footer-section ul li a:hover {
            text-decoration: underline;
          }

          .footer-bottom {
            text-align: center;
            margin-top: 40px;
          }
  
          .footer-bottom p {
            margin: 0;
          }
  
          .footer-bottom a {
            color: #00bcd4;
            margin: 0 10px;
            text-decoration: none;
          }
  
        </style>
  
        <footer class="footer">
          <div class="footer-container">
            <div class="footer-section">
              <h2 class="footer-logo">Touristic Attractions in Bolzano</h2>
              <p>
              The project aims to develop a dynamic web component focusing on the tourist attractions of Bolzano, providing detailed knowledge on historical sites, cultural sites, natural monuments and other points of interest. Using open-source data from the Open Data Hub, a cross-border digital platform, the component ensures accurate and up-to-date information, enriching the user experience for tourists and locals alike. Developed by computer science students Ridvan Plluzhina and Fabio Schick as part of their Software Systems Architecture course, the project reflects their passion for technology and innovation, aiming to create user-centric solutions that contribute to the advancement of the digital platform.
              </p>
              <p class="footer-contact">Get In Touch</p>
              <p>Ridvan.Plluzhina@student.unibz.it</p>
              <p>Fabio.Schick@student.unibz.it</p>
            </div>

            <div class="footer-section">
              <h3>About Us</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Attractions</a></li>
                <li><a href="#">Events</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="https://opendatahub.com/">Open Data Hub</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; 2024 - Touristic Attractions in Bolzano. All Rights Reserved</p>
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-element', FooterElement);
