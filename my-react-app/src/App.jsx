import "./App.css";

function App() {
  const name = "Mya";
  const luckyNumber = Math.floor(Math.random() * 100);

const headingStyle = {
    color: "pink",
    fontSize: "57px",
  };

  return (
    <div>
      <h1 style={headingStyle}>Hello, {name}!</h1>
      <p>Your lucky number is {luckyNumber}</p>
      <ul className="my-list">
        <li>Pumpkin pancakes</li>
        <li>Burger</li>
        <li>Milkshake</li>
      </ul>
    </div>
  );
}

export default App;