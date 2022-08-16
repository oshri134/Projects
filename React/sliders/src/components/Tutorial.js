import React, { useState } from "react";

import { ExperimentsManipulation } from './ExperimentsManipulation';

export const Tutorial = (props) => {
    const [index, setIndex] = useState(1);

    if (index === 9) {
        return (<ExperimentsManipulation isPhone={props.isPhone} />)
    }
    return (
        <div onClick={event => setIndex(index+1)}>
            <img style={{ height: "100%", width: "100%" }} src={require(`../pictures/tutorial/${index}.png`)} />
        </div>
    )
}