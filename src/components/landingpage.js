import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                     <img
                    src="https://www.pngarts.com/files/3/Cool-Avatar-Transparent-Images.png"
                    alt="avatar"
                    className="avatar-img"
                    />
            <div className= "banner-text">
                <h1> Web Developer</h1>
            </div>
        </Cell>
    </Grid>
</div>

        )
    }
}

export default Landing; 