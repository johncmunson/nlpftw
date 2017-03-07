import { connect } from 'react-redux'
import SyntaxOptions from '../components/SyntaxOptions.js'
import updateSyntaxOptions from '../actions/updateSyntaxOptions.js'

const mapStateToProps = (state) => (
    {
        activeSyntaxOptions: state.activeSyntaxOptions
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        handleOptionClick: (id) => {
            dispatch(updateSyntaxOptions(id))
        }
    }
)

const ConnectedSyntaxOptions = connect(mapStateToProps, mapDispatchToProps)(SyntaxOptions)

export default ConnectedSyntaxOptions
