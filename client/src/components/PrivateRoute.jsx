import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//todo: this is bad, we should actually check cookies not local storage. and also this lacks real authentication from backend, this just gets user

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        //todo: should ask backend, if user is authenticated

        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) === ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) === 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }