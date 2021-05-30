import { useLocation } from 'react-router';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

const AuthRedirectRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector(state => state.user.user);
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    return (
        <Route {...rest} render={props => (
            !auth?.email ?
                <Component {...props} />
                : <Redirect to={from} />
        )}
        />
    );
};
export default AuthRedirectRoute