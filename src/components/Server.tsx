import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';
import './Server.css';

const style = {

};

export interface ServerProps {

}
export interface ServerState {

}

type ClassNames = keyof typeof style;

class ServerComponent extends React.Component<ServerProps & WithStyles<ClassNames>, ServerState> {
    constructor (props: ServerProps & WithStyles<ClassNames>) {
        super(props);

    }

    render () {
        return (
            <div id="ServerBody" className="lowerBody">

                <div className="intro">
                    <div>
                        <div>
                            <Typography type="display2" gutterBottom={true} paragraph={true}>
                                Server
              </Typography>
                        </div>
                        <div className="projectsContainer">
                            <div>
                                Hosted on a Virtual Private Server courtsy of
                                <a href="www.vultr.com">Vultr.com</a>.<br />
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
            </div>
        );
    }
}

const Server = withStyles(style)<ServerProps>(ServerComponent);
export default Server;