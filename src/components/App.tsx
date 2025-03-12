import LeftPanelSection from "@components/LeftPanelSection";
import React from 'react';
import { useStore } from 'store';
import MainSection from "@components/MainSection";

const App: React.FC = () => {

  return (
    <div className="app">
      <LeftPanelSection />
      <MainSection />
    </div>
  );
};

export default App;