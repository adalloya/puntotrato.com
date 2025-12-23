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
        if (!auth) throw new Error("Firebase no configurado");

        console.log("Starting signup process...");
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User created in Auth:", user.uid);

        // Update profile with name
        await updateProfile(user, { displayName: name });
        console.log("Profile updated.");

        // Create user document in Firestore if DB is available
        if (db) {
            try {
                console.log("Attempting to write to Firestore...");
                await setDoc(doc(db, 'users', user.uid), {
                    email: user.email,
                    displayName: name,
                    role: 'user',
                    createdAt: new Date().toISOString()
                });
                console.log("Firestore write successful.");
            } catch (e) {
                console.error("Error creando info de usuario en DB:", e);
            }
        } else {
            console.log("DB instance is null, skipping Firestore.");
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
