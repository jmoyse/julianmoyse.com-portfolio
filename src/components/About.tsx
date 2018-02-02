import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid/Grid';
import CardContent from 'material-ui/Card/CardContent';
import Contact from './Contact';
import Divider from 'material-ui/Divider/Divider';
import Button from 'material-ui/Button/Button';
import './About.css';
import Section from './Section';
import * as FontAwesome from 'react-fontawesome';
import Paper from 'material-ui/Paper/Paper';

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
            <Section id="aboutLink" title="" background="#EFEFEF">
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
                <Paper
                    elevation={5}
                    style={
                        {
                            background: '#999999',
                            height: window.innerHeight / 4 + 'px',
                            display: 'inline-block',
                            width: '100%',
                            marginBottom: '50px',
                        }}
                >
                    <div
                        id="whitespace"
                        style={
                            {
                                background: '#999999',
                                height: window.innerHeight / 4 + 'px',
                                display: 'inline-block',
                                width: '100%',
                                marginBottom: '0px',
                                paddingBottom: '0px',

                                backgroundImage: `url(${background})`
                            }}
                    />
                </Paper>

                <Grid
                    container={true}

                    justify="center"
                    alignContent="center"
                    wrap="wrap"
                >
                    <Paper style={{ paddingBottom: '40px', maxWidth: '90%' }} elevation={10}  >
                        <div
                            style={
                                {
                                    display: 'flex',
                                    maxWidth: '700px',
                                }}
                        >
                            <CardContent >
                                <div style={{ display: 'flex', flexDirection: 'row', verticalAlign: 'bottom' }} >
                                    <Typography type="subheading" color="error" gutterBottom={true} paragraph={true} >
                                        Like the site? Check it out on
                                    </Typography >

                                    <Button
                                        mini={true}
                                        raised={true}
                                        dense={true}
                                        color="primary"
                                        type="headline"
                                        style={{ marginLeft: '10px' }}
                                        onClick={(e) => window.open('http://www.github.com/jmoyse')}
                                    >


                                        <FontAwesome

                                            name="github"
                                            size="2x"
                                            style={{
                                                margin: '0px',
                                                paddingLeft: '5px',
                                                paddingRight: '5px',
                                                textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)'
                                            }}
                                        />

                                        github
                                    </Button>
                                </div>

                                <Typography type="subheading" color="error">
                                    It's written in Typescript, React and Material UI<br />
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
                                    I'm Julian. I'm a Full Stack Software Developer.
                                        I graduated from the University of Maryland with a Bachelor's in Computer Science.
                                        I am a detail-oriented developer with a passion for writing clean,
                                        efficent and well maintained code.
                                        I pride myself in staying up to date with the latest technology
                                        and software design principles.
                                    </Typography>

                                <Typography paragraph={true}>
                                    Currently working as a freelance web developer,
                                        but always open to new opportunities.
                            </Typography>

                                <Typography type="headline" component="h3" paragraph={true}>
                                    Lifelong geek, nerd and techie.
                            </Typography>

                                <Typography type="subheading" component="h3">
                                    Feel free to shoot me a message
                            </Typography>

                            </CardContent>
                        </div>
                    </Paper>
                    <Contact />

                </Grid>

            </Section >
        );
    }
}

const About = withStyles(style)<AboutProps>(AboutComponent);
export default About;