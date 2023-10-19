import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');
    const { loginWithEmailAndPassword, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';


    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailAndPassword(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                if (user.emailVerified) {

                    navigate(from, { replace: true });
                    toast.success("login successfully")
                }
                else {
                    toast.error("your email is not verified. please verify your email address then try to login")
                }
                setError('');

            })
            .catch((error) => {
                console.error("error: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })




    }
    return (
        <Form onSubmit={handleLogin}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={10}>
                    <Form.Control name='email' type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Password
                </Form.Label>
                <Col sm={10}>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                </Col>
            </Form.Group>
            <p className='text-danger'> {error.message}</p>
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Login</Button>
                </Col>
            </Form.Group>
            <p>Don't Have any account? <Link to='/register'>Register</Link></p>
        </Form>
    );
};

export default Login;