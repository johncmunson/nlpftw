import React from 'react'
import OptionsGroup from './OptionsGroup.js'

const data = [
    {
        category: 'Pragmatic Models',
        options: [{name: 'P-Pronoun', id: '21'}, {name: 'P-Determiner', id: '22'}]
    }
]

const PragmaticOptions = (props) => (
    <div>
        {data.map((d, i) => (
            <OptionsGroup
                data={d}
                key={i}
                handleOptionClick={props.handleOptionClick}
                activeOptions={props.activePragmaticOptions}
            />
        ))}
    </div>
)

export default PragmaticOptions
