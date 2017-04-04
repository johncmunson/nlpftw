import React from 'react'
import OptionsGroup from './OptionsGroup.js'
import options from './constants/gramOptionsConstants.js'

const GramOptions = (props) => (
    <div>
        {options.map((o, i) => (
            <OptionsGroup
                data={o}
                key={i}
                handleOptionClick={props.handleOptionClick}
                activeOptions={props.activeGramOptions}
            />
        ))}
    </div>
)

export default GramOptions
