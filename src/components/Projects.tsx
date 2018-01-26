import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper/Paper';
import Chip from 'material-ui/Chip/Chip';
import Button from 'material-ui/Button/Button';
import MobileStepper from 'material-ui/MobileStepper/MobileStepper';
import Grid from 'material-ui/Grid/Grid';
import Slider from 'react-slick';
import DoneIcon from 'material-ui-icons/Done';
import './Projects.css';

//var images = require.context('../screenshots', false);

//require('../screenshots/wordcoaster.png');

const style = {


};

/*
type projectsType = {
    project: [{
        description: string,
        technologies: [{
            _name: string;
            _icon: string;
        }]
    }]
    _name: string;
    _url: string;
    _screenshot: string;
};*/

export interface ProjectsProps {
    projects: Object;
}

export interface ProjectsState {
    selectedSliderIndex: number;

}

type ClassNames = keyof typeof style;
//const wordcoasterImg = require('../screenshots/wordcoaster.png');
//const game2048 = require('../screenshots/2048.png');


class ProjectsComponent extends React.Component<ProjectsProps & WithStyles<ClassNames>, ProjectsState> {
    private slider: Slider | null = null;

    constructor (props: ProjectsProps & WithStyles<ClassNames>) {
        super(props);
        console.log(props.projects);
        this.state = {
            selectedSliderIndex: 0,
        };
    }

    render () {
        let onMouseDownNext = (e: number) => {
            this.setState({ selectedSliderIndex: e });
        };

        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adapativeHeight: true,
            adaptiveWidth: false,
            lazyLoad: false,
            arrows: false,
            swipe: true,
            swipeToSlide: true,
            afterChange: onMouseDownNext,
        };

        return (
            <div className="lowerBody">
                <Typography type="display2" paragraph={true} align="center" style={{ paddingBottom: '30px' }}>
                    Personal Projects
                    </Typography>
                <Grid>
                    <Grid
                        container={true}

                        alignItems="center"
                        direction="row"
                        justify="center"
                    >
                        <Paper elevation={15} style={{ padding: '20px', display: 'block', minWidth: '0px', }}   >
                            <MobileStepper
                                type="dots"
                                steps={((this.props.projects as any).project as any).length}
                                position="static"
                                activeStep={
                                    this.state.selectedSliderIndex
                                }

                                nextButton={
                                    < Button dense={true} onClick={(e) => (this.slider as Slider).slickNext()} >
                                        Next
                                </Button>}

                                backButton={
                                    <Button dense={true} onClick={() => (this.slider as Slider).slickPrev()} >
                                        Back
                                </Button>}
                            />
                            <Slider ref={c => (this.slider = c)} {...settings} className="slider" >
                                {((this.props.projects as any).project as Array<Object>).map(data =>
                                    <div className="singleProjectDiv" key={(data as any)._name}>
                                        <Grid style={{ height: '100%', width: '100%' }}>
                                            {/* project title*/}
                                            <Typography type="headline" paragraph={true}>
                                                {(data as any)._name}
                                            </Typography>

                                            {/* project screenshot*/}
                                            <img


                                                src={require('../screenshots/' + (data as any)._screenshot)}
                                                width="auto"
                                                height="auto"
                                                draggable={false}

                                                style={{
                                                    maxHeight: '50%', maxWidth: '50%',



                                                }}
                                            />

                                            {/* description and tech Grid*/}

                                        </Grid>
                                        <Grid wrap="wrap" >
                                            <Typography paragraph={true}>
                                                {(data as any).description}
                                            </Typography>

                                            {/* container of tech chips*/}
                                            <div style={{ 'verticalAlign: top;': 'bottom' }}>
                                                {(((data as any).techs.tech) as Array<Object>).map(chip =>
                                                    <Chip
                                                        key={(chip as any)._name}
                                                        label={(chip as any)._name}
                                                        style={{ fontWeight: 'bold' }}
                                                        avatar={<DoneIcon />}
                                                    />
                                                )}
                                                <br />
                                            </div>
                                        </Grid>
                                    </div>
                                )}
                            </Slider>
                        </Paper>

                    </Grid>
                </Grid>


                <div className="projectsBody">
                    <br />



                </div >
            </div >
        );
    }
}

const Projects = withStyles(style)<ProjectsProps>(ProjectsComponent);
export default Projects;