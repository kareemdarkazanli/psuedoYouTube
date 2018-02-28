import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import MainVideoContainer from '../../components/MainVideoContainer/MainVideoContainer';
import './MainVideo.css';


class MainVideo extends Component {
    
    
    state = {
        playing: true
    }
    
    
    render() {
        
        return(
            <div className="test row">
                <MainVideoContainer/>
            </div>
        );
        
        
    }
}

export default MainVideo;