import * as React from 'react';
import * as Scroll from 'react-scroll';
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import { withStyles, WithStyles } from 'material-ui/styles';
import Button from 'material-ui/Button/Button';
import Fade from 'material-ui/transitions/Fade';
import Grid from 'material-ui/Grid/Grid';
//import { BrowserRouter as Router } from 'react-router-dom';
import './NavBar.css';
import { setSelectedIndex } from '../actions/PortfolioAction';

import { store } from '../store/PortfolioStore';

export interface NavBarProps {

}
export interface NavBarState {
    appBarVisible: boolean;
}

const styles = {

};
type ClassNames = keyof typeof styles;

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
        store.dispatch(setSelectedIndex(10));

        this.scroller.scrollTo(component, {
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
                                <Button
                                    type="dense"
                                    color="primary"
                                    onClick={() => this.scrollTo('aboutSection', 'easeOutQuad', false)}
                                >
                                    About
                                </Button>

                                <Button
                                    type="dense"
                                    color="secondary"
                                    onClick={() => this.scrollTo('aboutSection', 'easeOutQuad', false)}
                                >
                                    Contact
                                    </Button>

                                <Button
                                    type="dense"
                                    color="secondary"
                                    onClick={() => this.scrollTo('skillsSection', 'easeOutQuad', false)}
                                >
                                    Skills
                                </Button>
                                <Button
                                    type="dense"
                                    color="secondary"
                                    onClick={() => this.scrollTo('projectsSection', 'easeOutQuad', false)}
                                >
                                    Projects
                                </Button>
                                <Button
                                    type="dense"
                                    color="secondary"
                                    onClick={() => this.scrollTo('educationSection', 'easeOutQuad', false)
                                    }>
                                    Education
                                </Button>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Fade>
            </div>
        );
    }
}

const NavBar = withStyles(styles)<NavBarProps>(NavBarStyle);

export default NavBar;
