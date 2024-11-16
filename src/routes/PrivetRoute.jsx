import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../components/Loading";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation()
    

    if(user) {
        return children
    }

    if(loading) {
        return <Loading></Loading>
    }

    return (
        <Navigate state={location.pathname} to="/auth/login"></Navigate>
    );
};

PrivetRoute.propTypes = {
    children: PropTypes.object
}

export default PrivetRoute;