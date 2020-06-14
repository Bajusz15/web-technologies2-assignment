import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//todo: this is bad, we should actually check cookies not local storage. and also this lacks real authentication from backend, this just gets user
export const Auth = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        //todo: should ask backend, if user is authenticated
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)