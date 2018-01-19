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
import Card from 'material-ui/Card/Card';
import CardContent from 'material-ui/Card/CardContent';





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
const headshot = require('./img/headshot.jpg');

const style = {
  margin: 5,
  width: 100,
  height: 100,
  display: 'inline-block',
};



class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="backgroundHeader">
          <h1>Julian Moyse</h1>
          <h5>Full-Stack Developer</h5>
          <Avatar
            src={headshot}
            style={style}
          />
        </div>

        <div className="lowerBody">

          <div>
            <Card >
              <CardContent>


                <p>

                  <b>Hello</b>, my name is Julian Moyse.
              I am a software developer and Computer Scientist.
              I graduated from the <a href="www.umd.edu">University of Maryland</a> with a BSc in Computer Science.

                I am a detail-oriented developer with an passion for writing clean,
                efficent and well maintained code.
            I pride myself in staying up to date with the latest technology and software design principles.
            </p>
                <p>Currently working as a freelance web developer, but always open to new opportunities.
                </p>

                <h3>Lifelong geek, nerd and techie.</h3>
                <h5>Feel free to shoot me a message</h5>

                <p />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="intro">



          <div className="contactBody">

            <div>
              <h3>Contact</h3>
            </div>

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
              <h3>Personal Projects</h3>
            </div>
            <div className="projectsContainer">
              {
                /*Collection a few smaller personal projects I've written over the years. */
              }
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

              <div><b>University of Maryland</b> College Park, MD</div>

              BSc. Computer Science
                    <br />
              <div><b>Howard Community College</b> Columbia, MD</div>
              <div> AA. Mathmatics</div>
              <div> AA. Computer Science</div>

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
        <div className="footer">
          © 2018 Julian Moyse
        </div>
      </div >
    );
  }
}

export default App;
