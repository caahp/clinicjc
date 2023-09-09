import Navbar from './components/layout/Navbar/Navbar'
import styled from 'styled-components'

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
    </AppContainer>
  );
}

export default App;


