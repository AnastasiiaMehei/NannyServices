// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase";
// import { signOut } from "firebase/auth";

// const registerUser = async (email, password, name) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password, name);
//     console.log("User registered:", userCredential.user);
//   } catch (error) {
//     console.error("Error registering user:", error);
//   }
// };
// const loginUser = async (email, password) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log("User logged in:", userCredential.user);
//     } catch (error) {
//       console.error("Error logging in user:", error);
//     }
//   };
  
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log("Current user:", user);
//     } else {
//       console.log("No user is signed in.");
//     }
//   });

//   const logoutUser = async () => {
//     try {
//       await signOut(auth);
//       console.log("User logged out");
//     } catch (error) {
//       console.error("Error logging out user:", error);
//     }
//   };