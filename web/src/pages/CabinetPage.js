import React, { useContext, useState } from "react";
import NavBar from "../components/cabinet/CabinetNavBar";
import Tests from "../components/cabinet/CabinetTests";
import Settings from "../components/cabinet/CabinetSettings";
import styles from "../styles/cabinet/CabinetPage.module.css";
import {Context} from "../index"

const CabinetPage = () => {
  const [activeTab, setActiveTab] = useState("tests");
  const {user} = useContext(Context)

  console.log(user.user)

  const renderTabContent = () => {
    switch (activeTab) {
      case "tests":
        return <Tests />;
      case "settings":
        return <Settings />;
      case "somethingElse":
        return null;
      default:
        return null;
    }
  };

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
