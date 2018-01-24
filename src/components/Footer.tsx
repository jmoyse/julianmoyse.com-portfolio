import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import './Footer.css';

const style = {

};

export interface FooterProps {

}
export interface FooterState {

}

type ClassNames = keyof typeof style;

class FooterComponent extends React.Component<FooterProps & WithStyles<ClassNames>, FooterState> {
    constructor (props: FooterProps & WithStyles<ClassNames>) {
        super(props);

    }

    render () {
        return (
            <div id="FooterBody">
                < div className="footer" >
                    © 2018 Julian Moyse
                </div >
            </div>
        );
    }
}

const Footer = withStyles(style)<FooterProps>(FooterComponent);
export default Footer;