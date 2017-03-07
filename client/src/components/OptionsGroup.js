import React from 'react'

const OptionsGroup = (props) => (
    <div>
        <b>{props.data.category}</b>
        {props.data.options.map((o, i) => (
            <label key={i}>
                <input type='checkbox' />
                {o}
            </label>
        ))}
    </div>
)

export default OptionsGroup
