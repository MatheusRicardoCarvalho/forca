import { createContext, useState } from "react";

interface UserInterface {
    id: string;
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
    phoneNumber?: string | null;
    emailVerified: boolean;
    providerData: Array<{
    uid: string;
    displayName: string | null;
    email: string | null; 
    phoneNumber: string | null;
    //photoURL: string | null; 
    //providerId: string; // ID do provedor de autenticação (por exemplo, 'google.com', 'facebook.com')
    }>;
}

interface GameInterface {
    createdAt: Date; // Usado para representar o timestamp
    id: string; // Identificador único do usuário
    score: number; // Pontuação associada ao usuário
    userEmail: string; // E-mail do usuário
}

const [user,setUser] = useState()



export let usuarios ={
        user, 
        setUser
}

const AuthContext = createContext(usuarios)

export default AuthContext

