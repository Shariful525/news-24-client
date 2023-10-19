import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUserProfile, emailVerification } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event?.target;
        const name = form?.name?.value;
        const email = form?.email?.value;
        const password = form?.password?.value;
        const photoURL = form?.photoURL?.value;
        console.log(photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success("please verify your email")
            })
            .catch(error => {
                console.error("error: ", error);
                setError(error.message)
            })


    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };

        updateUserProfile(profile)

            .then(() => { })
            .catch((error) => { console.error(error) })
    }
    const handleEmailVerification = () => {
        emailVerification()
            .then(() => { })
            .catch(error => console.error(error))
    }



    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }
    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Your Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Enter a photoURL" />
            </Form.Group>


            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Accept T&C</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text>
                <p className='text-danger'>{error.message}</p>
            </Form.Text>
            <p>Already Have an account? <Link to='/login'>Login</Link></p>
        </Form>
    );
};

export default Register;