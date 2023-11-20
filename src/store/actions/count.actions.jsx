export const ADD = 'ADD';
export const addOne = () => ({ type: ADD });

export const SUB = 'SUB';
export const subOne = () => ({ type: SUB })

export const ADDSOME = 'ADDSOME';
export const addSome = (value) => ({
	type: ADDSOME,
	payload: value
});

export const SUBSOME = 'SUBSOME';
export const subSome = (value) => ({
	type: SUBSOME,
	payload: value
})

export const RESET = 'RESET'
export const reset = () => ({ type: RESET });