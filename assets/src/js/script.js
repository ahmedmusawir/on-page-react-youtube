/**
 * PUBLIC MAIN SCRIPT
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAppThemeOne from './_modules/react/ReactAppThemeOne';
import ReactAppThemeTwo from './_modules/react/ReactAppThemeTwo';
import ReactAppThemeThree from './_modules/react/ReactAppThemeThree';

class App {
  constructor() {
    console.info('ES8 App PUBLIC Initialized!');
    // LUNCHING REACT APP ONE
    const appThemeOne = document.getElementById('app-theme-1');
    if (appThemeOne) {
      ReactDOM.render(<ReactAppThemeOne />, appThemeOne);
    }
    // LUNCHING REACT APP TWO
    const appThemeTwo = document.getElementById('app-theme-2');
    if (appThemeTwo) {
      ReactDOM.render(<ReactAppThemeTwo />, appThemeTwo);
    }
    // LUNCHING REACT APP THREE
    const appThemeThree = document.getElementById('app-theme-3');
    if (appThemeThree) {
      ReactDOM.render(<ReactAppThemeThree />, appThemeThree);
    }
  }
}

const app = new App();
