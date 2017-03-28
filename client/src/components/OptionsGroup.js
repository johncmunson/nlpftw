import React from 'react'

const OptionsGroup = (props) => (
    <div>
        <b>{props.data.category}</b>
        {props.data.options.map((o, i) => (
            <label
                key={i}
                style={o.disabled ? {color: 'grey'} : {color: 'black'}}
            >
                <input
                    onClick={() => props.handleOptionClick(o.id)}
                    type='checkbox'
                    checked={props.activeOptions.includes(o.id) === true ? 'checked' : null}
                    disabled={o.disabled ? 'disabled' : false}
                />
                {o.name}
            </label>
        ))}
    </div>
)

export default OptionsGroup
