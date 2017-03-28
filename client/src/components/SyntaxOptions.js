import React from 'react'
import OptionsGroup from './OptionsGroup.js'
import options from './constants/syntaxOptionsConstants.js'

const SyntaxOptions = (props) => (
    <div>
        {options.map((o, i) => (
            <OptionsGroup
                data={o}
                key={i}
                handleOptionClick={props.handleOptionClick}
                activeOptions={props.activeSyntaxOptions}
            />
        ))}
    </div>
)

export default SyntaxOptions
