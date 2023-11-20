// import { useReducer } from "react";
// import "./App.css";

// function App() {
// 	function reducer(state, action) {
// 		switch (action.type) {
// 			case "ADD":
// 				return { count: state.count + 1 };
// 			case "SUB":
// 				return { count: state.count - 1 };
// 			case "ADD10":
// 				return { count: state.count + 10 };
// 			case "SUB10":
// 				return { count: state.count - 10 };
// 			case "RESET":
// 				return { count: 0 };
// 			default:
// 				return state;
// 		}
// 	}

// 	const [state, dispatch] = useReducer(reducer, { count: 0 });

// 	return (
// 		<div className="App">
// 			<p>Count is: {state.count}</p>
// 			<div>
// 				<button onClick={() => dispatch({ type: "ADD" })}>Add 1</button>
// 				<button onClick={() => dispatch({ type: "SUB" })}>Decrease 1</button>
// 				<button onClick={() => dispatch({ type: "ADD10" })}>Add 10</button>
// 				<button onClick={() => dispatch({ type: "SUB10" })}>Decrease 10</button>
// 				<button onClick={() => dispatch({ type: "RESET" })}>Reset count</button>
// 			</div>
// 		</div>
// 	);
// }

// export default App;

import './App.css';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { addOne, subOne, addSome, subSome, reset } from './store/action/count.actions';

import store from './store';

function App(){
  const dispatch = useDispatch();
  const count = useSelector(state => state.count)

  return (
    <Provider store={store}>
        <div className='App'>
          <p>
            Count is: {count}
          </p>
          <div>
            <button onClick={() => dispatch(addOne())}>Add 1</button>
            <button onClick={() => dispatch(subOne())}>Decrease 1</button>
            <button onClick={() => dispatch(addSome(10))}>ADD 10</button>
            <button onClick={() => dispatch(subSome(10))}>Decrease 10</button>

            <button onClick={() => dispatch(reset())}>Reset count</button>
          </div>
        </div>
    </Provider>
  )
}

export default App;