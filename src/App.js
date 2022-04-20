import './App.css';
import { Heading } from "@unioncredit/ui";
import Wrapper from "./Wrapper";
import Header from "./Header";
import IntroCards from "./IntroCards";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header></Header>

        <IntroCards />
        <Heading level="1" size="xxxlarge">
          fucking oath cunt
        </Heading>
        <Heading level="2" size="xxlarge">
          Fucking oath cunt
        </Heading>
      </Wrapper>
    </div>
  );
}

export default App;
