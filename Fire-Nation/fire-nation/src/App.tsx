import './App.css';
import React from 'react';
import Form from './SignupComponents/Form'
import LoginComponent from './LoginComponents/LoginForm'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Form from './LoginComponents/Form'
import MainMenu from './MainPageComponents/MainMenu';
import { Dispatch } from "react";
import { IAction } from './redux/reducer-logic/ActionStructure';
import { IUser } from './redux/state-logic/StateStructure';
import * as ReactRedux from 'react-redux';

const mapStateToProps = (state: any) => {
  //logic goes here
  //said logic will extract the NECESSARY state you need, to simplify the component

  return {
    seekUser: state.myStateReducer.currentUser
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  //let's extract only the functionality we need to use
  return {
  }
}


interface IProps {
  seekUser?: IUser|null
}

function CoreApp(props: IProps) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/login" component={LoginComponent} /> 
          <Route path="/main" component={MainMenu} /> 
        </Switch>  
      </div>
    </Router>
    
  );
}

export const App = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(CoreApp);

export default App;
