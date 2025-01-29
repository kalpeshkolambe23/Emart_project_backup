import React from "react";

const cards = [
  {
    title: "Mountain View",
    copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
    button: "Add Cart",
    imageId: "1517021897933-0e0319cfbc28",
  },
  {
    title: "To The Beach",
    copy: "Plan your next beach trip with these fabulous destinations",
    button: "Add Cart",
    imageId: "1533903345306-15d1c30952de",
  },
  {
    title: "Desert Destinations",
    copy: "It's the desert you've always dreamed of",
    button: "Add Cart",
    imageId: "1545243424-0ce743321e11",
  },
  {
    title: "Explore The Galaxy",
    copy: "Seriously, straight up, just blast off into outer space today",
    button: "Add Cart",
    imageId: "1531306728370-e2ebd9d7bb99",
  },
  {
    title: "Galaxy Views",
    copy: "Plan your next adventure in outer space",
    button: "Add Cart",
    imageId: "1531306728370-e2ebd9d7bb99",
  },
  {
    title: "Beach Paradise",
    copy: "Enjoy the serenity of crystal-clear beaches",
    button: "Book Now",
    imageId: "1533903345306-15d1c30952de",
  },
  {
    title: "Beach Paradise",
    copy: "Enjoy the serenity of crystal-clear beaches",
    button: "Book Now",
    imageId: "1533903345306-15d1c30952de",
  },
  {
    title: "Beach Paradise",
    copy: "Enjoy the serenity of crystal-clear beaches",
    button: "Book Now",
    imageId: "1533903345306-15d1c30952de",
  },
];

const Card = ({ title, copy, button, imageId }) => {
  const cardStyles = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    overflow: "hidden",
    padding: "1rem",
    width: "100%",
    height: "350px",
    textAlign: "center",
    color: "whitesmoke",
    backgroundColor: "whitesmoke",
    border: "2px solid #ccc",
    borderRadius: "10px",
    boxShadow:
      "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  };

  const beforeStyles = {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 1.05s cubic-bezier(0.19, 1, 0.22, 1)",
    pointerEvents: "none",
    backgroundImage: `url(https://images.unsplash.com/photo-${imageId}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max)`,
  };

  const gradientOverlayStyles = {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
    zIndex: 1,
  };

  const contentStyles = {
    position: "relative",
    zIndex: 2,
  };

  const titleStyles = {
    fontSize: "1.3rem",
    fontWeight: "bold",
    lineHeight: 1.2,
  };

  const copyStyles = {
    fontFamily: "'Cardo', serif",
    fontSize: "1.125rem",
    fontStyle: "italic",
    lineHeight: 1.35,
  };

  const buttonStyles = {
    cursor: "pointer",
    marginTop: "1.5rem",
    padding: "0.75rem 1.5rem",
    fontSize: "0.8rem",
    fontWeight: "bold",
    letterSpacing: "0.025rem",
    textTransform: "uppercase",
    color: "white",
    backgroundColor: "black",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <div
      className="card"
      style={cardStyles}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={beforeStyles}></div>
      <div style={gradientOverlayStyles}></div>
      <div className="content" style={contentStyles}>
        <h2 className="title" style={titleStyles}>
          {title}
        </h2>
        <p className="copy" style={copyStyles}>
          {copy}
        </p>
        <button className="btn" style={buttonStyles}>
          {button}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const containerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1rem",
    padding: "1rem",
  };

  return (
    <main className="page-content" style={containerStyles}>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          copy={card.copy}
          button={card.button}
          imageId={card.imageId}
        />
      ))}
    </main>
  );
};

export default App;
