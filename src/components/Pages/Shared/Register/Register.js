
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {

    const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext);

    const [error, setError] = useState('');

    // for redirect means ----- login korar por kono ekta page e jaoya 
    const navigate = useNavigate();

    // location fatching for redirect the user 
    const location = useLocation();
    // And feachig the from
    const from = location.state?.from?.pathname || '/'


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password);
        
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            // error clean
            setError('');
            // set redirect page location means kon page e jete chai log in er por
           // navigate('/');
           //navigate(from, {replace: true});
            if(user.emailVerified){
                navigate(from, {replace: true});
            }
            else {
                toast.error('Your email is not verified');
            }
        }) 
        .catch(error => {
            console.error(error)
            setError(error.message);
        });
    }

    // google sign in handle 
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Successfully logged in');
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
        })
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
            <Button className='mb-4 w-100' variant="primary" type="submit">
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