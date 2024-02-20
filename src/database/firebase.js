import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDMil9QoR3RfZxNh0nUwK4CqH7-53Mwnp4",
  authDomain: "cadastro-pacientes-81343.firebaseapp.com",
  projectId: "cadastro-pacientes-81343",
  storageBucket: "cadastro-pacientes-81343.appspot.com",
  messagingSenderId: "720100533998",
  appId: "1:720100533998:web:e1169f44548e3bc9a6b5ff",
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()
