import Backendless from "backendless";
import {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
	type ReactNode,
} from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../routes/routePaths";

interface IAuthContext {
	user: Backendless.User | null;
	signIn: (
		email: string,
		password: string,
		onSuccess?: () => void,
		onError?: () => void,
	) => void;
	signOut: () => void;
	isAuthenticating: boolean;
	forcedLogout: ()=>void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

type Props = {
	children: ReactNode;
};

const USER_CACHE_KEY = 'cms_user_cache';

const AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState<Backendless.User | null>(()=> {
		try {
			const cached = localStorage.getItem(USER_CACHE_KEY);
			return cached ? JSON.parse(cached):null;
		} catch (error) {
			console.error('Error: ', error);
			return null;
		}
	});
	const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);
	
	const userRef = useRef<Backendless.User | null>(null);

	useEffect(() => {
		userRef.current = user;
	}, [user]);

	const nav = useNavigate();

	const persistUser = (u:Backendless.User | null) => {
		setUser(u);
		if(u) {
			localStorage.setItem(USER_CACHE_KEY, JSON.stringify(u));
		} else {
			localStorage.removeItem(USER_CACHE_KEY);
		}
	};

	const signIn = async (
		email: string,
		password: string,
		onSuccess?: () => void,
		onError?: () => void,
	) => {
		setIsAuthenticating(true);
		try {
			const authUser = await Backendless.UserService.login(
				email,
				password,
				true,
			);
			persistUser(authUser);
			console.log(authUser);
			onSuccess?.();
			nav(ROUTES.CMSARTICLES);
		} catch (error) {
			onError?.();
			console.error(error);
			persistUser(null);
		} finally {
			setIsAuthenticating(false);
		}
	};

	const signOut = async () => {
		try {
			await Backendless.UserService.logout();
			persistUser(null);
			nav(ROUTES.CMS);
		} catch (error) {
			console.error(error);
		}
	};

	const refreshUser = async () => {
		try {
			const currentUser = await Backendless.UserService.getCurrentUser();
			persistUser(currentUser)
		} catch (error) {
			console.error("Failed to refresh user:", error);
		}
	};

	const checkAuth = async () => {
		try {
			const isValid = await Backendless.UserService.isValidLogin();
			if (isValid) {
				await refreshUser();
			} else {
				if(userRef.current) {
					forcedLogout();
				} else {
					persistUser(null);
				}
			}
		} catch (error) {
			console.error("Failed to check auth:", error);
			if (userRef.current) {
				forcedLogout();
			} else {
				persistUser(null);
			}
		} finally {
			setIsAuthenticating(false);
		}
	};

	const forcedLogout = () => {
		persistUser(null);
		nav(ROUTES.CMS);
	};
	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		checkAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps

		const handleFocus = () => checkAuth();
		window.addEventListener('focus', handleFocus);

		const IntervalId = setInterval(() => {
			checkAuth();
		}, 60*1000);

		return () => {
			window.removeEventListener('focus', handleFocus);
			clearInterval(IntervalId);
		} 
		}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				signIn,
				signOut,
				isAuthenticating,
				forcedLogout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth };
