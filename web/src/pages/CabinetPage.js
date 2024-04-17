import React, { useContext, useState } from "react";
import NavBar from "../components/cabinet/CabinetNavBar";
import Tests from "../components/cabinet/CabinetTests";
import Settings from "../components/cabinet/CabinetSettings";
import NewTest from "../components/cabinet/CabinetNewTest";
import TestStat from "../components/cabinet/CabinetTestStat";

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
      case "testStats":
        return <TestStat onTabChange={setActiveTab} />;
      case "settings":
        return <Settings />;
      case "raiting":
        return <CabinetRaiting />;
      case "somethingElse":
        return null;
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
