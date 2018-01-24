import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import { withStyles, WithStyles } from 'material-ui/styles';
import './Server.css';
import Button from 'material-ui/Button/Button';

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
                            <Typography type="display2" paragraph={true} align="center" style={{ paddingBottom: '30px' }}>
                                Server
                    </Typography>
                        </div>
                        <div className="projectsContainer">
                            <Typography type="title" gutterBottom={true}>
                                Hosted on a Virtual Private Server courtsy of
                                <Button href="www.vultr.com">Vultr.com</Button><br />
                                Source hosted on Github and locally. SSL from LetsEncrypt<br />
                                2.0GB memory and 100GB SSD<br />
                            </Typography>


                            {
                                /*
                                <Typography type="title" gutterBottom={true}>
                                    Computer Science, Bachlors
                                                        </Typography>
                                <Typography type="subheading" gutterBottom={true} >
                                    University of Maryland
                                                        </Typography>
                                <Typography type="body2" gutterBottom={true}>
                                    College Park, Maryland
                                                        </Typography>
                                                        */
                            }
                            <div>

                                <Button href="https://coreos.com/releases/">CoreOS</Button>
                                &nbsp;
                            </div>
                            <div>
                                <Button href="https://hub.docker.com/_/nginx/">docker/nginx</Button>
                            </div>
                            <div>
                                <Button href="https://hub.docker.com/r/tvial/docker-mailserver/">docker/mailserver</Button>
                            </div>
                            <div>
                                <Button href="https://hub.docker.com/r/tvial/docker-mailserver/">docker/nodejs</Button>
                            </div>
                            <div>
                                <Button href="https://hub.docker.com/_/node/">docker/nodejs</Button>

                            </div>
                            <div>
                                <Button href="https://github.com/dotnet/dotnet-docker">docker/dotnet</Button>
                            </div>
                            <div>
                                <Button href="https://hub.docker.com/r/linuxserver/letsencrypt/">docker/letsencrypt</Button>
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