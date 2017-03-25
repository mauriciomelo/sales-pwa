import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import state from './state';

import './App.css';
import Sales from './components/Sales';
import { purple500 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: purple500,
  },
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <Provider store={state}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="App">
            <div className="AppBar">
              <AppBar
                title="Vendas"
                showMenuIconButton={false}
                />
            </div>
            <Sales />
            <Tabs className="Tabs">
              <Tab
                icon={<FontIcon className="material-icons">inbox</FontIcon>}
                label="ENTRADA"
                />
              <Tab
                icon={<FontIcon className="material-icons">arrow_upward</FontIcon>}
                label="SAÍDA"
                />
              <Tab
                icon={<FontIcon className="material-icons">history</FontIcon>}
                label="HISTÓRICO"
                />
            </Tabs>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
