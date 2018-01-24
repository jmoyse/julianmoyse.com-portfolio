import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid/Grid';
import Paper from 'material-ui/Paper/Paper';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import * as FontAwesome from 'react-fontawesome';
import './Contact.css';

import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';

const style = {

};

export interface ContactProps {

}
export interface ContactState {

}

type ClassNames = keyof typeof style;

class ContactComponent extends React.Component<ContactProps & WithStyles<ClassNames>, ContactState> {
    constructor (props: ContactProps & WithStyles<ClassNames>) {
        super(props);
    }

    render () {
        return (
            <div
                id="ContactBody"
                style={
                    {
                        display: 'inline-block',
                        verticalAlign: 'top',
                        alignSelf: 'center',
                        paddingTop: '20px',
                    }}
            >

                <Grid
                    container={true}
                    spacing={8}
                >
                    <Grid item={true} xs={12}>

                        <Grid
                            container={true}
                            alignItems="center"
                            direction="row"
                            justify="center"
                        >

                            <div className="contactBody" >

                                <Paper elevation={15}  >

                                    <Tabs value={0} fullWidth={true}>
                                        <Tab label=" Contact" fullWidth={true} />

                                    </Tabs>

                                    <List >

                                        <ListItem button={true} divider={true}>

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

                                        <ListItem button={true} divider={true} >
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


                                        <ListItem button={true} divider={true} >
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


                                        <ListItem button={true} divider={true} >
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

                                        <ListItem button={true} divider={true} >
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

                                        <ListItem button={true} divider={true} >
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
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const Contact = withStyles(style)<ContactProps>(ContactComponent);
export default Contact;