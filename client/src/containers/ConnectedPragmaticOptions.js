import { connect } from 'react-redux'
import PragmaticOptions from '../components/PragmaticOptions.js'
import updatePragmaticOptions from '../actions/updatePragmaticOptions.js'

const mapStateToProps = (state) => (
    {
        activePragmaticOptions: state.activePragmaticOptions
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        handleOptionClick: (id) => {
            dispatch(updatePragmaticOptions(id))
        }
    }
)

const ConnectedPragmaticOptions = connect(mapStateToProps, mapDispatchToProps)(PragmaticOptions)

export default ConnectedPragmaticOptions
