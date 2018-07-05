/**
 *name: ThemeContextProvider
 *describe:
 *time: 2018/7/5 下午2:05
 *author: yangshuo
 *version:
*/

import React, {PureComponent} from 'react'
const ThemeContext = React.createContext('light');

export default class ThemeProvider extends React.Component {
  state = { theme: 'light' };
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => <Button theme={theme} />}
      </ThemeContext.Consumer>
    );
  }
}