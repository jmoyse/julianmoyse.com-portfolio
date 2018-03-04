import * as React from 'react';
// import MenuIcon from 'material-ui-icons/Menu';
import Reboot from 'material-ui/Reboot/Reboot';
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
// import IconButton from 'material-ui/IconButton/IconButton';
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
import Grid from 'material-ui/Grid/Grid';

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
      light: '#2196f3',
      main: '#2196f3',
      dark: '#ba000d',
      contrastText: '#000',
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
    this.scrollTo('aboutSection', 'easeOutQuad', true);
    this.setScrolling();
    this.setAppBarVisible(true);

  }

  onArrowMouseUp = () => {
    this.scrollTo('headerSection', 'easeOutQuad', true);
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
              <AppBar position="fixed">
                <Toolbar >
                  {
                    /*
                    <IconButton color="primary" aria-label="Menu">
                      <MenuIcon />
                    </IconButton>
                    */
                  }
                  <Grid
                    alignItems="center"
                    alignContent="center"
                    direction="row"
                    justify="center"
                    container={true}

                  >


                    <Button type="dense" color="primary" onClick={() => this.scrollTo('aboutSection', 'easeOutQuad', false)}>
                      About
                    </Button>
                    <Button type="dense" color="primary" onClick={() => this.scrollTo('aboutSection', 'easeOutQuad', false)}>
                      Contact
                    </Button>
                    <Button type="dense" color="primary" onClick={() => this.scrollTo('skillsSection', 'easeOutQuad', false)}>
                      Skills
                    </Button>
                    <Button type="dense" color="primary" onClick={() => this.scrollTo('projectsSection', 'easeOutQuad', false)}>
                      Projects
                    </Button>
                    <Button type="dense" color="primary" onClick={() => this.scrollTo('educationSection', 'easeOutQuad', false)}>
                      Education
                    </Button>

                  </Grid>
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

const App = withStyles(styles)<PortfolioProps>(AppStyle);

export default App;
