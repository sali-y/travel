import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import TravelCard from './components/TravelCard/TravelCard';
import TravelDetails from './tripDetails/tripDetails';
import UserList from './users/userList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <TravelCard trip={trip}/> */}
      <Route path="/" exact component={TravelCard} />
      <Route path="/details" exact component={TravelDetails} />
      <Route path="/users" exact component={UserList} />
  </BrowserRouter> 
  );
}

export default App;
