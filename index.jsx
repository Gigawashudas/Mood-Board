function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#">Widgets</a>
        </li>
        <li className="nav-item">
          <button aria-expanded="false">Apps</button>
          <ul className="sub-menu" aria-label="Apps">
            <li>
              <a href="#">Calendar</a>
            </li>
            <li>
              <a href="#">Chat</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-section">
        <ul>
          <li>
            <a href="#">Fitness Dashboard</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Watch Videos</a>
          </li>
          <li>
            <a href="#">Discord</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
      <p>© 2024 Fitness Dashboard. All Rights Reserved.</p>
      <div class="footer-icons">
        <a href="#">🎮</a>
        <a href="#">🐦</a>
        <a href="#">💻</a>
        <a href="#">🏀</a>
      </div>
    </footer>
  );
};

function MoodBoard() {
  return (
    <div>
      <Navbar />
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="green"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Caribbean"
        />
        <MoodBoardItem
          color="purple"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Gawadar Beach"
        />
        <MoodBoardItem
          color="skyblue"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Cape Town"
        />
        <MoodBoardItem
          color="rgb(191, 61, 126)"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Suez Canal"
        />
        <MoodBoardItem
          color="rgb(231, 76, 60)"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Santorini"
        />
        <MoodBoardItem
          color="rgb(149, 165, 166)"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="Istanbul"
        />
      </div>
      <Footer />
    </div>
  );
}

// Render to DOM
ReactDOM.createRoot(document.getElementById("root")).render(<MoodBoard />);
