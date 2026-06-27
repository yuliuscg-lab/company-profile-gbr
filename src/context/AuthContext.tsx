import Backendless from "backendless";
import {
	createContext,
	useContext,
	useEffect,
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
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

type Props = {
	children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState<Backendless.User | null>(null);
	const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

	const nav = useNavigate();

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
				true, // Mengaktifkan stayLoggedIn / remember me
			);
			console.log(authUser);
			setUser(authUser);
			onSuccess?.();
			nav(ROUTES.CMSDASHBOARD);
		} catch (error) {
			onError?.();
			console.error(error);
			setUser(null);
		} finally {
			setIsAuthenticating(false);
		}
	};

	const signOut = async () => {
		try {
			await Backendless.UserService.logout();
			setUser(null);
			nav(ROUTES.CMS);
		} catch (error) {
			console.error(error);
		}
	};

	const refreshUser = async () => {
		try {
			const currentUser = await Backendless.UserService.getCurrentUser();
			setUser(currentUser);
		} catch (error) {
			console.error("Failed to refresh user:", error);
		}
	};

	const checkAuth = async () => {
		setIsAuthenticating(true);
		try {
			const isValid = await Backendless.UserService.isValidLogin();
			if (isValid) {
				await refreshUser();
			} else {
				setUser(null);
			}
		} catch (error) {
			console.error("Failed to check auth:", error);
			setUser(null);
		} finally {
			setIsAuthenticating(false);
		}
	};

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		checkAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				signIn,
				signOut,
				isAuthenticating,
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
