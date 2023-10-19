import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';


const SecureRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div style={{ marginLeft: "50%", marginTop: "20%" }}>
            <Spinner animation="border" variant="warning" />
        </div>;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }

    return children;

};

export default SecureRoute;