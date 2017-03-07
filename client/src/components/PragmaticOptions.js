import React from 'react'
import OptionsGroup from './OptionsGroup.js'

const data = [
    {
        category: 'Pragmatic Models',
        options: ['P-Pronoun', 'P-Determiner']
    }
]

const PragmaticOptions = (props) => (
    <div>
        {data.map((d, i) => (
            <OptionsGroup data={d} key={i} />
        ))}
    </div>
)

export default PragmaticOptions
