import { connect } from 'react-redux'
import GramOptions from '../components/GramOptions.js'
import updateActiveGramOptions from '../actions/updateActiveGramOptions.js'

const mapStateToProps = (state) => (
    {
        activeGramOptions: state.activeGramOptions
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        handleOptionClick: (id) => {
            dispatch(updateActiveGramOptions(id))
        }
    }
)

const ConnectedGramOptions = connect(mapStateToProps, mapDispatchToProps)(GramOptions)

export default ConnectedGramOptions
