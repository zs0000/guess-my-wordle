import { createContext, useContext, useState } from "react";
import { User } from "../types/User";


export const UserContext = createContext<User | null>(null);

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [username, setUsername] = useState("");

    const values = {
        username,
        setUsername
    }

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

