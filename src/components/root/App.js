import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container>
      <Navi />
      <Dashboard></Dashboard>
    </Container>
  );
}

export default App;
