import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import { Login, Signup } from "../pages";
import { PublicPagesContainer } from '../components/styledComponent';

interface Props {

}

const publicRoutes = () => {
    return (
        <Switch>
            <PublicPagesContainer>
                <Route exact path="/" >
                    <Redirect to='/login' />
                </Route>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
            </PublicPagesContainer>
        </Switch>
    );
}

export default publicRoutes;
