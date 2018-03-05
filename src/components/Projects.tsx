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
import Section from './Section';
//import AppBar from 'material-ui/AppBar/AppBar';
//import Toolbar from 'material-ui/Toolbar/Toolbar';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';


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
};
*/

export interface ProjectsProps {
    projects: Object;
}

export interface ProjectsState {
    selectedSliderIndex: number;

}

type ClassNames = keyof typeof style;

class ProjectsComponent extends React.Component<ProjectsProps & WithStyles<ClassNames>, ProjectsState> {
    private slider: Slider | null = null;

    constructor (props: ProjectsProps & WithStyles<ClassNames>) {
        super(props);
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
            lazyLoad: true,
            arrows: false,
            swipe: true,
            swipeToSlide: true,
            afterChange: onMouseDownNext,
        };

        return (
            <Section id="projectsLink" title="Personal Projects" background="#EFEFEF">
                <Grid>
                    <Grid
                        container={true}
                        alignItems="center"
                        direction="row"
                        justify="center"
                    >
                        <Paper
                            elevation={15}
                            style={
                                {
                                    //padding: '20px',
                                    padding: '0px',
                                    display: 'block',
                                    minWidth: '0px',
                                    maxWidth: '90%'
                                }
                            }
                        >
                            {
                                //                           <AppBar position="static" color="secondary">
                                //                             <Toolbar style={{ width: '100%' }}>
                            }
                            <div style={{ background: '#D7DCE0' }}>
                                <MobileStepper
                                    variant="dots"
                                    steps={((this.props.projects as any).project as any).length}
                                    position="static"
                                    activeStep={
                                        this.state.selectedSliderIndex
                                    }
                                    style={{ width: '100%', background: '#D7DCE0' }}


                                    nextButton={
                                        <Button
                                            size="small"
                                            onClick={(e) => (this.slider as Slider).slickNext()}
                                            disabled={this.state.selectedSliderIndex === ((this.props.projects as any).project as Array<Object>).length - 1}

                                        >
                                            Next
                                            <KeyboardArrowRight />
                                        </Button>
                                    }

                                    backButton={
                                        <Button type="small" onClick={() => (this.slider as Slider).slickPrev()} disabled={this.state.selectedSliderIndex === 0}>
                                            Back
                                            <KeyboardArrowLeft />
                                        </Button>
                                    }
                                />
                            </div>
                            {
                                //</Toolbar>
                                //</AppBar>
                            }
                            <Slider ref={c => (this.slider = c)} {...settings} className="slider" >
                                {((this.props.projects as any).project as Array<Object>).map(data =>
                                    <div className="singleProjectDiv" key={(data as any)._name} style={{ paddingTop: '20px', paddingLeft: '40px', paddingRight: '40px' }}>
                                        <Grid
                                            direction="column"
                                            justify="center"
                                            alignContent="center"
                                            style={{ paddingBottom: '20px' }}
                                        >
                                            {/* project title*/}

                                            {


                                                <Button
                                                    style={{ margin: '5px', fontSize: '225.5%', padding: '0px' }}
                                                    color="secondary"
                                                    onClick={
                                                        (data as any)._url !== '' ? (e) => window.open((data as any)._url) : (e) => (undefined)
                                                    }
                                                    disableFocusRipple={(data as any)._url === ''}
                                                    disableRipple={(data as any)._url === ''}
                                                    size="large"
                                                >
                                                    {(data as any)._name}
                                                </Button>


                                            }


                                            <br />

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
                                        <Grid wrap="wrap" style={{ paddingBottom: '20px' }} >
                                            <Typography paragraph={true}>
                                                {(data as any).description}
                                            </Typography>

                                            {/* container of tech chips*/}
                                            <div style={{ 'verticalAlign: top;': 'bottom' }}>
                                                {(((data as any).techs.tech) as Array<Object>).map(chip =>
                                                    <Chip
                                                        key={(chip as any)._name + (data as any)._name}
                                                        label={(chip as any)._name}
                                                        style={{ fontWeight: 'bold' }}
                                                        avatar={<DoneIcon />}
                                                    />
                                                )}
                                                <br />
                                            </div>

                                            <div style={{ paddingTop: '10px' }}>
                                                {
                                                    (data as any)._url !== '' ?
                                                        (
                                                            <Button
                                                                style={{ margin: '5px' }}
                                                                variant="raised"
                                                                color="primary"
                                                                onClick={
                                                                    (e) => window.open((data as any)._url)
                                                                }

                                                            >
                                                                Launch Site
                                                    {/*<Icon className={classes.rightIcon}>send</Icon>*/}
                                                            </Button>
                                                        ) : ''
                                                }
                                                {
                                                    (data as any)._github !== '' ?
                                                        (
                                                            <Button
                                                                style={{ margin: '5px' }}
                                                                variant="raised"
                                                                color="primary"
                                                                onClick={
                                                                    (e) => window.open((data as any)._github)
                                                                }
                                                            >
                                                                Github
                                                    {/*<Icon className={classes.rightIcon}>send</Icon>*/}
                                                            </Button>
                                                        ) : ''
                                                }
                                            </div>
                                        </Grid>

                                    </div>
                                )}

                            </Slider>
                        </Paper>
                    </Grid>
                </Grid>
            </Section >
        );
    }
}

const Projects = withStyles(style)<ProjectsProps>(ProjectsComponent);
export default Projects;