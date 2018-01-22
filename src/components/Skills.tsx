import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import './Skills.css';
import Typography from 'material-ui/Typography/Typography';

const style = {

};

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
                <Typography type="display2" gutterBottom={true} paragraph={true}>
                    Professional skills
                </Typography>
            </div >
        );
    }
}

const Skills = withStyles(style)<SkillsProps>(SkillsComponent);
export default Skills;