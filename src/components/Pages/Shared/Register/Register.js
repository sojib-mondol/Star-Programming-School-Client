
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {

    const {createUser, googleSignIn, githubSignIn, updateUserProfile, verifyEmail} = useContext(AuthContext);

    const [error, setError] = useState('');

    //for trums and conditions 
    const [accepted, setAccepted] = useState(false);

    // for redirect means ----- login korar por kono ekta page e jaoya 
    const navigate = useNavigate();
    // location fatching for redirect the user 
    const location = useLocation();
    // And feachig the from
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPassword.value;
        const name = form.name.value;
        const photoURL = form.photo.value;
        
        console.log(email, password, name, photoURL);

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }

        if (password !== confirm) {
            setError('Your Password did not match');
            return;
        }

        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            // error clean
            setError('');
            // user info update
            handleUpdateUserProfile(name, photoURL);
            // verifying email
            handleEmailVerification();
            toast.success('Please verify your email Address.');
            //navigate(from, {replace: true});
           navigate(from, {replace: true});
            
           
        }) 
        .catch(error => {
            console.error(error)
            setError(error);
        });
    }

    // google sign in handle 
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Successfully logged in');
            //navigate(from, {replace: true});
           navigate(from, {replace: true});
        })
        .catch(error => console.error(error));
    }

    //GitHub signin
    const handleGitHubSignIn = () => {
        githubSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Successfully logged in');
            //navigate(from, {replace: true});
           navigate(from, {replace: true});
        })
        .catch(error => console.error(error));
    }

    // updating the user profile
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name, 
            photoURL: photoURL 
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }

    // email verify handle
    const handleEmailVerification = () =>{
        verifyEmail()
        .then(() => {})
        .catch(error => console.error(error));
    }


    return (
        <div className='w-50 m-auto'>
        <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter full name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photo' type="text" placeholder="Enter photo url" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name='confirmPassword' type="password" placeholder="Confirm password" required/>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                type="checkbox" 
                onClick={handleAccepted}
                label={<>Accept <Link to='/trams'>Trams and Conditions</Link></>} />
            </Form.Group>
            <Button className='mb-4 w-100' variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger">
            {error}
            </Form.Text>
        </Form>
        
        <div className='text-center mb-3'>
            <p>Alredy a member? <Link to='/login'>Please Login</Link>  </p>
        </div>
        <div className='text-center mb-3'>
            <p>or sign in with: </p>
        </div>
        <div className='text-center mb-3'>
            <FaGoogle onClick={handleGoogleSignIn}  className='me-4 ' style={{cursor:'pointer'}}></FaGoogle>
            
            <FaGithub onClick={handleGitHubSignIn} style={{cursor:'pointer'}}></FaGithub>
        </div>
    </div>
    );
};

export default Register;