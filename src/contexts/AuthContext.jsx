// src/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, Login } from '../api/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        auth.get('/me')
            .then(res => setUser({ id: res.data.id, role: res.data.role, roleId: res.data.roleId }))
            .catch(() => setUser(null))
            .finally(() => setAuthLoading(false));
    }, []);

    console.log(user)

    const login = async (email, password) => {
        await Login(email, password)
        const me = await auth.get('/me');
        setUser({ id: me.data.id, role: me.data.role, roleId: me.data.roleId });
    };

    const logout = async () => {
        await auth.post('/logout');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, authLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
