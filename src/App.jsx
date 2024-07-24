import React, { useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState(false);

  return (
    <>
      <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
        <Header setDownloadIcon={setDownloadIcon} />
        <div className="w-64 fixed">
          <SideNav setSelectedIndex={setSelectedIndex} />
        </div>

        <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
          <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
            {selectedIndex === 0 ? <IconController /> : <BackgroundController />}
          </div>

          <div className="md:col-span-3">
            <LogoPreview downloadIcon={downloadIcon} />
          </div>

          <div className="md:col-span-1 bg-blue-100">Ads Banner</div>
        </div>
      </UpdateStorageContext.Provider>
    </>
  );
};

export default App;
