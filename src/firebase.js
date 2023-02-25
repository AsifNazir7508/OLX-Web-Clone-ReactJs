import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc , query, where, getDocs } from "firebase/firestore"; 
import { doc, updateDoc } from "firebase/firestore";

 

const firebaseConfig = {
  //Note API keys , appId is removed
    authDomain: "test-firebase-asif.firebaseapp.com",
    projectId: "test-firebase-asif",
    storageBucket: "test-firebase-asif.appspot.com",
    messagingSenderId: "1072545011781",
    measurementId: "G-RQPN09DJRB"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);


const signUp=(props)=>{

    let {name,email,password}=props
        
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }


    const signIn=async (props)=>{

      let {email,password}=props

      let result=await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
         // ...
        return{
            success:true,
            message:"successfull"
        }
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      return{
        success:false,
        message:"not successfull"
    }

  });
  return result
}
  
 
const addData=async (props)=>{

 
// Add a new document with a generated id.

try{

  
const docRef = await addDoc(collection(db, "olx"),props);
console.log("Document written with ID: ", docRef.id);


const updateRef = doc(db, "olx",docRef.id);


// Set the "capital" field of the city 'DC'
await updateDoc(updateRef, {
  itemId: docRef.id
});

return {
  message:"successfull",
  success:true

}

}
catch (e){

  console.error(e)

  return {
    message:"not successfull",
    success:false

  }



}


}



const getData=async()=>{


  let array=[];
  const q = query(collection(db, "olx"))
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

    array.push(doc.data())
  });
return array
}

const getSignleitemdata=async(itemId)=>{

  let array2=[];

  const q = query(collection(db, "olx"), where("itemId","==", itemId))
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  array2.push(doc.data())
  
  });

return array2

}

    export{
        signUp,getData,
        signIn,addData,
        getSignleitemdata
    }