import * as React from 'react';
import * as Scroll from 'react-scroll';
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import { createMuiTheme, withStyles, WithStyles } from 'material-ui/styles';
import Button from 'material-ui/Button/Button';
import Fade from 'material-ui/transitions/Fade';
import Grid from 'material-ui/Grid/Grid';
import { store } from '../store/PortfolioStore';
import { setSelectedIndex } from '../actions/PortfolioAction';
import { SubsectionType, subsectionToDOMName } from '../SubsectionTypes';
import { connect } from 'react-redux';
import { PortfolioStore } from '../store/PortfolioStore';
import './NavBar.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export interface NavBarProps {
    selectedIndex: number;
}
export interface NavBarState {
    appBarVisible: boolean;
}


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#ffffff',
            dark: '#ffffff',
            contrastText: '#ffffff',
        },
    }
});

const styles = {

};

type ClassNames = keyof typeof styles;

function mapStateToProps (storeState: PortfolioStore.Stores): PortfolioStore.NavigationStore {
    return {
        selectedIndex: storeState.NavigationStore.selectedIndex,
    };
}

class NavBarStyle extends React.Component<NavBarProps & WithStyles<ClassNames>, NavBarState> {
    scroller = Scroll.scroller;
    lastScrollTop = 0;
    isScrolling: boolean = false;
    SCROLL_DURATION_MS = 1000;

    constructor (props: NavBarProps & WithStyles<ClassNames>) {
        super(props);
        this.state = {
            appBarVisible: false,
        };
    }

    componentWillReceiveProps (nextProps: NavBarProps, prevProps: NavBarState) {
        if (nextProps.selectedIndex !== this.props.selectedIndex) {
            this.scrollTo(nextProps.selectedIndex as SubsectionType);
        }
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
        this.scrollTo(SubsectionType.ABOUT);
        this.setScrolling();
        this.setAppBarVisible(true);

    }

    onArrowMouseUp = () => {
        this.scrollTo(SubsectionType.HEADER);
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

    scrollTo = (subsection: SubsectionType, easingFunction: string = 'easeOutQuad', canCancel: boolean = true) => {
        store.dispatch(setSelectedIndex(subsection));
        let componentName: string = subsectionToDOMName(subsection);

        this.scroller.scrollTo(componentName, {
            duration: this.SCROLL_DURATION_MS,
            delay: 0,
            smooth: easingFunction,
            ignoreCancelEvents: canCancel,
        });
    }

    render () {
        return (
            <div hidden={!this.state.appBarVisible}>
                <Fade in={true} >
                    <AppBar position="fixed">
                        <Toolbar >
                            <Grid
                                alignItems="center"
                                alignContent="center"
                                direction="row"
                                justify="center"
                                container={true}
                            >
                                <MuiThemeProvider theme={theme}>
                                    <Button
                                        type="dense"
                                        color="primary"
                                        onClick={(evt) => { store.dispatch(setSelectedIndex(SubsectionType.ABOUT)); }}
                                    >
                                        About
                                </Button>

                                    <Button
                                        type="dense"
                                        color="primary"
                                        onClick={(evt) => { store.dispatch(setSelectedIndex(SubsectionType.CONTACT)); }}
                                    >
                                        Contact
                                    </Button>

                                    <Button
                                        type="dense"
                                        color="primary"
                                        onClick={(evt) => { store.dispatch(setSelectedIndex(SubsectionType.SKILLS)); }}
                                    >
                                        Skills
                                </Button>
                                    <Button
                                        type="dense"
                                        color="primary"
                                        onClick={(evt) => { store.dispatch(setSelectedIndex(SubsectionType.PROJECTS)); }}
                                    //onClick={() => this.scrollTo(SubsectionType.PROJECTS, 'projectsSection', 'easeOutQuad', false)}
                                    >
                                        Projects
                                </Button>
                                    <Button
                                        type="dense"
                                        color="primary"
                                        onClick={(evt) => { store.dispatch(setSelectedIndex(SubsectionType.EDUCATION)); }}
                                    >
                                        Education
                                </Button>
                                    <Button
                                        type="dense"
                                        color="primary"
                                        onClick={(evt) => { store.dispatch(setSelectedIndex(SubsectionType.SERVER)); }}
                                    >
                                        Server
                                </Button>
                                </MuiThemeProvider>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Fade>
            </div>
        );
    }
}
const NavBarStyled = withStyles(styles)<NavBarProps>(NavBarStyle);
const NavBar = connect(mapStateToProps)(NavBarStyled);

export default NavBar;
