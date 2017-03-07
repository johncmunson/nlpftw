import React from 'react'
import { connect } from 'react-redux'
import NLPTable from '../components/NLPTable.js'
import NLPInput from '../components/NLPInput.js'
import Tabs from '../components/Tabs.js'
import updateTerms from '../actions/updateTerms.js'
import updateActiveTabId from '../actions/updateActiveTabId.js'

class NLPWidget extends React.Component {
    render() {
        return (
            <div>
                <NLPInput {...this.props} />
                <Tabs
                    tabs={this.props.tabs}
                    activeTabId={this.props.activeTabId}
                    handleTabClick={this.props.handleTabClick}
                />
                <NLPTable {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        terms: state.terms,
        tabs: state.tabs,
        activeTabId: state.activeTabId
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        handleTextSubmit: (content) => {
            dispatch(updateTerms(content))
        },
        handleTabClick: (id) => {
            dispatch(updateActiveTabId(id))
        }
    }
)

NLPWidget = connect(mapStateToProps, mapDispatchToProps)(NLPWidget)

export default NLPWidget
