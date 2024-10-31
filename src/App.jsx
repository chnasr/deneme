import HelloReact from "./components/01-hello/hello-react";
import HelloWorld from "./components/01-hello/hello-world";
import Jsx1 from "./components/02-jsx/jsx1";
import { Jsx2 } from "./components/02-jsx/jsx2";
import { Jsx3 } from "./components/02-jsx/jsx3";
import { Jsx4 } from "./components/02-jsx/jsx4";
import { Jsx5 } from "./components/02-jsx/jsx5";
import { Jsx6 } from "./components/02-jsx/jsx6";
import { Style1 } from "./components/03-styles/style1";
import { Clock1 } from "./components/04-clock1/clock1";



const App = () => {
  return ( 
  <div>
    <h1>Hello APP</h1> 
   <HelloWorld/>
   <HelloReact/>
   <Jsx1/>
   <Jsx2/>
   <Jsx3/>
   <Jsx4/>
   <Jsx5/>
   <Jsx6/>
   <Style1/>
   <Style2/>
   <Style3/>
   <Style4/> 
   <Clock1/>

  </div>
  );
};

export default App;