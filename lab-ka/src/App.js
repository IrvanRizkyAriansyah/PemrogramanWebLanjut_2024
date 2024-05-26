import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const bgBlue = {
    backgroundColor: "blue",
    color: "white",
  };

  return (
    <div>
      <h1 style={bgBlue}>Hello world</h1>
      <HelloWorld />
    </div>
  );
}

export default App;
