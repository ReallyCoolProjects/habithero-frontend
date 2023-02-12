import React from 'react'
import LoginView from './LoginView';
import ProfileView from './ProfileView'

const Profile = () => {
    const isLoggedIn = false;
  return (
    <section className='p-2' id='profile'>
        {isLoggedIn? 
<ProfileView/>
    :
<LoginView/>
    }

    </section>
  )
}

export default Profile