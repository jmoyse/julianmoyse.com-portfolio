import * as React from 'react';
import * as Scroll from 'react-scroll';
import Reboot from 'material-ui/Reboot/Reboot';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Server from './components/Server';
import { withStyles, WithStyles } from 'material-ui/styles';
import { createMuiTheme } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Skills from './components/Skills';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';
import './awesome/css/fontawesome.min.css';
import './awesome/css/fontawesome.css';

export interface PortfolioProps {
 
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
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#2196f3',
      dark: '#ba000d',
      contrastText: '#000000',
    },
    error: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#ffffff',
      contrastText: '#ffffff',
    },

    /*
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(255,255,255,1)',
      //secondary: 'white',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    */
  },

});

class AppStyle extends React.Component<PortfolioProps & WithStyles<ClassNames>, PortfolioState> {
  scroller = Scroll.scroller;
  
  constructor (props: PortfolioProps & WithStyles<ClassNames>) {
    super(props);
  }

  componentDidMount () {
    this.scroller.scrollTo('App', {
      duration: 100,
      delay: 0,
      smooth: 'easeOutQuad',
      ignoreCancelEvents: true,
    });
    
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
const App = withStyles(styles)<PortfolioProps>(AppStyle); // adding Material UI theme


export default App;