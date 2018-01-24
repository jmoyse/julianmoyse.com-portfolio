import * as React from 'react';
import Avatar from 'material-ui/Avatar/Avatar';
import Typography from 'material-ui/Typography/Typography';
import ArrowIcon from 'material-ui-icons/ArrowDownward';
import { withStyles, WithStyles } from 'material-ui/styles';
import Button from 'material-ui/Button/Button';
import Grid from 'material-ui/Grid/Grid';

import * as classNames from 'classnames';
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
        // window.scrollTo(0, 0);
        console.log('hello');
        this.onResize();
        window.onresize = this.onResize;

        //window.scrollTo(0, 0);
    }
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
                        backgroundImage: `url(${background})`
                    }}
            >
                <div
                    style={
                        {
                            display: 'inline-block',
                            'height': (Number.parseInt(this.state.height) / 2),
                        }}
                >
                    <Grid
                        container={true}
                        spacing={24}
                        style={{ 'height': this.state.height, display: 'inline-block' }}
                        direction="column"
                        alignItems="center"

                    >
                        <Grid

                            item={true}
                            xs={12}


                            style={{ height: '100%', width: '100%', alignSelf: 'center' }}
                        >

                            <Grid
                                container={true}
                                alignItems="center"
                                direction="column"
                                justify="center"
                                style={{ height: '100%', width: '100%', alignSelf: 'center' }}
                            >
                                <Avatar
                                    src={headshot}
                                    className={classNames(this.props.classes.avatar)}
                                />
                                <Typography type="display3" >
                                    Julian Moyse
                                </Typography>

                                <Typography type="headline" >
                                    Full Stack Developer
                                </Typography>

                                {/*                                
                                <Button color="primary">
                                    julianmoyse.com
                                </Button>
                                */
                                }

                            </Grid>


                            <Button
                                fab={true}
                                color="primary"
                                aria-label="add"
                                onClick={(evt) => this.props.onArrowMouseDown(this, evt)}
                                style={
                                    {
                                        verticalAlign: 'flex-end',
                                        alignSelf: 'center',
                                        position: 'relative',
                                        top: '-75px',

                                    }}
                            >
                                <ArrowIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

const Intro = withStyles(style)<IntroProps>(IntroComponent);
export default Intro;