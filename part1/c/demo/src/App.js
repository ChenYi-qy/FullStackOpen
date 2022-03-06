import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

/*
 Use Decstructure: 
  props = {
    name: 'Arto Hellas'.
    age: 35
  }
*/ 

/**
 *  props = {onClick, text}
 */

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Display = ({counter}) => {
  return (
    <div>
      {counter}
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
        />
      <Button
        onClick={decreaseByOne}
        text='minus'
        />  
    </div>

  )
}

export default App;
