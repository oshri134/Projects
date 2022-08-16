import React from 'react'
import Slider from 'rc-slider';
import TooltipSlider, { handleRender } from "./Toolki/TooltipSlider"

const slider = ({ bids }) => {

    return (

        <div>
            <Slider
                value={bids}
                range
            />
        </div>
    )
}

export default slider