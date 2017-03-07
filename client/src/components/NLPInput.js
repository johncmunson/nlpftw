import React from 'react'

const NLPInput = (props) => {
    let input
    return (
        <textarea
            ref={node => input = node}
            onChange={() => props.handleContentChange(input.value)}
            type="text"
        >
        </textarea>
    )
}

export default NLPInput
