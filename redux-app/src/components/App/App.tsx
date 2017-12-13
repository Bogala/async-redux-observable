import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, FlatButton, Card, CardHeader } from 'material-ui';

export interface IAppProps {
  user?: any;
  onSearch?: (e: string) => void;
  onChange?: (e: any) => void;
}

const App = ({ onSearch, onChange, user }: IAppProps) => {

  const onClick = () => {
    if (onSearch && user) {
      onSearch(user.login);
    }
  };

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
            onChange={onChange}
          /><br />
          <FlatButton label="Search" fullWidth={true} onClick={onClick} /><br />
          <br />
          {(user.name) ?
            <Card>
              <CardHeader
                title={user.name}
                subtitle={user.bio}
                avatar={user.avatar_url}
              />
            </Card> : ''
          }
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default App;