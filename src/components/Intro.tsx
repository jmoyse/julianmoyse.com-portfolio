import * as React from 'react';
import Avatar from 'material-ui/Avatar/Avatar';
import Typography from 'material-ui/Typography/Typography';
import ArrowIcon from 'material-ui-icons/ArrowDownward';
import { withStyles, WithStyles } from 'material-ui/styles';
import Button from 'material-ui/Button/Button';
import Grid from 'material-ui/Grid/Grid';
import * as classNames from 'classnames';
import { setSelectedIndex } from '../actions/PortfolioAction';
import { store } from '../store/PortfolioStore';

import './Intro.css';

const headshot = require('../img/headshot2.jpg');
const background = require('../img/background.jpg');

const style = {
    avatar: {
        width: 250,
        margin: 10,
        height: 250,
        display: 'inline-block',
        textAlign: 'center',
        alignself: 'center',
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
};

export interface IntroProps {
    onArrowMouseDown: Function;
}

export interface IntroState {
    height: string;
    scrollTo: number;
}

type ClassNames = keyof typeof style;

class IntroComponent extends React.Component<IntroProps & WithStyles<ClassNames>, IntroState> {

    constructor (props: IntroProps & WithStyles<ClassNames>) {
        super(props);
        this.state = {
            height: '0',
            scrollTo: 0,
        };
    }
    componentDidMount () {
        this.onResize();
        window.onresize = this.onResize;
    }
    // if the window is resized, then we need to resize the intro component to take up the entire screen
    onResize = () => {
        this.setState({
            height: window.innerHeight + 'px',
            scrollTo: window.innerHeight
        });
    }

    render () {
        return (
            <div
                className="backgroundHeader"
                style={
                    {
                        display: 'inline-block',
                        'height': (Number.parseInt(this.state.height) / 2),
                        backgroundImage: `url(${background})`,
                        width: '100%'
                    }
                }
            >
                <Grid
                    container={true}
                    style={{
                        'height': this.state.height, display: 'inline-block', alignSelf: 'center',
                        margin: '0px',
                        width: '100%'
                    }}
                    direction="column"
                    alignItems="center"

                >
                    <Grid
                        container={true}
                        alignItems="center"
                        direction="column"
                        justify="center"
                        style={{ height: '100%', width: '100%', alignSelf: 'center', margin: '0px', }}
                    >
                        <Avatar
                            src={headshot}
                            alt="headshot"
                            className={classNames(this.props.classes.avatar)}
                        />
                        <Typography variant="display3" color="primary">
                            Julian Moyse
                        </Typography>

                        <Typography variant="headline" >
                            Full Stack Developer
                        </Typography>
                    </Grid>

                    <Button
                        className="arrowAnimation"
                        variant="fab"
                        color="primary"
                        aria-label="add"
                        onClick={(evt) => { store.dispatch(setSelectedIndex(10))}}
                        style={
                            {
                                verticalAlign: 'flex-end',
                                alignSelf: 'center',
                                position: 'relative',
                                top: - window.outerHeight * 0.15,
                            }}
                    >
                        <ArrowIcon />
                    </Button>
                </Grid>
            </div >
        );
    }
}

const Intro = withStyles(style)<IntroProps>(IntroComponent);
export default Intro;