import "./assets/css/reset.css";
import "./assets/css/App.css";

//Import Components
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>TO-DO React</h1>
      <Todo />
    </div>
  );
}

export default App;
