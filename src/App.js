import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';

// Public Routes
import Homepage from './pages/homepage';

// Private Routes
import PropertyForm from './components/property/propertyForm';
import Navbar from './components/navbar/navbar';



const publicRoutes = [
  {
    component: Homepage,
    to: "/"
  }
];

const privateRoutes = [
  {
    component: PropertyForm,
    to: "/properties/create"
  }
];



const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        {/* Public Routes */}
        {publicRoutes.map((route, i) => (
          <Route exact path={route.to} component={route.component} key={`${route.component}-${i}`} />
        ))}

        {/* Private Routes */}
        {privateRoutes.map((route, i) => (
          <PrivateRoute exact path={route.to} component={route.component} key={`${route.component}-${i}`} />
        ))}

        {/* Admin Routes */}
      </Switch>
    </>
  );
};

export default App;
