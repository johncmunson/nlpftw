import React from 'react'
import OptionsGroup from './OptionsGroup.js'
import options from './constants/paraphraseOptionsConstants.js'

const ParaphraseOptions = (props) => (
    <div>
        {options.map((o, i) => (
            <OptionsGroup
                data={o}
                key={i}
                handleOptionClick={props.handleOptionClick}
                activeOptions={props.activeParaphraseOptions}
            />
        ))}
    </div>
)

export default ParaphraseOptions
