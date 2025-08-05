import React from 'react';
import "./Profile.css";
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/counter/userslice';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                console.log('User signed out successfully');
                navigate('/'); // Redirect to login or home page
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
                alert('Failed to sign out. Please try again.');
            });
    };

    return (
        <div className='profile'>
            <Nav />
            <div className="profile_body">
                <h1>Edit Profile</h1>
                <div className="profile_info">
                    <img src="https://i.pinimg.com/474x/b4/0b/51/b40b51418293936a6e0ad09ffa229cb7.jpg" alt='' />
                    <div className="profile_details">
                        <h2>{user.email}</h2>
                        <div className="profile_plans">
                            <button onClick={handleSignOut} className='profile_signout'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
