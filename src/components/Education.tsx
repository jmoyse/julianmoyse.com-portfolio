import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper/Paper';
import './Education.css';
import Divider from 'material-ui/Divider/Divider';
import Grid from 'material-ui/Grid/Grid';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import Section from './Section';

const style = {

};

export interface EducationProps {

}
export interface EducationState {

}

type ClassNames = keyof typeof style;
const hcc = require('../img/hcc.png');
const umd = require('../img/umd.png');
class EducationComponent extends React.Component<EducationProps & WithStyles<ClassNames>, EducationState> {
    constructor (props: EducationProps & WithStyles<ClassNames>) {
        super(props);
    }

    render () {
        return (
            <Section id="educationLink" title="Education" background="white">


                <Grid
                    container={true}
                    alignItems="center"
                    direction="row"
                    justify="center"
                >

                    <Paper elevation={15} style={{ maxWidth: '90%' }} >
                        <List >
                            <ListItem  >

                                <ListItemIcon style={{ height: '75px', width: '75px' }}>
                                    <img src={umd} />
                                </ListItemIcon>

                                <Grid>
                                    <Typography type="title" >
                                        Computer Science - Bachelors of Science
                                                        </Typography>
                                    <Typography type="subheading" style={{ paddingBottom: '0px' }}>
                                        University of Maryland
                                                        </Typography>
                                    <Typography type="body2" style={{ paddingBottom: '0px' }}>
                                        College Park, MD
                                                        </Typography>
                                </Grid>
                            </ListItem>
                            <Divider />
                            <ListItem  >

                                <ListItemIcon style={{ height: '75px', width: '75px' }}>
                                    <img src={hcc} />
                                </ListItemIcon>

                                <Grid >
                                    <Typography type="title">
                                        Mathematics - Associates of Arts
                                                        </Typography>
                                    <Typography type="subheading" style={{ paddingBottom: '0px' }}>
                                        Howard Community College
                                                        </Typography>
                                    <Typography type="body2" style={{ paddingBottom: '0px' }}>
                                        Columbia, MD
                                    </Typography>
                                </Grid>
                            </ListItem>
                            <Divider />
                            <ListItem  >

                                <ListItemIcon style={{ height: '75px', width: '75px' }}>
                                    <img src={hcc} />
                                </ListItemIcon>

                                <Grid>
                                    <Typography type="title" >
                                        Computer Science - Associates of Arts
                                                        </Typography>
                                    <Typography type="subheading" style={{ paddingBottom: '0px' }}>
                                        Howard Community College
                                    </Typography>
                                    <Typography type="body2" style={{ paddingBottom: '0px' }}>
                                        Columbia, MD
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </List>
                    </Paper>

                </Grid>



            </Section>
        );
    }
}

const Education = withStyles(style)<EducationProps>(EducationComponent);
export default Education;