import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function signup(email, password, name) {
        if (!auth) throw new Error("Firebase no está configurado. Revisa el archivo .env");
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update profile with name
        await updateProfile(user, { displayName: name });

        // Create user document in Firestore if DB is available
        if (db) {
            try {
                await setDoc(doc(db, 'users', user.uid), {
                    email: user.email,
                    displayName: name,
                    role: 'user',
                    createdAt: new Date().toISOString()
                });
            } catch (e) {
                console.error("Error creando info de usuario en DB:", e);
            }
        }

        return user;
    }

    function login(email, password) {
        if (!auth) throw new Error("Firebase no está configurado. Revisa el archivo .env");
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        if (!auth) return Promise.resolve();
        return signOut(auth);
    }

    useEffect(() => {
        if (!auth) {
            console.warn("AuthContext: Firebase Auth no disponible. Omitiendo listener.");
            setLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
