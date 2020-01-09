import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

interface Props {

}

const protectedRoutes = () => {
    return (
        <Switch>
            {/* <Route exact path="/" component={<div>'Home'</div>} />
            <Route exact path="/foo" component={<div>'Home'</div>} />
            <Route exact path="/bar" component={<div>'Home'</div>} /> */}
        </Switch>
    );
}

export default protectedRoutes;
