import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions/counter.action';
import { textInputChange } from './redux/actions/loginForm.action';
import { EMAIL, PASSWORD } from './redux/reducers/loginForm.reducer';
import './App.css';


function App() {
  const counter = useSelector(state => state.counter);
  const loginForm = useSelector(state => state.loginForm);
  const dispatch = useDispatch();
  console.log(loginForm);
  return (
    <div className="App">
      <h1>counter is: {counter}</h1>
      <button onClick={() => dispatch(increment())}>increment!</button>
      <button onClick={() => dispatch(decrement())}>decrement~</button>
      <input type="text" name={EMAIL} onChange={e => dispatch(textInputChange(e))} placeholder="email" value={loginForm.email}></input>
      <input type="text" name={PASSWORD} onChange={e => dispatch(textInputChange(e))} placeholder="password" value={loginForm.password}></input>
    </div>
  );
}

export default App;
