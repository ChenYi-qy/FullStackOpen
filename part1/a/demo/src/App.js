import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Yi" />
      
      <Hello name="Chen" />
    </div>
  )
}


export default App;
