import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper/Paper';
import './Education.css';

const style = {

};

export interface EducationProps {

}
export interface EducationState {

}

type ClassNames = keyof typeof style;

class EducationComponent extends React.Component<EducationProps & WithStyles<ClassNames>, EducationState> {
    constructor (props: EducationProps & WithStyles<ClassNames>) {
        super(props);

    }

    render () {
        return (
            <div id="EducationBody" className="lowerBody">

                <div>
                    <Typography type="display2" gutterBottom={true} paragraph={true}>
                        Education
                    </Typography>
                    <div className="projectsContainer">
                        <Paper elevation={15} style={{ width: '400px', padding: '20px' }}>
                            <div><b>University of Maryland</b> College Park, MD</div>

                            BSc. Computer Science
                            <br />
                            <div><b>Howard Community College</b> Columbia, MD</div>
                            <div> AA. Mathmatics</div>
                            <div> AA. Computer Science</div>
                        </Paper>
                    </div>
                </div >
            </div>
        );
    }
}

const Education = withStyles(style)<EducationProps>(EducationComponent);
export default Education;