import * as React from 'react';
import Avatar from 'material-ui/Avatar/Avatar';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography/Typography';
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import IconButton from 'material-ui/IconButton/IconButton';
import ArrowIcon from 'material-ui-icons/ArrowDownward';
import { withStyles, WithStyles } from 'material-ui/styles';
import Button from 'material-ui/Button/Button';
import Grid from 'material-ui/Grid/Grid';
import * as Scroll from 'react-scroll';
import * as classNames from 'classnames';
import './Intro.css';

const headshot = require('../img/headshot2.jpg');

const style = {
    avatar: {
        width: 250,
        margin: 10,
        height: 250,
        display: 'inline-block',
        textAlign: 'center',
        alignself: 'center',
        marginBottom: '50px',
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
};

export interface IntroProps {

}
export interface IntroState {
    height: string;
    scrollTo: number;
    appBarVisible: boolean;
}

type ClassNames = keyof typeof style;

class IntroComponent extends React.Component<IntroProps & WithStyles<ClassNames>, IntroState> {
    scroll = Scroll.animateScroll;
    scroller = Scroll.scroller;
    constructor (props: IntroProps & WithStyles<ClassNames>) {
        super(props);
        this.state = {
            height: '0',
            scrollTo: 0,
            appBarVisible: false,
        };
    }
    componentDidMount () {
        this.setState({
            height: window.innerHeight + 'px',
            scrollTo: window.innerHeight
        });
    }

    onScrollToIntro = () => {
        this.scroller.scrollTo('aboutBody', {
            duration: 1500,
            delay: 100,
            smooth: 'easeInOutQuint',
        });

        this.setState({ appBarVisible: true });
    }

    render () {
        return (
            <div >
                <div hidden={!this.state.appBarVisible}>
                    <AppBar position="fixed" >
                        <Toolbar>
                            <IconButton color="contrast" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </div>

                <div className="backgroundHeader" style={{ 'height': this.state.height }}>
                    <Grid
                        container={true}
                        spacing={24}
                        style={{ 'height': this.state.height }}
                    >
                        <Grid item={true} xs={12}>
                            <Grid
                                container={true}
                                alignItems="center"
                                direction="column"
                                justify="center"
                            >
                                <Avatar
                                    src={headshot}
                                    className={classNames(this.props.classes.avatar)}
                                />
                                <Typography type="display3" gutterBottom={true} paragraph={true}>
                                    Julian Moyse
                                </Typography>

                                <Typography type="headline" gutterBottom={true} paragraph={true}>
                                    Full Stack Developer
                                </Typography>

                                <Button color="primary">
                                    julianmoyse.com
                                </Button>
                            </Grid>
                        </Grid>

                        <Button
                            fab={true}
                            color="primary"
                            aria-label="add"
                            onClick={this.onScrollToIntro}
                            style={
                                {
                                    verticalAlign: 'flex-end',
                                    alignSelf: 'center',
                                    position: 'relative',
                                    top: '-25px',
                                    left: '50%',
                                }}
                        >
                            <ArrowIcon />
                        </Button>
                    </Grid>
                </div>
            </div>
        );
    }
}

const Intro = withStyles(style)<IntroProps>(IntroComponent);
export default Intro;