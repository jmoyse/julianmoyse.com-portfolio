import * as React from 'react';
import MenuIcon from 'material-ui-icons/Menu';
import Reboot from 'material-ui/Reboot/Reboot';
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import IconButton from 'material-ui/IconButton/IconButton';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Server from './components/Server';
import { withStyles, WithStyles } from 'material-ui/styles';
import * as Scroll from 'react-scroll';
import './App.css';
import './awesome/css/fontawesome.min.css';
import './awesome/css/fontawesome.css';
import { createMuiTheme } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button/Button';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Fade from 'material-ui/transitions/Fade';

var xml = require('./data.json');

const theme = createMuiTheme({

  palette: {
    primary: {
      light: '#FFFFFF',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },

  },

});
export interface PortfolioProps {

}
export interface PortfolioState {
  appBarVisible: boolean;
}

const styles = {

};
type ClassNames = keyof typeof styles;

class AppStyle extends React.Component<PortfolioProps & WithStyles<ClassNames>, PortfolioState> {
  scroller = Scroll.scroller;
  lastScrollTop = 0;
  isScrolling: boolean = false;
  SCROLL_DURATION_MS = 1000;

  constructor (props: PortfolioProps & WithStyles<ClassNames>) {
    super(props);
    this.state = {
      appBarVisible: false,
    };
  }

  componentDidMount () {
    this.scroller.scrollTo('App', {
      duration: 100,
      delay: 0,
      smooth: 'easeOutQuad',
      ignoreCancelEvents: true,
    });
    window.onscroll = this.onScroll;
  }

  onScroll = (event: any) => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let scrollingDown: boolean = scrollTop > this.lastScrollTop ? true : false;
    this.lastScrollTop = scrollTop;

    if (!this.isScrolling) {
      let aboutDOM: (HTMLElement | null) = document.getElementById('aboutSection');
      let domPosition = (aboutDOM !== null) ? aboutDOM.offsetTop : 0;

      if (domPosition > pageYOffset && scrollingDown) {
        this.onArrowMouseDown();
      }
      else if (domPosition > pageYOffset && !scrollingDown) {
        this.onArrowMouseUp();
      }
    }
  }

  onArrowMouseDown = () => {
    this.scrollTo('aboutBody', 'easeOutQuad', true);
    this.setScrolling();
    this.setAppBarVisible(true);

  }

  onArrowMouseUp = () => {
    this.scrollTo('top', 'easeOutQuad', true);
    this.setScrolling();
    this.setAppBarVisible(false);
  }

  setAppBarVisible = (visible: boolean) => {
    setTimeout(() => {
      this.isScrolling = false;
      this.setState({ appBarVisible: visible });
      // tslint:disable-next-line:align
    }, this.SCROLL_DURATION_MS + 100);
  }

  setScrolling = () => {
    this.isScrolling = true;
    setTimeout(() => {
      this.isScrolling = false;
      // tslint:disable-next-line:align
    }, this.SCROLL_DURATION_MS + 100);
  }

  scrollTo = (component: string, easingFunction: string, canCancel: boolean) => {
    this.scroller.scrollTo(component, {
      duration: this.SCROLL_DURATION_MS,
      delay: 0,
      smooth: easingFunction,
      ignoreCancelEvents: canCancel,
    });
  }

  render () {
    return (
      <div id="top" className="App" >
        <Reboot />
        <section id="headerSection" />
        <MuiThemeProvider theme={theme}>


          <div hidden={!this.state.appBarVisible}>
            <Fade in={true} >
              <AppBar position="fixed" >
                <Toolbar>
                  <IconButton color="contrast" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                  <Button color="contrast" onClick={() => this.scrollTo('aboutSection', 'easeOutQuad', false)}>
                    About
                  </Button>
                  <Button color="contrast" onClick={() => this.scrollTo('aboutSection', 'easeOutQuad', false)}>
                    Contact
                </Button>
                  <Button color="contrast" onClick={() => this.scrollTo('projectsSection', 'easeOutQuad', false)}>
                    Projects
                </Button>
                  <Button color="contrast" onClick={() => this.scrollTo('educationSection', 'easeOutQuad', false)}>
                    Education
                </Button>
                  <Button color="contrast" onClick={() => this.scrollTo('skillsSection', 'easeOutQuad', false)}>
                    Skills
                </Button>
                </Toolbar>
              </AppBar>
            </Fade>
          </div>

          <section id="introSection">
            <Intro
              onArrowMouseDown={this.onArrowMouseDown}
            />
          </section>
          <section id="aboutSection">
            <About />
          </section>
          <section id="projectsSection">
            <Projects
              projects={xml.portfolio.projects}
            />

          </section>
          <section id="educationSection">
            <Education />
          </section>
          <section id="skillsSection">
            <Skills />
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

const App = withStyles(styles)<PortfolioProps>(AppStyle);

export default App;
