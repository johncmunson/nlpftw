import React from 'react'
import { connect } from 'react-redux'
// import SyntaxTable from '../components/SyntaxTable.js'
// import GramTable from '../components/GramTable.js'
// import PragmaticTable from '../components/PragmaticTable.js'
// import ParaphraseTable from '../components/ParaphraseTable.js'
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

            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        google: state.google,
        grams: state.grams,
        tabs: state.tabs,
        activeTabId: state.activeTabId,
        requestingGoogle: state.requestingGoogle,
        requestingGrams: state.requestingGrams,
        activeSyntaxOptions: state.activeSyntaxOptions,
        activeGramOptions: state.activeGramOptions,
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
