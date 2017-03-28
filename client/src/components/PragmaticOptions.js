import React from 'react'
import OptionsGroup from './OptionsGroup.js'
import options from './constants/pragmaticOptionsConstants.js'

const PragmaticOptions = (props) => (
    <div>
        {options.map((o, i) => (
            <OptionsGroup
                data={o}
                key={i}
                handleOptionClick={props.handleOptionClick}
                activeOptions={props.activePragmaticOptions}
            />
        ))}
    </div>
)

export default PragmaticOptions
