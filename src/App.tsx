import { AppProviders } from "./providers/AppProvider";
import { Container } from "./components/Container";
import { Mind } from "./Mind";

function App() {
  return (
    <Container>
      <AppProviders>
        <Mind />
      </AppProviders>
    </Container>
  );
}

export default App;
