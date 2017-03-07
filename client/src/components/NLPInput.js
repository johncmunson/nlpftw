import React from 'react'
import styled from 'styled-components'

const Textarea = styled.textarea`
    width: 380px;
    height: 50px;
`

const NLPInput = (props) => {
    let input
    return (
        <div>
            <Textarea
                innerRef={node => input = node}
                type="text"
            >
            </Textarea>
            <button onClick={() => props.handleTextSubmit(input.value)}>Analyze</button>
        </div>
    )
}

export default NLPInput
