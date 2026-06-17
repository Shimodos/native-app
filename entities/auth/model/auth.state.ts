import { createJSONStorage, atomWithStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'jotai';
import { IloginRequest, IAuthResponse } from './auth.interface';
import axios, { AxiosError } from 'axios';
import { API } from '../../user/api/api';

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

export const authAtom = atomWithStorage<AuthState>(
	'auth',
	{
		access_token: null,
		isLoading: false,
		error: null,
	},
	storage,
);

export const loginAtom = atom(
	(get) => get(authAtom),
	async (_get, set, { email, password }: IloginRequest) => {
		set(authAtom, {
			access_token: null,
			isLoading: true,
			error: null,
		});
		try {
			const response = await axios.post<IAuthResponse>(API.login, {
				email,
				password,
				// email: 'partisan@bk.ru',
				// password: 'J5knFU3PqsXNVKv',
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
					access_token: null,
					isLoading: false,
					error: error.response?.data?.message || 'Login failed',
				});
			} else {
				set(authAtom, {
					access_token: null,
					isLoading: false,
					error: 'An unexpected error occurred',
				});
			}
			console.error('Login failed:', error);
		}
	},
);

export interface AuthState {
	access_token: string | null;
	isLoading: boolean;
	error: string | null;
}
