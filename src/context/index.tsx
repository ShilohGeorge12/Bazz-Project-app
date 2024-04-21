'use client';
import { useContext, useReducer, createContext, ReactNode } from 'react';
import type { State, ReducerType, stateAction } from '../types';

const initState: State = {
	isloggedIn: false,
	user: {
		_id: '1',
		username: 'Guest User',
		password: '',
		createdAt: new Date(),
	},
};

const MyContext = createContext({
	state: initState,
	dispatch(_val: stateAction) {},
});

const reducer: ReducerType = (state, action) => {
	switch (action.type) {
		case 'user':
			return { ...state, user: action.payload.user };
		case 'logIn':
			return { ...state, isloggedIn: action.payload.isloggedIn, user: action.payload.user };
		case 'logOut':
			return { ...state, isloggedIn: action.payload.isloggedIn };
		default:
			return state;
	}
};

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	return <MyContext.Provider value={{ state, dispatch }}>{children}</MyContext.Provider>;
};

export const useGlobals = () => useContext(MyContext);
