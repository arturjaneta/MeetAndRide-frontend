import React from "react";
import { Switch, Route } from "react-router-dom";
import Account from "../../pages/Account/Account";
import PeoplePage from "../../pages/PeoplePage/PeoplePage";
import FindTripPage from "../../pages/FindTripPage/FindTripPage"
import MyTripsPage from "../../pages/MyTripsPage/MyTripsPage"



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
    </Switch>
  );
};

export default Routes;
