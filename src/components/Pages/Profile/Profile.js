import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image'

const Profile = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
          <div className='mb-3'>
            <Image roundedCircle src={user?.photoURL}></Image>
          </div>
          <h2>{user?.displayName}</h2>
          <p><small>{user?.email}</small></p>
        </div>
    );
};

export default Profile;