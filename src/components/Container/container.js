import React, { Suspense, lazy } from 'react'
import {Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import { ThemeContext } from '../../themeContext';

import BackgroundChanger from '../BackgroundChanger/BackgroundChanger';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import Header from '../Header/Header';


const WelcomeCard = lazy(() => import('../WelcomeCard/WelcomeCard'));
const RecentForms = lazy(() => import('../RecentForms/RecentForms'));
const CreateNew = lazy(() => import('../CreateNew/CreateNew'));

function Container (props){
    const HeaderRoutedComponent = withRouter(props => <Header {...props}/>);
    return (
        <Router>
            <ThemeContext.Provider value={props.day}>
                {/* Passing background image src from background changer wrapper */}
                <BackgroundImage image={props.backgroundImage} />
                <HeaderRoutedComponent />
                <Suspense fallback={<div>Loading...</div>} >
                    <Switch>
                        <Route path="/" exact component={WelcomeCard} />
                        <Route path="/recent" component={RecentForms} />
                        <Route path="/create" component={CreateNew} />
                    </Switch>
                </Suspense>
            </ThemeContext.Provider>
        </Router>
    )
}

export default BackgroundChanger(Container);