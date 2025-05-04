// Firebase configuration
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, push, get, query, orderByChild, equalTo } from "firebase/database"

// Use the environment variables that are already available
// const NEXT_PUBLIC_FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
// const NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
// const NEXT_PUBLIC_FIREBASE_DATABASE_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
// const NEXT_PUBLIC_FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
// const NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
// const NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
// const NEXT_PUBLIC_FIREBASE_APP_ID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// const NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

const firebaseConfig = {
  apiKey: "AIzaSyDtNedkJo6ikNneZZdrheiWbE3Dn2B8kwQ",
  authDomain: "ces-project-f8b4e.firebaseapp.com",
  databaseURL: "https://ces-project-f8b4e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ces-project-f8b4e",
  storageBucket: "ces-project-f8b4e.firebasestorage.app",
  messagingSenderId: "580767851656",
  appId: "1:580767851656:web:2c852e7edb81a6decdeb3d",
  measurementId: "G-K73DSMWBTP",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export { database, ref, set, push, get, query, orderByChild, equalTo }

// Add validation to ensure Firebase is properly initialized
export const validateFirebaseConnection = async () => {
  try {
    // Test the database connection
    const testRef = ref(database, "connection_test")
    await set(testRef, {
      timestamp: new Date().toISOString(),
      status: "connected",
    })

    console.log("Firebase connection validated successfully")
    return true
  } catch (error) {
    console.error("Firebase connection validation failed:", error)
    return false
  }
}

