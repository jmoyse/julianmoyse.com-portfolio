import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper/Paper';
import Chip from 'material-ui/Chip/Chip';
import Button from 'material-ui/Button/Button';
import MobileStepper from 'material-ui/MobileStepper/MobileStepper';
import './Projects.css';
import Grid from 'material-ui/Grid/Grid';
import Slider from 'react-slick';

import DoneIcon from 'material-ui-icons/Done';

const style = {

};

/*
const projectList = {

    name: 'Word Coaster',
    img: '../screenshots/wordcoaster.png',
    description: 'Mobile and Native Web multi-player word game.  A modern and new twist on classic board games like Scrabble and Boggle. Supports hundreds of concurrent players with chat, score history and profiles. Cleanly written using a number of different modern languages and APIs.  Broken up in a number of smaller projects.',
    tech: 'Typescript, Javascript, React, Webpack, HTML 5, Material UI,WebSockets'
};
*/

export interface ProjectsProps {

}
export interface ProjectsState {
    selectedSliderIndex: number;

}

type ClassNames = keyof typeof style;
const wordcoasterImg = require('../screenshots/wordcoaster.png');
const gameserverImg = require('../screenshots/gameserver1.png');
const solverImg = require('../screenshots/solver.png');
const mp3player = require('../screenshots/mp3player-screenshot.png');
const game2048 = require('../screenshots/2048.png');
const keyboard = require('../screenshots/keyboard-small.png');
const quadtree = require('../screenshots/quadtree-example.png');

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
            lazyLoad: false,
            arrows: false,
            swipe: false,
            swipeToSlide: false,
            afterChange: onMouseDownNext,
        };

        return (

            <div className="lowerBody">
                <div className="projectsBody">
                    <Typography type="display2" paragraph={true} align="center" style={{ paddingBottom: '30px' }}>
                        Personal Projects
                    </Typography>

                    <Grid
                        alignContent="center"
                        alignItems="center"
                        container={true}
                        spacing={24}
                        justify="center"
                    >
                        <div className="projectsContainer">
                            <Paper elevation={15} style={{ padding: '20px', 'maxWidth': '700px', width: '100%' }} >
                                <MobileStepper
                                    type="dots"
                                    steps={7}
                                    position="static"
                                    activeStep={this.state.selectedSliderIndex}
                                    // className={classes.root}
                                    nextButton={
                                        <Button
                                            dense={true}
                                            onClick={(e) =>
                                                (this.slider as Slider).slickNext()
                                            }
                                        >
                                            Next
                                        </Button>
                                    }
                                    backButton={

                                        <Button
                                            dense={true}
                                            onClick={() =>
                                                (this.slider as Slider).slickPrev()
                                            }
                                        >
                                            {// theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />
                                            }
                                            Back
                                        </Button>
                                    }
                                />
                                <Slider
                                    ref={c => (this.slider = c)}
                                    {...settings}

                                    className="slider"
                                >
                                    <div className="singleProjectDiv">
                                        <Grid  >
                                            <Typography type="headline" paragraph={true}>
                                                Word Coaster
                                            </Typography>
                                            <img src={wordcoasterImg} />
                                            <Grid >
                                                <div className="projectDescription">
                                                    <Typography paragraph={true}>
                                                        Mobile and Native Web multi-player word game.
                                                        A modern and new twist on classic board games like Scrabble and Boggle.
                                                        Supports hundreds of concurrent players with chat,
                                                        score history and profiles.
                                                        Cleanly written using a number of different modern languages and APIs.
                                                        Broken up in a number of smaller projects.
                                                    </Typography>
                                                    <div>
                                                        <Chip key="0" label="Typescript" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="1" label="Javascript" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="2" label="React" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="3" label="Webpack" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="4" label="HTML 5" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="5" label="Material UI" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="6" label="WebSockets" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <br />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>


                                    <div className="singleProjectDiv">
                                        <Grid >
                                            <Typography type="headline" paragraph={true}>
                                                2048
                                                    </Typography>

                                            <img src={game2048} width="100%" />

                                            <Grid >

                                                <div className="projectDescription">
                                                    <Typography paragraph={true}>
                                                        .NET version of the 2048 tile game
                                                    </Typography>
                                                    <div>

                                                        <Chip key="7" label="C#" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="8" label=".NET Runtime" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <br />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div className="singleProjectDiv">
                                        <Grid >
                                            <Typography type="headline" paragraph={true}>
                                                Loose Quad-Tree Data Structure
                                                    </Typography>
                                            <img src={quadtree} />

                                            <Grid >

                                                <div className="projectDescription">
                                                    <Typography paragraph={true}>
                                                        C++ implementation of the Data Structure used for efficent
                                                        querying of 2-D objects.
                                                       Supports efficent range queries and storage.
                                                       Written for CMSC420 (Data Structures).
                                                    </Typography>
                                                    <div>

                                                        <Chip key="9" label="C++" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />

                                                        <br />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>




                                    <div className="singleProjectDiv">
                                        <Grid >



                                            <Grid >
                                                <Typography type="headline" paragraph={true}>
                                                    Word Coaster Server Back-end
                                            </Typography>
                                                <img src={gameserverImg} width="100%" />


                                                <div className="projectDescription">
                                                    <Typography paragraph={true}>
                                                        Running multi-threaded WebSocket backend.
                                                    Accounts and game history stored in a SQlite database.
                                                    Dockerized for scaleability.
                                                    Deployable to Linux, Windows or MacOSX.
                                            </Typography>
                                                    <div>
                                                        <div>
                                                            <Typography paragraph={true}>Touch enabled, JS front-end.
                                                        Connects to gameserver with WebSockets.
                                                        Includes user profiles and player history.
                                                    </Typography>
                                                        </div>
                                                        <Chip key="10" label=".NET Core" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="11" label="C#" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="12" label="WebSockets" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="13" label="Docker" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="14" label="SQLite" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <br />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div className="singleProjectDiv">
                                        <Grid >

                                            <Typography type="headline" paragraph={true}>
                                                Game Solution Solver
                                            </Typography>
                                            <img src={solverImg} width="100%" />

                                            <Grid >





                                                <div className="projectDescription">
                                                    <Typography paragraph={true}>
                                                        Microservice that efficently
                          solves a board of any given size using a trie and depth-first traversal of the gameboard.
                          Returns results in JSON (<a href="null">link</a>) (<a href="null">source</a>)
                                            </Typography>
                                                    <div>
                                                        <div>
                                                            <Typography paragraph={true}>Touch enabled, JS front-end.
                                                        Connects to gameserver with WebSockets.
                                                        Includes user profiles and player history.
                                                    </Typography>
                                                        </div>
                                                        <Chip key="15" label="Node.js" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="16" label="Typescript" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="17" label="Express.js" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="18" label="JSON" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <br />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>




                                    <div className="singleProjectDiv">
                                        <Grid >

                                            <Typography type="headline" paragraph={true}>
                                                XMMS Clone
                                            </Typography>
                                            <img src={mp3player} height="500px" />

                                            <Grid >





                                                <div className="projectDescription">
                                                    <Typography paragraph={true}>
                                                        Microservice that efficently
                          solves a board of any given size using a trie and depth-first traversal of the gameboard.
                          Returns results in JSON (<a href="null">link</a>) (<a href="null">source</a>)
                                            </Typography>
                                                    <div>
                                                        <div>
                                                            <Typography paragraph={true}>
                                                                XMMS clone mp3 player written for Mono for Linux.
                                                    </Typography>
                                                        </div>
                                                        <Chip key="19" label="Mono" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="20" label="C#" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="21" label="GTK" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="22" label="LibGStreamer" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <br />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>


                                    <div className="singleProjectDiv">
                                        <Grid >
                                            <Typography type="headline" paragraph={true}>
                                                Tablet Touch Keyboard
                                                    </Typography>
                                            <img src={keyboard} />

                                            <Grid >

                                                <div className="projectDescription">
                                                    <Typography paragraph={true}>
                                                        Small, touch enabled on screen keyboard for tablets. Requires Mono,
                                                    </Typography>
                                                    <div>

                                                        <Chip key="23" label="C#" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="24" label="Mono" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <Chip key="25" label="GTK" style={{ fontWeight: 'bold' }} avatar={<DoneIcon />} />
                                                        <br />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>

                                </Slider>


                            </Paper>


                            <p />
                            {/*
              <div>
                <div>
                  <div className="projectHeaderText" >Bittorrent Client<br /></div>

                  &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
              </div>
                <div>
                  Ruby - Communicates with trackers running version 1.0 of the Bittorrent protocal.
                Supports peer sending and receciving of file pieces (<a href="null">source</a>)
              </div>
              </div>
              <p />
              <div>
                <div>

                  <div className="projectHeaderText" >2048<br /></div>
                  &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
              </div>
                <div>
                  C#, Windows - .NET version of the 2048 tile game
                (<a href="null">source</a>) (<a href="null">binaries</a>)
              </div>
              </div>
              <p />

              <div id="mp3player" className="singleProjectDiv">

                <img src={mp3player} />
                <div>
                  <div>

                    <div className="projectHeaderText" >MP3 Player<br /></div>
                    &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>]
                </div>

                  <div>
                    Mono, C# - XMMS clone mp3 player written for Mono for Linux. (Requires
        Mono, GTK, GTK# and LibGStreamer#)
        (<a href="null">source</a>) (<a href="null">binaries</a>)
              </div>
                </div>
              </div>
              <p />
              <div>
                <div>
                  <div className="projectHeaderText" >Tablet Touch Keyboard<br /></div>
                  &nbsp;[<a href="img/ws1.png">1</a>]
              </div>
                <div>
                  Mono, C# - Small, touch enabled on screen keyboard for tablets. Requires Mono,
        GTK and GTK#
        (<a href="null">source</a>) (<a href="null">binaries</a>)
              </div>
              </div>
              <p />
              <div>
                <div>

                  <div className="projectHeaderText" >Loose Quad-Tree<br /></div>
                  &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
              </div>
                <div>
                  C++ - Written for CMSC420 (Data Structures). Implemention of a loose quadtree
        that supports efficent range queries and storage (<a href="null">source</a>)
              </div>
              </div>
              <p />
              <div>
                <div>
                  <div className="projectHeaderText" >Bus Tracker<br /></div>
                  &nbsp;[<a href="img/ws1.png">1</a>]
              </div>
                <div>
                  Adobe Flex, Flash, ActionScript 3.0 - Merged and visualized the University of Maryland
                campus bus system into a easy to read format
                (<a href="null">source</a>)
              </div>
              </div>
                */
                            }

                        </div>

                    </Grid>
                </div>
            </div >
        );
    }
}

const Projects = withStyles(style)<ProjectsProps>(ProjectsComponent);
export default Projects;