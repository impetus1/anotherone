import React from 'react';
import {blueGrey500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


const muiTheme = getMuiTheme({
  appBar: {
    height: 50,

  },
});

/*FooBar.defaultProps = {
  link: '/'
};*/

class FooBar extends React.Component {
  render() {
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar 
    style={{backgroundColor: blueGrey500}}
    zDepth={3}
    title = {<img src="./ffap.png" height= "90%"/>}
   // onLeftIconButtonTouchTap={this.handleToggle}
   showMenuIconButton={false}
    />

    </MuiThemeProvider>
    )
  }
};


export default FooBar;