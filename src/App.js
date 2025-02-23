
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import store, { counterSlice } from './store/index';
// const { increment, decrement, toggle } = counterSlice.actions;
import { counterActions } from './store/index';

function App() {
  const counter = useSelector(state=> state.counter)
  const show = useSelector(state=> state.showCounter)
  const dispatch = useDispatch();


const incrementHandler = ()=>{
  dispatch(counterActions.increment())

}

const decrementHandler = ()=>{
  dispatch(counterActions.decrement())


}

  const toggleCounterHandler = () =>{
    dispatch(counterActions.toggle())
  }
  return (
    <main className="counter">
      <h1>Redux Counter</h1>
     {show && <div className="value">{counter}</div>}
      <button onClick={incrementHandler}>Increase</button>
      <button onClick={decrementHandler}>Decrease</button>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}

export default App;
