import React from 'react';
import './App.css';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Transaction from './transaction';
import Result from './result';


const history=createBrowserHistory();
const routes=[
{path:"/transaction/:id/:amountValue",component:Transaction},
{path:"/transaction",component:Transaction},
{path:"/result",component:Result}
]




const App=(props)=> {

  return (
    <React.Fragment>
  
    <BrowserRouter history={history}>
     
  <Switch>
   {routes.map(props =>
   <Route  exact key={props.path} path={props.path} component={props.component}/>
  )}
      <Redirect to="/transaction"></Redirect> 
  </Switch>  
    </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
