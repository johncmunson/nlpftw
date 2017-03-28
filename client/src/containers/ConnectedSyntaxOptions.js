import { connect } from 'react-redux'
import SyntaxOptions from '../components/SyntaxOptions.js'
import updateActiveSyntaxOptions from '../actions/updateActiveSyntaxOptions.js'

const mapStateToProps = (state) => (
    {
        activeSyntaxOptions: state.activeSyntaxOptions
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        handleOptionClick: (id) => {
            dispatch(updateActiveSyntaxOptions(id))
        }
    }
)

const ConnectedSyntaxOptions = connect(mapStateToProps, mapDispatchToProps)(SyntaxOptions)

export default ConnectedSyntaxOptions
