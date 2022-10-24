import "./App.css"
import "normalize.css"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Hola, ¿Cómo estas?"}/>
    </div>
  );
}

export default App;
