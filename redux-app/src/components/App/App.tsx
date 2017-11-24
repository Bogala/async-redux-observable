import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, CircularProgress } from 'material-ui';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Redux project"
            iconElementLeft={<div />}
          />
          <div className="center">
            <CircularProgress size={180} thickness={5} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;