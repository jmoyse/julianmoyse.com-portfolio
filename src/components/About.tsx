import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid/Grid';
import CardContent from 'material-ui/Card/CardContent';
import Contact from './Contact';
import Button from 'material-ui/Button/Button';
import './About.css';
import Section from './Section';
import * as FontAwesome from 'react-fontawesome';
import Paper from 'material-ui/Paper/Paper';

import { } from 'material-ui/styles';

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
                    <Paper style={{ paddingLeft: '10px', paddingRight: '0px', marginRight: '0px', paddingBottom: '40px', maxWidth: '90%', paddingTop: '0px' }} elevation={10}  >
                        <div
                            style={
                                {
                                    display: 'flex',
                                    maxWidth: '700px',
                                }}
                        >
                            <CardContent style={{ paddingTop: '0px', paddingRight: '0px', marginRight: '10px', }}>
                                <Paper elevation={10} style={{ padding: '5px', margin: '10px', position: 'static', maxWidth: '400px', float: 'right' }}>
                                    <Grid item={true} alignItems="flex-end" style={{ marginTop: '0px', paddingTop: '0px', paddingLeft: '5px', paddingRight: '5px' }}>
                                        <Grid container={true} direction="row" alignItems="flex-end" style={{ margin: '0px' }}>
                                            <Typography variant="subheading" color="primary" style={{ paddingBottom: '0px' }} >
                                                Like the site? Check it out on
                                            </Typography >

                                            <Button

                                                variant="raised"
                                                type="dense"
                                                size="small"

                                                color="primary"
                                                //type="headline"
                                                style={{ marginLeft: '10px', marginTop: '0px' }}

                                                onClick={
                                                    (e) => window.open('https://github.com/jmoyse/julianmoyse.com-portfolio')
                                                }
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

                                        </Grid>

                                        {}

                                        <Typography variant="subheading" color="primary">
                                            Fork it, Copy it, Destroy it. <br />
                                            Made with <b>Typescript</b>, <b>React</b> and <b>Material UI</b><br />
                                            Think its really cool? Let me know! &nbsp;&nbsp;👍🏽
                                        </Typography>

                                    </Grid>
                                </Paper>
                                <Typography variant="display3" paragraph={true} gutterBottom={true} style={{ paddingTop: '50px' }} >
                                    Hello.
                                </Typography>
                                <Typography paragraph={true} style={{ paddingRight: '20px' }}>
                                    My name is <b>Julian Moyse</b> I'm a Full Stack Software Developer based out of <b>Washington DC</b> area. I create full featured, user-focused applications on the web.
                                    I am a detail-oriented developer with a passion for writing clean, efficient and well maintained code. I pride myself in staying up to date with the latest technology
                                    and software design principles.
                                   <br />
                                   <p />
                                    Interested in all facets of computers, the internet and technology.
                                   <br />
                                </Typography>

                                <Typography paragraph={true}>
                                    Currently working as a freelance web developer, but always open to new opportunities.
                                </Typography>

                                <Typography variant="headline" component="h3" paragraph={true}>
                                    Lifelong nerd, hacker and techno-geek.
                                </Typography>

                                <Typography variant="subheading" component="h3">
                                    Feel free to send me a message!
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


