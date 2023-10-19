import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitch, FaTwitter, FaInstagram } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const RightSideNav = () => {
    const { signInWithGoogle, } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);


            })
            .catch(error => {
                console.error("error: ", error)
            })
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>

            <div className='my-5'>
                <h5>Find Us On</h5>

                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <BrandCarousel />
            </div>
        </div>
    );
};

export default RightSideNav;