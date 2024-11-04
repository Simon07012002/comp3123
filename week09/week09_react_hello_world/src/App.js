import logo from './logo.svg';
import './App.css';
import Welcome, {Greet} from './compenents/Welcome';
import Greetings from './compenents/Greetings';
import SayHello from './compenents/SayHello';

function App() {
  return (<div className='App'>
    <img src={logo}/>
      <h1>Hello</h1>
      <h1>Test</h1>
      <Welcome></Welcome>
      <Greet/>
      <Greetings name="GBC"></Greetings>
      <SayHello fname="Simon" lname=" Vu"></SayHello>
      </div>)
}

export default App;
