import * as React from 'react';

import * as FontAwesome from 'react-fontawesome';
import './App.css';
import './awesome/css/fontawesome.min.css';
import './awesome/css/fontawesome.css';
import Avatar from 'material-ui/Avatar/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
// import withStyles from 'material-ui/styles/withStyles';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import Divider from 'material-ui/Divider/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import CardContent from 'material-ui/Card/CardContent';
import Typography from 'material-ui/Typography/Typography';
import Reboot from 'material-ui/Reboot/Reboot';
import AppBar from 'material-ui/AppBar/AppBar';
import Paper from 'material-ui/Paper/Paper';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import IconButton from 'material-ui/IconButton/IconButton';
// import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
// import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

import * as classNames from 'classnames';

import { withStyles, WithStyles } from 'material-ui/styles';
import Button from 'material-ui/Button/Button';
import MobileStepper from 'material-ui/MobileStepper/MobileStepper';

export interface PortfolioProps {

}

export interface PortfolioState {
  height: number;
  scrollTo: number;
}

/*
const decorate = withStyles(({ palette, spacing }) => ({
  root: {
    padding: spacing.unit,
    backgroundColor: palette.background,
    color: palette.primary,
  },
}));
*/

// Favicon: https://favicon.io/
const wordcoasterImg = require('./screenshots/wordcoaster.png');
const mp3player = require('./screenshots/mp3player-screenshot.png');
const headshot = require('./img/headshot2.jpg');

const styles = {
  box: {
    margin: 10,
    padding: 10,
    border: 'solid 1px gray',
  },
  button: {
    margin: 10,
  },
  buttonWithHover: {
    margin: 10,
    // hoverも記述できる
    '&:hover': {
      backgroundColor: '#ff0000',
    }
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 250,
    height: 250,
    display: 'inline-block',
    textAlign: 'center',
    alignself: 'center',
    marginBottom: '50px',
  },
};

type ClassNames = keyof typeof styles;
class AppStyle extends React.Component<PortfolioProps & WithStyles<ClassNames>, PortfolioState> {

  constructor (props: PortfolioProps & WithStyles<ClassNames>) {
    super(props);
    this.state = {
      height: 0,
      scrollTo: 0,
    };
  }


  onScrollToIntro = () => {
    scrollTo(0, this.state.scrollTo);
  }

  render () {
    return (

      <div className="App" >

        <div >
          <Reboot />
          <AppBar position="static">
            <Toolbar>
              <IconButton color="contrast" aria-label="Menu">
                <MenuIcon />
              </IconButton>

            </Toolbar>
          </AppBar>
        </div>

        {
          /*
        <div className="header-wrapper" style={{ 'height': this.state.height }}>
          <div className="scroll-down-btn">
            <Button
              fab={true}
              color="primary"
              aria-label="add"
              // backgroundColor="#A80202"
              onClick={evt => this.onScrollToIntro()}
            >
              <AddIcon />
            </Button>
          </div>
      </div>
        */
        }

        {
          /*
                    <div id="firstScreen" className="bg">
                      <Typography paragraph={true} style={{ fontSize: '90px' }}>
                        hi ...
                    </Typography>
                    </div>
                    */
        }
        <div className="backgroundHeader">

          <Avatar
            src={headshot}
            className={classNames(this.props.classes.avatar, this.props.classes.bigAvatar)}
          />
          <Typography type="display3" gutterBottom={true} paragraph={true}>
            Julian Moyse
          </Typography>

          <Typography type="headline" gutterBottom={true} paragraph={true}>
            Full Stack Developer
          </Typography>

          <Button color="primary" >
            julianmoyse.com
          </Button>
        </div>

        <div className="lowerBody">
          <div>
            <Typography type="display2" gutterBottom={true} paragraph={true}>
              About
            </Typography>
            <Paper elevation={15} style={{ width: '400px' }}>
              <CardContent>

                <Typography type="headline" component="h3">
                  Hello
                </Typography>



                <Typography paragraph={true}>
                  I am a software developer and Computer Scientist.
                    I graduated from the <a href="www.umd.edu">University of Maryland</a>
                  with a BSc in Computer Science.
                    I am a detail-oriented developer with an passion for writing clean,
                    efficent and well maintained code.
                    I pride myself in staying up to date with the latest technology and software design principles.
                </Typography>

                <Typography paragraph={true}>
                  Currently working as a freelance web developer, but always open to new opportunities.
                </Typography>
                <Typography type="headline" component="h3">
                  Lifelong geek, nerd and techie.
                </Typography>

                <Typography component="h5">
                  Feel free to shoot me a message
                </Typography>
              </CardContent>
            </Paper>
          </div>
        </div>

        <div className="intro">

          <div className="contactBody">
            <Typography type="display2" gutterBottom={true} paragraph={true}>
              Contact
            </Typography>
            <Paper elevation={15} style={{ width: '350px' }}>
              <List style={{ width: '350px' }}>
                <ListItem button={true} >

                  <ListItemIcon>

                    <FontAwesome
                      className="contactIconDiv"
                      name="github"
                      size="2x"
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />

                  </ListItemIcon>

                  <ListItemText primary="github.com/jmoyse" />

                </ListItem>
                <Divider />
                <ListItem button={true}>
                  <ListItemIcon>
                    <FontAwesome
                      className="contactIconDiv"
                      name="facebook-square"
                      size="2x"
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="facebook.com/julianmoyse" />
                </ListItem>
                <Divider />

                <ListItem button={true}>
                  <ListItemIcon>
                    <FontAwesome
                      className="contactIconDiv"
                      name="twitter"
                      size="2x"
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="@julianmoyse" />
                </ListItem>

                <Divider />
                <ListItem button={true}>
                  <ListItemIcon>
                    <FontAwesome
                      className="contactIconDiv"
                      name="google-plus"
                      size="2x"
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Google+" />
                </ListItem>
                <Divider />
                <ListItem button={true}>
                  <ListItemIcon>
                    <FontAwesome
                      className="contactIconDiv"
                      name="linkedin-square"
                      size="2x"
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="linkedin.com/in/julianmoyse" />
                </ListItem>
                <Divider />
                <ListItem button={true}>
                  <ListItemIcon>
                    <FontAwesome
                      className="contactIconDiv"
                      name="envelope-open"
                      size="2x"
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="hello@julianmoyse.com" />
                </ListItem>
              </List>
            </Paper>
            {/*

              <div className="projectsContainer">
                <div>
                  <FontAwesome
                    className="contactIconDiv"
                    name="github"
                    size="2x"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                  />

                  <a href="https://github.com/jmoyse">github.com/jmoyse</a>
                </div>
                <div>
                  <FontAwesome
                    className="contactIconDiv"
                    name="facebook-square"
                    size="2x"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                  />
                  <a href="https://www.facebook.com/julianmoyse">facebook.com/julianmoyse</a>
                </div>
                <div>
                  <FontAwesome
                    className="contactIconDiv"
                    name="twitter"
                    size="2x"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                  />
                  <a href="https://www.twitter.com/julianmoyse">@julianmoyse</a>
                </div>
                <div>
                  <FontAwesome
                    className="contactIconDiv"
                    name="google-plus"
                    size="2x"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                  />
                  <a href="https://plus.google.com/u/0/100752723741298405290">Google+</a>
                </div>
                <div>
                  <FontAwesome
                    className="contactIconDiv"
                    name="linkedin-square"
                    size="2x"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                  />
                  <a href="https://www.linkedin.com/in/julianmoyse">linkedin.com/in/julianmoyse</a>
                </div>
                <div>
                  <FontAwesome
                    className="contactIconDiv"
                    name="envelope-open"
                    size="2x"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                  />
                  <a href="mailto:hello@julianmoyse.com">hello@julianmoyse.com</a>
                </div>
              </div>
            </div>*/
            }
          </div>

          <p />
          <div className="projectsBody">
            <div >
              <Typography type="display2" gutterBottom={true} paragraph={true}>
                Personal Projects
              </Typography>

            </div>
            <div className="projectsContainer">
              {
                /*Collection a few smaller personal projects I've written over the years. */
              }
              <Paper elevation={15} style={{ padding: '20px' }}>
                <div id="wordCoaster" className="singleProjectDiv">

                  <img src={wordcoasterImg} width="436px" height="500px" />
                  <div>
                    <div>
                      <div>
                        <div className="projectHeaderText" >Word Coaster<br />

                          {/*
                        <a href="https://www.wordcoaster.julianmoyse.com/">www.wordcoaster.fun</a>
                          &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
                      */}
                        </div>
                      </div>
                    </div>

                    <div className="projectDescription">
                      Mobile and Native Web multi-player word game.
                    A modern and new twist on classic board games like Scrabble and Boggle.
                    Supports hundreds of concurrent players with chat, score history and profiles.
                    Cleanly written using a number of different modern languages and APIs.
                    Broken up in a number of smaller projects.
                </div>
                    <br />

                    <ul >
                      <li>
                        <div>
                          <b>Game Server Back-end</b>
                          &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
                        .NET Core 2.0, C#, Docker, SQLite
                    </div>
                        <div>
                          Running multi-threaded WebSocket backend.Accounts and game history stored in a SQlite database.
                        Dockerized for scaleability. Deployable to Linux, Windows or MacOSX.
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
                            Touch enabled, JS front-end.
                          Connects to gameserver with WebSockets. Includes user profiles and player history.
                        </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <b>Solution Micro-service</b>
                          &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
                        TypeScript, Node.js, Express.js, JSON
                      </div>
                        <div>
                          <div>
                            Microservice that efficently
                          solves a board of any given size using a trie and depth-first traversal of the gameboard.
                          Returns results in JSON (<a href="null">link</a>) (<a href="null">source</a>)
                        </div>
                        </div>
                      </li>

                      <li>
                        <div>
                          <b>Desktop Back-end</b>
                          &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
                         .NET 4.0, C#, WebSockets
                      </div>
                        <div>
                          Windows client that connects to the game server and allows communication
                        with the gameserver and webclient
                        (<a href="null">source</a>) (<a href="null">binaries</a>)
                      </div>
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

            </div>
          </div>
          <p />
          <div>
            <h3>Education</h3>
            <div className="projectsContainer">
              <Paper elevation={15} style={{ width: '400px' }}>
                <div><b>University of Maryland</b> College Park, MD</div>

                BSc. Computer Science
                    <br />
                <div><b>Howard Community College</b> Columbia, MD</div>
                <div> AA. Mathmatics</div>
                <div> AA. Computer Science</div>
              </Paper>
            </div>

          </div >
          <p />

          <div>
            <div>
              <h3>Server</h3>
            </div>
            <div className="projectsContainer">
              <div>
                Hosted on a Virtual Private Server courtsy of <a href="www.vultr.com">Vultr.com</a>.<br />
                Source hosted on Github and locally . SSL from LetsEncrypt<br />
                <div>2.0GB memory and 100GB SSD</div>
              </div>

              <div>
                <a href="https://coreos.com/releases/">CoreOS</a>
                &nbsp; stable branch
          </div>
              <div>
                <a href="https://hub.docker.com/_/nginx/">docker/nginx</a>
              </div>
              <div>
                <a href="https://hub.docker.com/r/tvial/docker-mailserver/">docker/mailserver</a>
              </div>
              <div>
                <a href="https://hub.docker.com/r/tvial/docker-mailserver/">docker/nodejs</a>
              </div>
              <div>
                <a href="https://hub.docker.com/_/node/">docker/nodejs</a>

              </div>
              <div>
                <a href="https://github.com/dotnet/dotnet-docker">docker/dotnet</a>
              </div>
              <div>
                <a href="https://hub.docker.com/r/linuxserver/letsencrypt/">docker/letsencrypt</a>
              </div>
            </div >
          </div>

        </div >

        Professional skills

        <div className="footer">
          © 2018 Julian Moyse
        </div>
      </div >
    );
  }
}

const App = withStyles(styles)<PortfolioProps>(AppStyle);

export default App;
