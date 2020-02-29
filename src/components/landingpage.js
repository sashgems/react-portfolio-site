import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                     <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg"
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