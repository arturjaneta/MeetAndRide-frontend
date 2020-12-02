import React from "react";
import { Switch, Route } from "react-router-dom";
import Account from "../../pages/Account/Account";
import PeoplePage from "../../pages/PeoplePage/PeoplePage";
import FindTripPage from "../../pages/FindTripPage/FindTripPage"
import MyTripsPage from "../../pages/MyTripsPage/MyTripsPage"
import TripDetailsPage from "../../pages/TripDetailsPage/TripDetailsPage";
import AddTripPage from "../../pages/AddTripPage/AddTripPage";
import EditTripPage from "../../pages/EditTripPage/EditTripPage";



const Routes = () => {
  return (
    <Switch>
      <Route path="/find">
        <FindTripPage></FindTripPage>
      </Route>
      <Route path="/mytrips">
        <MyTripsPage></MyTripsPage>
      </Route>
      <Route path="/users">
        <PeoplePage></PeoplePage>
      </Route>
      <Route path="/account">
        <Account></Account>
      </Route>
      <Route path="/details/:id" component={TripDetailsPage}>
      </Route>
      <Route path="/edit/:id" component={EditTripPage}>
      </Route>
      <Route path="/add" >
        <AddTripPage></AddTripPage>
      </Route>
    </Switch>
  );
};

export default Routes;
