import React from 'react'
import { connect } from 'react-redux'
import NLPTable from '../components/NLPTable.js'
import NLPInput from '../components/NLPInput.js'
import updateTerms from '../actions/updateTerms.js'

class NLPWidget extends React.Component {
    render() {
        return (
            <div>
                <NLPInput {...this.props} />
                <NLPTable {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        terms: state.terms
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        handleContentChange: (content) => {
            dispatch(updateTerms(content))
        }
    }
)

NLPWidget = connect(mapStateToProps, mapDispatchToProps)(NLPWidget)

export default NLPWidget
