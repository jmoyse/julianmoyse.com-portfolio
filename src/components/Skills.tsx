import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import './Skills.css';
import Typography from 'material-ui/Typography/Typography';
import Grid from 'material-ui/Grid/Grid';

const style = {

};
const es6 = require('../icons/es6.png');
const js = require('../icons/javascript.png');
const ts = require('../icons/typescript-icon.png');
const react = require('../icons/react.png');
const redux = require('../icons/redux.png');

export interface SkillsProps {

}
export interface SkillsState {

}

type ClassNames = keyof typeof style;

class SkillsComponent extends React.Component<SkillsProps & WithStyles<ClassNames>, SkillsState> {
    constructor (props: SkillsProps & WithStyles<ClassNames>) {
        super(props);

    }

    render () {
        return (
            <div id="SkillsBody" className="lowerBody">
                <Typography type="display2" paragraph={true} align="center" style={{ paddingBottom: '30px' }}>

                    Professional skills
                </Typography>
                <Grid>
                    <Grid
                        container={true}
                        alignItems="center"
                        direction="row"
                        justify="center"
                    >
                        <Grid
                            container={true}
                            justify="center"
                        >
                            <img src={es6} height="75px" style={{ padding: '5px' }} />
                        </Grid>
                        <Grid
                            container={true}
                            justify="center"
                        >
                            <img src={ts} height="75px" style={{ padding: '5px' }} />
                        </Grid>
                        <Grid
                            container={true}
                            justify="center"
                        >
                            <img src={js} height="75px" style={{ padding: '5px' }} />
                        </Grid>
                        <Grid
                            container={true}
                            justify="center"
                        >
                            <img src={react} height="75px" style={{ padding: '5px' }} />
                        </Grid>
                        <Grid
                            container={true}
                            justify="center"
                        >
                            <img src={redux} height="75px" style={{ padding: '5px' }} />
                        </Grid>


                    </Grid>
                </Grid>

            </div >
        );
    }
}

const Skills = withStyles(style)<SkillsProps>(SkillsComponent);
export default Skills;