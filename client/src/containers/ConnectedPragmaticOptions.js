import { connect } from 'react-redux'
import PragmaticOptions from '../components/PragmaticOptions.js'
import updateActivePragmaticOptions from '../actions/updateActivePragmaticOptions.js'

const mapStateToProps = (state) => (
    {
        activePragmaticOptions: state.activePragmaticOptions
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        handleOptionClick: (id) => {
            dispatch(updateActivePragmaticOptions(id))
        }
    }
)

const ConnectedPragmaticOptions = connect(mapStateToProps, mapDispatchToProps)(PragmaticOptions)

export default ConnectedPragmaticOptions
