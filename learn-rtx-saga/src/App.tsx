import { Fragment } from 'react';
import LoginPage from 'features/auth/pages/LoginPage';
import AdminLayout from 'components/layout/Admin';
import { Route, Switch } from 'react-router-dom';
import { NotFound, PrivateRoute } from 'components/common';
import './App.css';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <PrivateRoute path="/admin">
          <AdminLayout></AdminLayout>
        </PrivateRoute>
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
