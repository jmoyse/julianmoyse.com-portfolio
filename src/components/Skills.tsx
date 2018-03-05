import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid/Grid';
import Section from './Section';
import Typography from 'material-ui/Typography/Typography';
import LinearProgress from 'material-ui/Progress/LinearProgress';
import Paper from 'material-ui/Paper/Paper';
import './Skills.css';

// import Typography from 'material-ui/Typography/Typography';

const style = {

};
//const js = require('../icons/javascript.png');
//const react = require('../icons/react.png');
//const redux = require('../icons/redux.png');

/*
const es6 = require('../icons/es6.png');
const js = require('../icons/javascript.png');
const ts = require('../icons/typescript-icon.png');
const react = require('../icons/react.png');

*/

export interface SkillsProps {
    skills: Object;
}
export interface SkillsState {

}
/*

const skillList = {
    { 'TypeScript': 25 },
'React': 75,
    'Javascript': 75,
        'C#': 75,
};*/

type ClassNames = keyof typeof style;

class SkillsComponent extends React.Component<SkillsProps & WithStyles<ClassNames>, SkillsState> {
    constructor (props: SkillsProps & WithStyles<ClassNames>) {
        super(props);
    }
    render () {
        return (
            <Section id="skillsLink" title="Skills" background="">
                <Grid
                    container={true}
                    alignItems="center"
                    direction="row"
                    justify="center"
                >

                    <Paper elevation={15} style={{ padding: '20px', paddingTop: '40px', display: 'block', minWidth: '0px', maxWidth: '90%' }}>
                        <Typography style={{ maxWidth: '700px' }} >
                            I have 10+ years experience in programming, which has allowed me me to develop skills in a variety of different languages and databases.
                            I have experience in a number of different front-end and back-end languages, however my current expertise is in web focused technologies.

                            Current making applications in <b>Javascript</b>, <b>Typescript</b>, <b>React</b>, <b>Node.js</b> and <b>C#</b> using <b>SQL</b> and <b>NOSQL</b> databases.
                            I am comfortable with most major operating systems and have experience with both <b>Amazon Web Services</b> and <b>Microsoft Azure</b>.
                            <br />
                        </Typography>
                        <p />
                        <Grid
                            container={true}
                            alignContent="center"
                            justify="center"
                            style={
                                {
                                    maxWidth: '700px',
                                    paddingTop: '20px',
                                    paddingBottom: '20px'
                                }
                            }
                        >
                            {
                                this.props.skills !== undefined ?
                                    (((this.props.skills as any).skill as Array<Object>).map(data =>
                                        <Grid item={true} xs={true} key={(data as any)._name}>
                                            <div

                                                style={
                                                    {
                                                        display: 'flex',
                                                        wrapOption: 'noWrap',
                                                        flexDirection: 'row',

                                                        verticalAlign: 'center',
                                                    }
                                                }
                                            >
                                                <div style={{ width: '50px' }}>
                                                    <img
                                                        src={require('../icons/' + (data as any)._icon)}
                                                        width="auto"
                                                        height="auto"
                                                        draggable={false}
                                                        alt="(data as any)._icon"

                                                        style={{
                                                            maxHeight: '35px',
                                                            maxWidth: '35px'
                                                        }}
                                                    />
                                                </div>

                                                <div
                                                    style={
                                                        {
                                                            display: 'flex',
                                                            verticalAlign: 'center',
                                                            alignItems: 'baseline',
                                                            justifyContent: 'flex-start'
                                                        }
                                                    }
                                                >
                                                    <LinearProgress
                                                        color="primary"
                                                        variant="determinate"
                                                        value={(data as any)._score}
                                                        style={
                                                            {
                                                                position: 'relative',
                                                                display: 'block',
                                                                maxWidth: '500px', width: '250px',
                                                                height: '25px', margin: '5px',
                                                                padding: '0px'
                                                            }}
                                                    />

                                                    <Typography
                                                        noWrap={true}
                                                        style={{
                                                            position: 'absolute',
                                                            paddingLeft: '15px',
                                                            paddingTop: '5px',
                                                            color: 'white'
                                                        }}
                                                        variant="subheading"

                                                    >
                                                        {(data as any)._name}
                                                    </Typography>

                                                </div>
                                            </div>
                                        </Grid>
                                    )
                                    ) :
                                    ''}
                        </Grid>
                    </Paper>
                </Grid>
            </Section >
        );
    }
}

const Skills = withStyles(style)<SkillsProps>(SkillsComponent);
export default Skills;