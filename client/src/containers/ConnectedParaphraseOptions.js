import { connect } from 'react-redux'
import ParaphraseOptions from '../components/ParaphraseOptions.js'
import updateActiveParaphraseOptions from '../actions/updateActiveParaphraseOptions.js'

const mapStateToProps = (state) => (
    {
        activeParaphraseOptions: state.activeParaphraseOptions
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        handleOptionClick: (id) => {
            dispatch(updateActiveParaphraseOptions(id))
        }
    }
)

const ConnectedParaphraseOptions = connect(mapStateToProps, mapDispatchToProps)(ParaphraseOptions)

export default ConnectedParaphraseOptions
