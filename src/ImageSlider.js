// your ImageSlider code here!
import React, { Component} from 'react';

class ImageSlider extends Component {
    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    // state = {
    //     currentSlideIndex: 0
    // }

    increment = () => {
        const Current_Slide = this.state.currentSlide + 1;
        this.setState({
            Current_Slide
        })
    }
    render() {
        return(
            // <p> {`I am on slide ${Current_Slide}`}</p>
            <div onClick={this.increment}>
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
        
    }
}

export default ImageSlider