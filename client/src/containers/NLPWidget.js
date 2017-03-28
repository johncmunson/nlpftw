import React from 'react'
import { connect } from 'react-redux'
import SyntaxTable from '../components/SyntaxTable.js'
import PragmaticTable from '../components/PragmaticTable.js'
import ParaphraseTable from '../components/ParaphraseTable.js'
import NLPInput from '../components/NLPInput.js'
import Tabs from '../components/Tabs.js'
import analyzeContent from '../actions/analyzeContent.js'
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
                {this.props.requestingAnalysis ? 'requesting analysis...' : null}
                {this.props.activeTabId === '2fd4g8' ? <SyntaxTable {...this.props} /> : null}
                {this.props.activeTabId === 'ds89wl' ? <PragmaticTable {...this.props} /> : null}
                {this.props.activeTabId === 'iw984u' ? <ParaphraseTable {...this.props} /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        analysis: state.analysis,
        tabs: state.tabs,
        activeTabId: state.activeTabId,
        requestingAnalysis: state.requestingAnalysis,
        activeSyntaxOptions: state.activeSyntaxOptions,
        activePragmaticOptions: state.activePragmaticOptions,
        activeParaphraseOptions: state.activeParaphraseOptions
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        handleButtonClick: (content) => {
            dispatch(analyzeContent(content))
        },
        handleTabClick: (id) => {
            dispatch(updateActiveTabId(id))
        }
    }
)

NLPWidget = connect(mapStateToProps, mapDispatchToProps)(NLPWidget)

export default NLPWidget
