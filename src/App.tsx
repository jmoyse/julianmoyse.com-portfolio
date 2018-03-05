import * as React from 'react';
// import MenuIcon from 'material-ui-icons/Menu';
import Reboot from 'material-ui/Reboot/Reboot';
// import IconButton from 'material-ui/IconButton/IconButton';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Server from './components/Server';
import { withStyles, WithStyles } from 'material-ui/styles';
import './App.css';
import './awesome/css/fontawesome.min.css';
import './awesome/css/fontawesome.css';
import { createMuiTheme } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Skills from './components/Skills';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import { PortfolioStore } from './store/PortfolioStore';

export interface PortfolioProps {
  selectedIndex: Number;
}

export interface PortfolioState {

}
const styles = {

};
type ClassNames = keyof typeof styles;


var xml = require('./data.json');

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'rgba(33,33,33,0.72)',
      main: '#606060',
      dark: '#002884',
      contrastText: '#000000',
    },
    secondary: {
      light: '#000000',
      main: '#2196f3',
      dark: '#ba000d',
      contrastText: '#000000',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(255,255,255,1)',
      //secondary: 'white',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  /*
    palette: {
      primary1Color: coblue500,
      primary2Color: blue700,
      primary3Color: lightBlack,
      accent1Color: purpleA200,
      accent2Color: blueGrey100,
      accent3Color: blueGrey500,
      textColor: darkBlack,
      alternateTextColor: white,
      canvasColor: white,
      borderColor: grey300,
      disabledColor: fade(darkBlack, 0.3),
      pickerHeaderColor: blue500,
    },
  */
});

function mapStateToProps (storeState: PortfolioStore.Stores): PortfolioStore.NavigationStore {
  return {
    selectedIndex: storeState !== undefined && storeState.NavigationStore !== undefined ? storeState.NavigationStore.selectedIndex : 0,
  };
}

class AppStyle extends React.Component<PortfolioProps & WithStyles<ClassNames>, PortfolioState> {
  constructor (props: PortfolioProps & WithStyles<ClassNames>) {
    super(props);
  }

  render () {
    return (
      <div id="top" className="App" >

        <Reboot />
        <section id="headerSection" />

        <MuiThemeProvider theme={theme}>
          <NavBar />
          <section id="introSection">
            <Intro
              //onArrowMouseDown={this.onArrowMouseDown}
              onArrowMouseDown={() => { }}
            />
          </section>
          <section id="aboutSection">
            <About />
          </section>
          <section id="skillsSection">
            <Skills skills={xml.portfolio.skills} />
          </section>
          <section id="projectsSection">
            <Projects
              projects={xml.portfolio.projects}
            />
          </section>
          <section id="educationSection">
            <Education />
          </section>
          <section id="serverSection">
            <Server />
          </section>
          <section id="footerSection">
            <Footer />
          </section>
        </MuiThemeProvider>
      </div >
    );
  }
}

// TODO: this isn't
const ThemedApp = withStyles(styles)<PortfolioProps>(AppStyle); // adding Material UI theme
const App = connect(mapStateToProps)(ThemedApp); // connect to redux

export default App;