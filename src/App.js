import { Provider, useSelector, useDispatch } from "react-redux";
import {
	addOne,
	subOne,
	addSome,
	subSome,
	reset,
} from "./store/actions/count.actions";

import store from "./store";

function App() {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count);

	return (
		<Provider store={store}>
			<div className="App">
				<p>Count is: {count}</p>

				<div>
					<button onClick={() => dispatch(addOne())}>Add 1</button>

					<button onClick={() => dispatch(subOne())}>Decrease 1</button>

					<button onClick={() => dispatch(addSome(10))}>Add 10</button>
					<button onClick={() => dispatch(subSome(10))}>Decrease 10</button>

					<button onClick={() => dispatch(reset())}>Reset count</button>
				</div>
			</div>
		</Provider>
	);
}

export default App;
