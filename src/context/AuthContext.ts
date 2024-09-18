import { User } from "firebase/auth";
import { createContext, useState } from "react";


interface GameInterface {
    createdAt: Date; 
    id: string;
    score: number;
    userEmail: string; // E-mail do usuário
}

const [user,setUser] = useState<User>()



export let usuarios ={
        user, 
        setUser
}

const AuthContext = createContext(usuarios)

export default AuthContext

