import * as React from 'react';
import MenuIcon from 'material-ui-icons/Menu';
import Reboot from 'material-ui/Reboot/Reboot';
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import IconButton from 'material-ui/IconButton/IconButton';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Server from './components/Server';
import { withStyles, WithStyles } from 'material-ui/styles';

import './App.css';
import './awesome/css/fontawesome.min.css';
import './awesome/css/fontawesome.css';

export interface PortfolioProps {

}
export interface PortfolioState {
  appBarVisible: boolean;
}

// Favicon: https://favicon.io/

const styles = {

};

type ClassNames = keyof typeof styles;
class AppStyle extends React.Component<PortfolioProps & WithStyles<ClassNames>, PortfolioState> {

  constructor (props: PortfolioProps & WithStyles<ClassNames>) {
    super(props);
    this.state = {
      appBarVisible: false,
    };
  }

  render () {
    return (
      <div className="App" >
        <Reboot />
        {
          /* App Bar */
        }
        <div hidden={!this.state.appBarVisible}>
          <AppBar position="fixed" >
            <Toolbar>
              <IconButton color="contrast" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>

        <Intro />
        <About />
        <Contact />
        <Projects />
        <Education />
        <Server />
      </div >
    );
  }
}

const App = withStyles(styles)<PortfolioProps>(AppStyle);

export default App;
