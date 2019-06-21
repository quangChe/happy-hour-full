import React from 'react';
import { fetchNearby } from './store/actions';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import NavBar from './components/NavBar/NavBar';
import ErrorScreen from './screens/ErrorScreen/ErrorScreen';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchNearby();
  }

  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={HomeScreen}/>
          <Route component={ErrorScreen}/>
        </Switch>
      </Router>
    )
  }
}

export default connect(null, {fetchNearby})(App);
