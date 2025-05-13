function MoodBoardItem({ color, image, description }) {
    return (
      <div className="mood-board-item" style={{ backgroundColor: color }}>
        <img className="mood-board-image" src={image} alt={description} />
        <h3 className="mood-board-text">{description}</h3>
      </div>
    );
  }
  
  function MoodBoard() {
    return (
      <div>
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
      </div>
    );
  }
  
  // Render to DOM
  ReactDOM.createRoot(document.getElementById("root")).render(<MoodBoard />);
  