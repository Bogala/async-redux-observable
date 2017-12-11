import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, FlatButton } from 'material-ui';

export interface IAppProps {
  user?: any;
  searchField?: string;
  onSearch?: (e: any) => void;
}

class App extends React.Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props);
  }

  render() {
    let {searchField, onSearch} = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Redux project"
            iconElementLeft={<div />}
          />
          <div className="center">
            <TextField
              floatingLabelText="User login"
              value={searchField}
            /><br />
            <FlatButton label="Search" fullWidth={true} onClick={onSearch}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;