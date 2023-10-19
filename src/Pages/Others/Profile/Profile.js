import React, { useContext, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Profile = () => {
    const { user } = useContext(AuthContext);

    const [name, setName] = useState(user?.displayName);
    const photoURLRef = useRef(user?.photoURL);


    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);


    }

    const handleNameChange = event => {
        setName(event.target.value);
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control defaultValue={user?.email} readOnly type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={name} name='name' type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} name='photoURL' type="text" placeholder="photoURL" />
            </Form.Group>

            <Form.Group className="mb-3">

                <Button type="submit">Update Profile</Button>

            </Form.Group>
        </Form>
    );
};

export default Profile;