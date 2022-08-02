import React from 'react';
import { useSettingsStore } from '/tools/store/';
import { Button } from 'components';

const Home = () => {
  const { darkMode, toggleDarkMode } = useSettingsStore();
  return (
    <div
      Style={`padding:10px; width:100vw; height:100vh; background-color: ${
        darkMode ? 'black' : 'white'
      }`}
    >
      <Button
        onClick={() => toggleDarkMode()}
        icon="BiPlus"
        // iconPosition="btn--icon-left"
        size="btn--sm"
        variant="btn--light"
        stretch={true}
      >
        Toggle
      </Button>
    </div>
  );
};

export default Home;
