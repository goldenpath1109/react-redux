import { ADD, SUB, ADDSOME, SUBSOME, RESET } from "../actions/count.actions";

const CountReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case ADD:
			return { count: state.count + 1 };
		case SUB:
			return { count: state.count - 1 };
		case ADDSOME:
			return { count: state.count + action.payload };
		case SUBSOME:
			return { count: state.count - action.payload };
		case RESET:
			return { count: 0 };
		default:
			return state;
	}
};

export default CountReducer;
