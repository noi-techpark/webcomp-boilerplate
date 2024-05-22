class NearParkings extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["coordinates"];
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    if (propName === "coordinates") {
      this.render();
    }
  }

  get coordinates() {
    return this.getAttribute("coordinates");
  }

  set coordinates(newCoords) {
    this.setAttribute("coordinates", newCoords);
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    let coords = this.coordinates.split(",").map(Number);

    let leftX, leftY, rightX, rightY;
    if (coords.length === 2) {
      [leftX, leftY] = coords;
      rightX = leftX + 0.01;
      rightY = leftY + 0.01;
      leftX = (leftX - 0.01).toFixed(2);
      leftY = (leftY - 0.01).toFixed(2);
      rightX = rightX.toFixed(2);
      rightY = rightY.toFixed(2);
    } else if (coords.length === 4) {
      [leftX, leftY, rightX, rightY] = coords.map((coord) => coord.toFixed(2));
    } else {
      this.shadow.innerHTML = `<p>Invalid coordinates provided.</p>`;
      return;
    }

    const response = await fetch(
      `https://mobility.api.opendatahub.com/v2/flat%2Cnode/ParkingStation?limit=200&offset=0&where=scoordinate.bbi.%28${leftX}%2C${leftY}%2C${rightX}%2C${rightY}%29&shownull=false&distinct=true`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );

    const data = await response.json();

    let content = `
    <style>
    h1 {
      color: red;
    }
    .coordinates-container {
        background-color: #f1f1f1;
        padding: 10px;
      margin-bottom: 20px;
      border-radius: 5px;
      font-size: 14px;
      color: #333;
    }
    .parking-container {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    .parking {
      background-color: #f1f1f1;
      color: #333333;
      padding: 5px 10px;
      margin: 5px 0;
      border-radius: 5px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
    }
    .availability-bar {
      position: relative;
      height: 6px;
      width: 100%;
      background: linear-gradient(to left, #28a745, #ffc107, #dc3545);
      margin-top: 10px;
    }
    .availability-arrow {
      position: absolute;
      height: 16px;
      width: 16px;
      transform: translateY(-5px);
      border-radius: 50%;
      border: 2px solid #ccc;
      background-color: #fff;
      transition: transform 0.5s;
    }
    .availability-text {
        margin-top: 10px;
      font-size: 14px;
      font-weight: bold;
      color: #666;
    }
  </style>
  <div class="coordinates-container">
    <strong>Search Coordinates:</strong><br>
    Left X: ${leftX}, Left Y: ${leftY}<br>
    Right X: ${rightX}, Right Y: ${rightY}
  </div>
        <div class="parking-container">
      `;

    data.data.forEach((parking) => {
      const capacity = parking.smetadata.capacity;
      const arrowPosition = (capacity > 100 ? 100 : capacity) - 5;

      content += `
          <div class="parking">
            <h3>${parking.sname}</h3>
            <div class="availability-bar">
              <div class="availability-arrow" style="left: ${arrowPosition}%;"></div>
            </div>
            <div class="availability-text" style="left: ${arrowPosition};">
              Capacity: ${capacity}
            </div>
          </div>
        `;
    });

    content += `</div>`;

    this.shadow.innerHTML = content;
  }
}

customElements.define("near-parkings", NearParkings);
