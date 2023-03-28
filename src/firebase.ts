import { FirebaseApp, initializeApp } from 'firebase/app';
import { About, Project, Resume, Service } from './models'
import { getFirestore, CollectionReference,
   collection, DocumentData} 
   from "firebase/firestore";
import { getAuth, signInAnonymously } from 'firebase/auth';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,  
};

// Initialize Firebase
const app:FirebaseApp = initializeApp(firebaseConfig);
// Authentication
const auth = getAuth(app);
signInAnonymously(auth).then(()=>{
console.log('Authenticated successful from server')
}).catch((err)=>{console.log(err)});

const firestore = getFirestore(app);
const createCollection = < T = DocumentData>(collectionName:string)=>{
  return collection(firestore, collectionName) as CollectionReference<T>
}

const project = createCollection<Project>('projects');
const service = createCollection<Service>('services');
const about = createCollection<About>('about');
const resume = createCollection<Resume>('resume');

export { project, service, resume, about }; 