import { createJSONStorage, atomWithStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'jotai';
import { IloginRequest, IAuthResponse } from './auth.interface';
import axios, { AxiosError } from 'axios';
import { API } from '../../user/api/api';

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

const INITIAL_AUTH_STATE = {
	access_token: null,
	isLoading: false,
	error: null,
};

export const authAtom = atomWithStorage<AuthState>('auth', INITIAL_AUTH_STATE, storage);

export const loginAtom = atom(
	(get) => get(authAtom),
	async (_get, set, { email, password }: IloginRequest) => {
		set(authAtom, INITIAL_AUTH_STATE);
		try {
			const response = await axios.post<IAuthResponse>(API.login, {
				email,
				password,
			});
			set(authAtom, {
				access_token: response.data.accessToken,
				isLoading: false,
				error: null,
			});
			console.log('Login successful:', response.data);
		} catch (error) {
			if (error instanceof AxiosError) {
				set(authAtom, {
					...INITIAL_AUTH_STATE,
					error: error.response?.data?.message || 'Login failed',
				});
			} else {
				set(authAtom, {
					...INITIAL_AUTH_STATE,
					error: 'An unexpected error occurred',
				});
			}
			console.error('Login failed:', error);
		}
	},
);

export const logoutAtom = atom(null, (_get, set) => {
	set(authAtom, INITIAL_AUTH_STATE);
});

export interface AuthState {
	access_token: string | null;
	isLoading: boolean;
	error: string | null;
}
