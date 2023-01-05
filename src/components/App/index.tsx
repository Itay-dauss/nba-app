import { Container, Logo, ListsSection } from "./styles";
import AllPlayersList from "../AllPlayersList";
import FavoritePlayersList from "../FavoritePlayersList";
import NbaLogo from "../../images/NBA-logo.png";

const App = () => {
  return (
    <Container>
      <Logo src={NbaLogo} />
      <ListsSection>
        <AllPlayersList />
        <FavoritePlayersList />
      </ListsSection>
    </Container>
  );
};

export default App;
