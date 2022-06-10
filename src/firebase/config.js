import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDUNaoVEZqrCCunYNLblHx9pPVAhVYApaY",
  authDomain: "eco-vue.firebaseapp.com",
  projectId: "eco-vue",
  storageBucket: "eco-vue.appspot.com",
  messagingSenderId: "1041881934472",
  appId: "1:1041881934472:web:70649bdccb245ec8d40d3d"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export{
    projectFirestore, timeStamp
}