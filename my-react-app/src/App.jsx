import "./App.css"; // Imports css file for styling.
import List from "./List.jsx"; // Imports the list from List.jsx to be displayed. 

// The whole function App() is what is returned since jsx can only return one element. 
function App() {
  const name = "Mya";
  const luckyNumber = Math.floor(Math.random() * 100);

// headingStyle has the style for the heading including color and font size. 
const headingStyle = {
    color: "pink",
    fontSize: "57px",
  };
// This code gets the current hour and changes the greeting based on the time of day. 
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  // the return statement returns the greeting (based on time), the name, the lucky number and the list from List.jsx. 
  return (
    <div>
       <h1 style={headingStyle}>{greeting}, {name}!</h1>
      <p>Your lucky number is {luckyNumber}</p>
      <List />
    </div>
  );
}

export default App;