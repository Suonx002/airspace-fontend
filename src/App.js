import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import useStyles from './styles/appStyles';

import PrivateRoute from './utils/PrivateRoute';

import Navbar from './components/navbar/navbar';

// Public Routes
import Homepage from './pages/homepage';
import PropertyDetail from './components/property/propertyDetail';

// Private Routes
import PropertyForm from './components/property/propertyForm';

import { getAuthUser } from './redux/actions/auth/authActions';
import setAuthToken from './utils/setAuthToken';


const publicRoutes = [
  {
    component: Homepage,
    to: "/"
  },
  {
    component: PropertyDetail,
    to: "/properties/:propertyId"
  },
];

const privateRoutes = [
  {
    component: PropertyForm,
    to: "/properties/create"
  },


];



const App = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {

    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      dispatch(getAuthUser(enqueueSnackbar));
    }

    //eslint-disable-next-line
  }, []);

  return (
    <div className={classes.app}>
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
    </div>
  );
};

export default App;
