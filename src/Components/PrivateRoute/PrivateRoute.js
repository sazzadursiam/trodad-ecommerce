
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

export default function PrivateRoute({ children }) {
    const {authUser, setAuthUser} = useContext(UserContext);

    const location = useLocation();

    return authUser.email ? children : <Navigate to="/user/login" replace state={{from: location}}/>;
                
            

}