import React from 'react'

const OptionsGroup = (props) => (
    <div>
        <b>{props.data.category}</b>
        {props.data.options.map((o, i) => (
            <label key={i}>
                <input
                    onChange={() => props.handleOptionClick(o.id)}
                    type='checkbox'
                    checked={props.activeOptions.includes(o.id) === true ? 'checked' : null}
                />
                {o.name}
            </label>
        ))}
    </div>
)

export default OptionsGroup
