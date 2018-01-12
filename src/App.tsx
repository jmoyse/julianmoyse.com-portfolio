import * as React from 'react';
import './App.css';
import './awesome/css/fontawesome.min.css';
import * as FontAwesome from 'react-fontawesome';

import './awesome/css/fontawesome.css';


class App extends React.Component {
  render () {
    return (
      <div className="App">


        <div className="backgroundHeader">
          <h1>Julian Moyse</h1>
          <h3>Software Developer</h3>
        </div>

        <div className="lowerBody">
          <div className="intro">
            <p>

              <b>Hello</b>, my name is Julian Moyse. I am a software developer and Computer Scientist based out of Maryland.
                I graduated from the <a href="www.umd.edu">University of Maryland</a> with a BSc in Computer Science.

                I am a detail-oriented developer with an obsessive focus on writing clean, efficent and well maintained code.
            I pride myself in staying up to date with the latest technology and software design principles.
            </p>y
            <p>Currently working as a freelance web developer, but always open to new opportunities. Excited to see what I can bring to your business.</p>

            <h3>Lifelong geek, nerd and techie.</h3>
            <h4>Feel free to shoot me a message</h4>
          </div>

          <p />
          <div className="contactBody">
            <div>
              <div><h3>Contact</h3></div>

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
            </div>
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


              <div id="wordCoaster">
                <div>
                  <div>
                    <b>Wordcoaster</b> <a href="https://www.wordcoaster.julianmoyse.com/">wordcoaster.io</a>
                    &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
              </div>
                  <div>
                    Online multiplayer version of the word game Boggle. Supports multiple users,
                lobbies, chat, score history and profiles. Broken up in a number of smaller projects
              </div>
                </div>
                <ul >
                  <li>

                    <div>
                      <b>Gameserver</b>
                      &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
                </div>
                    <div>
                      .NET Core 2.0, C#, Docker, SQLite
                    Running multi-threaded WebSocket backend.Accounts and game history stored in a SQlite database.
                    Dockerized for scaleability. Deployable to Linux, Windows or MacOSX
                  </div>
                  </li>
                  <li>
                    <div>
                      <b>Web Client</b>
                      &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
              </div>
                    <div>
                      <div>
                        TypeScript/Javascript, React, WebPack, HTML 5 - Touch enabled, JS front-end.
                Connects to gameserver with WebSockets. Includes user profiles and player history.
              </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <b>Solver Micro-service</b>
                      &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
              </div>
                    <div>
                      <div>
                        TypeScript, Node.js, Express.js, JSON - Microservice that efficently
                solves a board of any given size using a trie and depth-first traversal of the gameboard.
                Returns results in JSON (<a href="null">link</a>) (<a href="null">source</a>)
              </div>
                    </div>
                  </li>

                  <li>
                    <div>
                      <b>Desktop Client</b>
                      &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
              </div>
                    <div>
                      .NET 4.0, C#, WebSockets
                Windows client that connects to the game server and allows communication
                 with the gameserver and webclient
                 (<a href="null">source</a>) (<a href="null">binaries</a>)
              </div>
                  </li>
                </ul >
              </div>


              <p />
              <div>
                <div>
                  <b>Bittorrent Client</b>
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
                  <b>2048</b>
                  &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>,<a href="img/ws1.png">3</a>]
              </div>
                <div>
                  C#, Windows - .NET version of the 2048 tile game
                (<a href="null">source</a>) (<a href="null">binaries</a>)
              </div>
              </div>
              <p />
              <div>
                <div>
                  <b>XMMS MP3 Player Clone</b>
                  &nbsp;[<a href="img/ws1.png">1</a>,<a href="img/ws1.png">2</a>]
              </div>
                <div>
                  Mono, C# - XMMS clone mp3 player written for Mono for Linux. (Requires
        Mono, GTK, GTK# and LibGStreamer#)
        (<a href="null">source</a>) (<a href="null">binaries</a>)
              </div>
              </div>
              <p />
              <div>
                <div>
                  <b>Touch Keyboard</b>
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
                  <b>Loose Quad-Tree</b>
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
                  <b>Bus Tracker</b>
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
