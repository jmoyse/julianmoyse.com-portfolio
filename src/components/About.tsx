import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid/Grid';
import Paper from 'material-ui/Paper/Paper';
import CardContent from 'material-ui/Card/CardContent';
import './About.css';

const style = {

};

export interface AboutProps {

}
export interface AboutState {

}

type ClassNames = keyof typeof style;

class AboutComponent extends React.Component<AboutProps & WithStyles<ClassNames>, AboutState> {
    constructor (props: AboutProps & WithStyles<ClassNames>) {
        super(props);

    }

    render () {
        return (
            <div id="aboutBody" className="lowerBody">
                <div>
                    <Typography type="display2" gutterBottom={true} paragraph={true}>
                        About
                        </Typography>

                    <Grid
                        container={true}
                        spacing={24}
                    >
                        <Grid item={true} xs={12}>
                            <Grid
                                container={true}
                                alignItems="center"
                                direction="row"
                                justify="center"
                            >
                                <Paper elevation={15} style={{ width: '400px' }}>
                                    <CardContent>

                                        <Typography type="headline" component="h3">
                                            Hello
                </Typography>

                                        <Typography paragraph={true}>
                                            I am a software developer and Computer Scientist.
                I graduated from the <a href="www.umd.edu">University of Maryland</a>
                                            with a BSc in Computer Science.
                I am a detail-oriented developer with an passion for writing clean,
                efficent and well maintained code.
                I pride myself in staying up to date with the latest technology and software design principles.
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
                                </Paper>
                            </Grid>
                        </Grid>

                    </Grid>

                </div>
            </div>
        );
    }
}

const About = withStyles(style)<AboutProps>(AboutComponent);
export default About;