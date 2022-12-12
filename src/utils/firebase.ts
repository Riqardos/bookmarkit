import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut as authSignOut,
	onAuthStateChanged,
	User
} from 'firebase/auth';

// Initialize Firebase
initializeApp({
	apiKey: 'AIzaSyB3VKfiDB1DEoJ6nhuzydT7CqP46qUXIwU',
	authDomain: 'bookmarkit-46681.firebaseapp.com',
	projectId: 'bookmarkit-46681',
	storageBucket: 'bookmarkit-46681.appspot.com',
	messagingSenderId: '672884086913',
	appId: '1:672884086913:web:6600a45162c9919630d580'
});

// Authentication
const auth = getAuth();

// Sign up handler
export const signUp = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

// Sign in handler
export const signIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

// Sign out handler
export const signOut = () => authSignOut(auth);

// Subscribe to auth state changes
export const onAuthChanged = (callback: (u: User | null) => void) =>
	onAuthStateChanged(auth, callback);
