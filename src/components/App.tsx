import LeftPanelSection from "@components/LeftPanelSection";
import React, { useEffect } from "react";
import { useStoreProfile } from "store";
import MainSection from "@components/MainSection";
import { useData } from "apis/fetchData";

const App = () => {
  const { setProfile } = useStoreProfile();

  const { data, isLoading, error } = useData();

  useEffect(() => {
    // store.init();
    setProfile(data);
  }, [data]);

  return (
    <div className="app">
      <LeftPanelSection />
      <MainSection />
    </div>
  );
};

export default App;
