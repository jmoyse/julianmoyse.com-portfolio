import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid/Grid';

import CardContent from 'material-ui/Card/CardContent';
import './About.css';

import Contact from './Contact';
import Divider from 'material-ui/Divider/Divider';

const style = {

};

export interface AboutProps {

}
export interface AboutState {

}
const background = require('../img/background.jpg');
type ClassNames = keyof typeof style;

class AboutComponent extends React.Component<AboutProps & WithStyles<ClassNames>, AboutState> {
    constructor (props: AboutProps & WithStyles<ClassNames>) {
        super(props);

    }

    render () {
        return (
            <div id="aboutLink" className="aboutBody">


                {
                    /*
                    <Grid>
                        <Typography type="display2">
                            Julian
                    </Typography>
                        <Typography type="display2" gutterBottom={true} color="accent">
                            Moyse
                    </Typography>
                    </Grid>
                    */
                }
                <div
                    id="whitespace"
                    style={
                        {
                            background: '#999999',
                            height: window.innerHeight / 4 + 'px',
                            display: 'inline-block',
                            width: '100%',
                            marginBottom: '20px',

                            backgroundImage: `url(${background})`
                        }}
                />

                <Grid
                    container={true}

                    justify="center"
                    alignContent="center"
                    wrap="wrap"
                >

                    <div
                        style={
                            {
                                maxWidth: '800px',






                            }}

                    >
                        <CardContent >
                            <Typography type="headline" color="error">
                                Like the site? Check it out on GitHub<br />
                                Fork it, Copy it, Destroy it. Do anything you want with it.<br />
                                Think its really cool? Let me know!
                            </Typography>
                            <p />
                            <Divider />
                            <p />
                            <Typography type="display2" component="h2">
                                Hello.
                            </Typography>




                            <Typography paragraph={true}>
                                I am a Software Developer and Computer Scientist.
                                        I graduated from the University of Maryland


                                {/*<a href="www.umd.edu"></a>*/}
                                with a Bachelors in Computer Science.
                                        I am a detail-oriented developer with an passion for writing clean,
                                        efficent and well maintained code.
                                        I pride myself in staying up to date with the latest technology
                                        and software design principles.
                                    </Typography>

                            <Typography paragraph={true}>
                                Currently working as a freelance web developer,
                                        but always open to new opportunities.
                                    </Typography>
                            <Typography type="headline" component="h3">
                                Lifelong geek, nerd and techie.
                            </Typography>

                            <Typography component="h5">
                                Feel free to shoot me a message
                            </Typography>

                        </CardContent>
                    </div>

                    <Contact />

                </Grid>
            </div >
        );
    }
}

const About = withStyles(style)<AboutProps>(AboutComponent);
export default About;