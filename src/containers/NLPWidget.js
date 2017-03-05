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
                <Tabs
                    tabs={this.props.tabs}
                    activeTabId={this.props.activeTabId}
                    handleTabClick={this.props.handleTabClick}
                />
                <NLPInput {...this.props} />
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
        handleContentChange: (content) => {
            dispatch(updateTerms(content))
        },
        handleTabClick: (id) => {
            dispatch(updateActiveTabId(id))
        }
    }
)

NLPWidget = connect(mapStateToProps, mapDispatchToProps)(NLPWidget)

export default NLPWidget
