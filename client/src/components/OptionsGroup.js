import React from 'react'

const OptionsGroup = (props) => (
    <div>
        <b>{props.data.category}</b>
        {props.data.options.map((o, i) => (
            <label key={i}>
                <input
                    onClick={() => props.handleOptionClick(o.id)}
                    type='checkbox'
                    checked={props.activeOptions[o.id] === true ? 'checked' : null}
                />
                {o.name}
            </label>
        ))}
    </div>
)

export default OptionsGroup
