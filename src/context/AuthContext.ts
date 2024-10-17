import { User } from "firebase/auth";
import { createContext } from "react";


interface AuthContextType {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
