import React, { useEffect, useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider, projectFirestore } from './firebase/config'

import ImageGrid from './comps/ImageGrid';
import Modal from './comps/modal/Modal';
import Title from './comps/title/Title';
import UploadForm from './comps/UploadForm';
import Loading from './comps/loader/Loading'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [docs, setDocs] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  

  useEffect(() => {
    getDocs("images")
  }, []);

  const getDocs = (collection, uid = -1) => {
    setDocs(null)
    if(uid === -1) {
      projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
          let documents = [];
          snap.forEach(doc => {
            documents.push({...doc.data(), id: doc.id});
          });
          setDocs(documents);
      });
    } else {
 
      projectFirestore.collection(collection).where('uid', "==", uid)
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
          let documents = [];
          snap.forEach(doc => {
            documents.push({...doc.data(), id: doc.id});
          });
          setDocs(documents);
      });
    }
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(result => {
      const newUser = {
        uid: result.user.uid,
        fullname: result.user.displayName,
        imageUrl: result.user.photoURL
      }
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    })
  }

  const logoutWithGoogle = () => {
    localStorage.removeItem('user');
    setUser(null);
    getDocs("images")
  }

  return (
    <div className="App">
      <Title 
        type="home" 
        user={user} 
        handleLogin={signInWithGoogle} 
        handleLogout={logoutWithGoogle}
        getDocsOfUser={() => getDocs("images", user.uid)}
        clickLogo={() => getDocs("images")}
      />
      <UploadForm user={user} signInWithGoogle={signInWithGoogle}/> 
      { docs == null || docs.length == 0 ? <Loading style={{marginTop: 'calc(147px - 22px)'}} /> : <ImageGrid docs={docs} setSelectedImg={setSelectedImg} />}
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
