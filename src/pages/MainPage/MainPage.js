import React from "react";
import MainMenu from "../../components/MainMenu/MainMenu";
import Routes from "../../navigation/Main/Routes";

const MainPage = () => {
  return (
    <div className="full-height" style={{ margin: 0, padding: 0 }}>
      <div className="columns full-height">
        <div className="column is-one-fifth">
          <MainMenu />
        </div>
        <div className="column" size="auto">
          <Routes />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
