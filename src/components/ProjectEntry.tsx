import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import * as Scroll from 'react-scroll';
import './ProjectEntry.css';

const style = {

};

export interface ProjectEntryProps {

}
export interface ProjectEntryState {

}

type ClassNames = keyof typeof style;

class ProjectEntryComponent extends React.Component<ProjectEntryProps & WithStyles<ClassNames>, ProjectEntryState> {
    scroll = Scroll.animateScroll;
    scroller = Scroll.scroller;
    constructor (props: ProjectEntryProps & WithStyles<ClassNames>) {
        super(props);

    }
    render () {
        return (
            <div >
                test
            </div>
        );
    }
}

const ProjectEntry = withStyles(style)<ProjectEntryProps>(ProjectEntryComponent);
export default ProjectEntry;