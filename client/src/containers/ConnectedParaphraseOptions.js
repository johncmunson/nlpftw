import { connect } from 'react-redux'
import ParaphraseOptions from '../components/ParaphraseOptions.js'
import updateParaphraseOptions from '../actions/updateParaphraseOptions.js'

const mapStateToProps = (state) => (
    {
        activeParaphraseOptions: state.activeParaphraseOptions
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        handleOptionClick: (id) => {
            dispatch(updateParaphraseOptions(id))
        }
    }
)

const ConnectedParaphraseOptions = connect(mapStateToProps, mapDispatchToProps)(ParaphraseOptions)

export default ConnectedParaphraseOptions
