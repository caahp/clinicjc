import Navbar from './components/layout/Navbar/Navbar'
import styled from 'styled-components'
import Screen from './components/layout/Screen/Screen';
import CardsGroup from './components/layout/Cards/Cards';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(180deg, #ffffff 20%, #ffffff);
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Screen/>
      <CardsGroup />
    </AppContainer>
  );
}

export default App;


