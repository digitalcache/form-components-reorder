import React from 'react'
import {Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BackgroundChanger from '../BackgroundChanger/BackgroundChanger';
import Header from '../Header/Header';
import WelcomeCard from '../WelcomeCard/WelcomeCard';
import RecentForms from '../RecentForms/RecentForms';
import NavigationSlider from '../NavigationSlider/NavigationSlider';
import CreateNew from '../CreateNew/CreateNew';

function Container (props){
    const HeaderRoutedComponent = withRouter(props => <Header {...props}/>);
    return (
        <div className="centralContainer">
            <Router>
                <HeaderRoutedComponent />
                <Route render={({location})=> (
                    <TransitionGroup>
                        <CSSTransition key={location.key} timeout={300} classNames="fade">
                            <Switch location={location}>
                                <Route path="/" exact component={WelcomeCard} />
                                <Route path="/nav" exact component={NavigationSlider} />
                                <Route path="/recent" component={RecentForms} />
                                <Route path="/create" component={CreateNew} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}>
                </Route>
            </Router>
        </div>
    )
}

export default BackgroundChanger(Container);