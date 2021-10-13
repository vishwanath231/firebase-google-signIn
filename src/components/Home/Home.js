import React, { useState, useEffect } from 'react';
import useForm from '../useForm';
import './Home.css';


const Home = () => {

  const {signOut } = useForm()


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const username = params.get('name')
    const userEmail = params.get('email')
    const userProfile = params.get('profile')

    setName(username);
    setEmail(userEmail);
    setProfile(userProfile);

    
  }, [])

  return (
    <div className="home">
      <div className="box">
        <div className="flex">
          <div className="profile">
            <img src={profile} alt="" />
          </div>
          <div className="info">
            <h1>Hello, <span></span>{name}</h1>
            <p>{email}</p>
          </div>
         </div>
        <button className="signout" onClick={signOut}>Sign out</button>
      </div>
    </div>
  )
}

export default Home;