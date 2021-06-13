// import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import { Router, Route, Switch } from 'react-router-dom';
import history from './config/history';
import { Provider } from 'react-redux';
import store from './redux/store';
import AllWorkers from './components/AllWorkers/AllWorkers';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/allWorkers">
              <AllWorkers></AllWorkers>
            </Route>
            <Route path="/">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
