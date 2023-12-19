import { ReactFlowProvider } from "reactflow";
import { Container } from "./components/Container";
import { Mind } from "./Mind";

function App() {
  return (
    <Container>
      <ReactFlowProvider>
        <Mind />
      </ReactFlowProvider>
    </Container>
  );
}

export default App;
