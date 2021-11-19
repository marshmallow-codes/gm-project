import "./styles/partials/_typography.scss";
import Nav from "./components/Nav";
import Map from "./components/map/map"
import Prototype from "./components/prototype/prototype";
import "./App.scss";

function App() {
  return (
    <>
      <Map />
      <Prototype />
      <Nav />
    </>
  );
}

export default App;
