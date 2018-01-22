import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper/Paper';
import Chip from 'material-ui/Chip/Chip';
import Button from 'material-ui/Button/Button';
import MobileStepper from 'material-ui/MobileStepper/MobileStepper';
import './Projects.css';

const style = {

};

export interface ProjectsProps {

}
export interface ProjectsState {

}

type ClassNames = keyof typeof style;
const wordcoasterImg = require('../screenshots/wordcoaster.png');
// const mp3player = require('./screenshots/mp3player-screenshot.png');

class ProjectsComponent extends React.Component<ProjectsProps & WithStyles<ClassNames>, ProjectsState> {
    constructor (props: ProjectsProps & WithStyles<ClassNames>) {
        super(props);
    }

    render () {
        return (
            <div id="ProjectsBody" className="lowerBody">
                <div className="projectsBody">
                    <Typography type="display2" gutterBottom={true} paragraph={true}> Personal Projects </Typography>

                    <div className="projectsContainer">
                        <Paper elevation={15} style={{ padding: '20px' }}>
                            <div id="wordCoaster" className="singleProjectDiv">
                                <img src={wordcoasterImg} width="436px" height="500px" />
                                <div>
                                    <div className="projectHeaderText" >
                                        Word Coaster
                                        <br />

                                        {
                                            /*
                                        <a href="https://www.wordcoaster.julianmoyse.com/">www.wordcoaster.fun</a>
                                          &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
                                      */
                                        }
                                    </div>

                                    <div className="projectDescription">
                                        <Typography paragraph={true}>
                                            Mobile and Native Web multi-player word game.
                                            A modern and new twist on classic board games like Scrabble and Boggle.
                                            Supports hundreds of concurrent players with chat, score history and profiles.
                                            Cleanly written using a number of different modern languages and APIs.
                                            Broken up in a number of smaller projects.
                                        </Typography>
                                    </div>
                                    <br />

                                    <ul >
                                        <li>
                                            <div>
                                                <b>Game Server Back-end</b>
                                                &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
                                                <div>
                                                    <Typography paragraph={true}>
                                                        Running multi-threaded WebSocket backend.
                                                        Accounts and game history stored in a SQlite database.
                                                        Dockerized for scaleability. Deployable to Linux, Windows or MacOSX.
                                                    </Typography>
                                                </div>

                                                <Chip key="0" label=".NET Core" />
                                                <Chip key="1" label="C#" />
                                                <Chip key="2" label="WebSockets" />
                                                <Chip key="2" label="Docker" />
                                                <Chip key="3" label="SQLite" />
                                                <br />

                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <b>Web App Front-end</b>
                                                &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
                        TypeScript/Javascript, React, WebPack, HTML 5
                        </div>
                                            <div>
                                                <div>
                                                    <Typography paragraph={true}>
                                                        Touch enabled, JS front-end.
                          Connects to gameserver with WebSockets. Includes user profiles and player history.
                          </Typography>
                                                </div>
                                                <Chip key="0" label="Typescript" />
                                                <Chip key="1" label="Javascript" />
                                                <Chip key="2" label="React" />
                                                <Chip key="3" label="Webpack" />
                                                <Chip key="3" label="HTML 5" />
                                                <Chip key="3" label="Material UI" />
                                                <Chip key="2" label="WebSockets" />
                                                <br />
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <b>Solution Micro-service</b>
                                                &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]

                      </div>

                                            <div>
                                                <div>
                                                    <Typography>
                                                        Microservice that efficently
                          solves a board of any given size using a trie and depth-first traversal of the gameboard.
                          Returns results in JSON (<a href="null">link</a>) (<a href="null">source</a>)
                          </Typography>
                                                </div>
                                                <Chip key="0" label="Node.js" />
                                                <Chip key="1" label="Typescript" />
                                                <Chip key="2" label="Express.js" />
                                                <Chip key="3" label="JSON" />
                                                <br />
                                            </div>
                                        </li>

                                        <li>
                                            <div>
                                                <b>Desktop Back-end</b>
                                                &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
                         .NET 4.0, C#, WebSockets
                      </div>
                                            <div>
                                                <Typography paragraph={true}>
                                                    Windows client that connects to the game server and allows communication
                        with the gameserver and webclient
                        (<a href="null">source</a>) (<a href="null">binaries</a>)
                        </Typography>
                                            </div>

                                            <Chip key="0" label=".NET 4.0" />
                                            <Chip key="1" label="C#" />
                                            <Chip key="2" label="WebSockets" />

                                            <br />
                                        </li>
                                    </ul >
                                    <br />

                                    <a className="launchButton" href="http://vistoryapp.com" target="blank">Open app site</a>
                                </div>
                            </div>

                            <MobileStepper
                                type="dots"
                                steps={6}
                                position="static"
                                // activeStep={this.state.activeStep}
                                // className={classes.root}
                                nextButton={
                                    <Button
                                        dense={true}
                                    // onClick={this.handleNext}
                                    // disabled={this.state.activeStep === 5}
                                    >
                                        Next
                      {
                                            // theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />
                                        }
                                    </Button>
                                }
                                backButton={

                                    <Button
                                        dense={true}
                                    // onClick={this.handleBack}
                                    // disabled={this.state.activeStep === 0}
                                    >
                                        {
                                            // theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />
                                        }
                                        Back
                                    </Button>
                                }
                            />
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

                </div>
            </div>
        );
    }
}

const Projects = withStyles(style)<ProjectsProps>(ProjectsComponent);
export default Projects;