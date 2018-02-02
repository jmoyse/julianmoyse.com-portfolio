import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import './Section.css';
import Typography from 'material-ui/Typography/Typography';
import Grid from 'material-ui/Grid/Grid';

const style = {

};

export interface SectionProps {
    title?: string;
    background?: string;
    id: string;
}

export interface SectionState {

}

type ClassNames = keyof typeof style;

class SectionComponent extends React.Component<SectionProps & WithStyles<ClassNames>, SectionState> {
    constructor (props: SectionProps & WithStyles<ClassNames>) {
        super(props);
    }

    render () {
        return (
            <div
                id={this.props.id}
                className="lowerBody"
                style={
                    {
                        // background: '#D3D3D3',
                        // background: '-webkit - linear - gradient(to left, #D3D3D3, #BCBCBC, #D3D3D3)',
                        /* Chrome 10-25, Safari 5.1-6 */
                        clipPath: 'polygon(0 0%, 100% 2%, 100% 95%, 0% 100%)',
                        background: this.props.background !== undefined
                            && this.props.background.length > 0 ?
                            this.props.background :
                            '',

                        alignSelf: 'center',
                        alignItems: 'center',
                        // display: 'block',
                        // paddingTop: '50px',
                        paddingBottom: '200px',
                        display: 'inline-block',
                        verticalAlign: 'top',
                        paddingTop: this.props.title !== undefined && this.props.title.length ? '100px' : '0px',

                        width: '100%',
                        justifyContent: 'center'
                    }
                }
            >
                {
                    this.props.title !== undefined &&
                        this.props.title.length > 0 ? (
                            <Grid container={true} alignItems="center" alignContent="center" justify="center">
                                <Typography
                                    type="display2"
                                    align="center"
                                    color="secondary"
                                    style={{ paddingBottom: '30px', display: 'block', fontVariant: 'caps' }}
                                >
                                    {this.props.title}
                                    <div style={{ display: 'block', height: '3px', background: '#11ABB0' }} />
                                </Typography>

                            </Grid>
                        ) : ''
                }
                <div style={{ marginTop: '50px' }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const Section = withStyles(style)<SectionProps>(SectionComponent);
export default Section;