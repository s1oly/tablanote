import { useState, useEffect } from 'react';
import { auth, googleProvider } from '../../Config/firebaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';
import './auth.css'; // Assuming Auth.css contains your CSS styles

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Subscribe to auth state changes to update user information
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // No user is signed in
        setUser(null);
      }
    });

    // Clean up subscription
    return () => unsubscribe();
  }, []);

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {user && user.photoURL && (
        <img className="profile-picture" src={user.photoURL} alt="Profile" />
      )}
      <p />
      <button onClick={googleSignIn}>Sign in with Google</button>
      <p />
      {user && <button onClick={logout}>Log Out</button>}
    </div>
  );
};

export default Auth;
