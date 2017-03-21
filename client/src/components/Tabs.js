import React from 'react'
import styled from 'styled-components'

const Tab = styled.span`
    padding: 0.5em;
    border-bottom: ${props => props.active ? 'solid' : 'none'};
`

const Tabs = ({ tabs, activeTabId, handleTabClick }) => (
    <div>
        <div style={{marginBottom: '1.5em'}}>
            {tabs.map(t => (
                <Tab
                    key={t.id}
                    id={t.id}
                    active={t.id === activeTabId}
                    onClick={() => handleTabClick(t.id)}
                >
                    {t.name}
                </Tab>
            ))}
        </div>
        {tabs.map(t => t.id === activeTabId ? <t.component /> : null)}
    </div>
);

export default Tabs
