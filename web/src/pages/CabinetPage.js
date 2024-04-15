import React, { useContext, useState } from "react";
import NavBar from "../components/cabinet/CabinetNavBar";
import Tests from "../components/cabinet/CabinetTests";
import TestSettings from "../components/cabinet/CabinetTestSettings";
import Settings from "../components/cabinet/CabinetSettings";
import NewTest from "../components/cabinet/CabinetNewTest";

import styles from "../styles/cabinet/CabinetPage.module.css";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import { CabinetRaiting } from "../components/cabinet/CabinetRaiting";

const CabinetPage = () => {
  const [activeTab, setActiveTab] = useState("tests");
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const renderTabContent = () => {
    switch (activeTab) {
      case "tests":
        return <Tests onTabChange={setActiveTab} />;
      case "newTest":
        return <NewTest onTabChange={setActiveTab} />;
      case "testSettings":
        return <TestSettings onTabChange={setActiveTab} />;
      case "settings":
        return <Settings />;
<<<<<<< HEAD
=======
      case "raiting":
        return <CabinetRaiting />;
      case "somethingElse":
        return null;
>>>>>>> 12436545ebfea7140bd626f6c1947d8de0915bce
      default:
        return null;
    }
  };

  if (!user.isAuth) {
    navigate("/");
  }

  return (
    <div className={styles.CabinetPageBody}>
      <div className={styles.block}>
        <NavBar onTabChange={setActiveTab} />
      </div>
      <div className={styles.block}>{renderTabContent()}</div>
    </div>
  );
};

export default CabinetPage;
