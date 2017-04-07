import React from 'react'
import styled from 'styled-components'

const Td = styled.td`
    max-width: 120px;
    min-width: 120px;
`

const Spacer = styled.tr`
    height: 20px;
`

const renderRow = {
    // 2-Gram
    42: function(analysis) {
        return (
            <div>
                <tr>
                    <Td><b>2-Gram</b></Td>
                    {analysis.grams.twoGrams.data.results.map((g, i) => (
                        <Td key={i}>
                            {g.tokens.map((t, i) => (
                                i + 1 === g.tokens.length || g.tokens[i + 1].search(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/) > -1 ? t : t + ' '
                            ))}
                        </Td>
                    ))}
                </tr>
                <tr>
                    <Td>Likelihood</Td>
                    {analysis.grams.twoGrams.data.results.map((g, i) => <Td key={i}>{g.percentage === '-1' ? '-' : Math.floor(Number(g.percentage) * 1000000) + '%'}</Td>)}
                </tr>
            </div>
        )
    },
    // 3-Gram
    43: function(analysis) {
        return (
            <div>
                <Spacer />
                <tr>
                    <Td><b>3-Gram</b></Td>
                    {analysis.grams.threeGrams.data.results.map((g, i) => (
                        <Td key={i}>
                            {g.tokens.map((t, i) => (
                                i + 1 === g.tokens.length || g.tokens[i + 1].search(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/) > -1 ? t : t + ' '
                            ))}
                        </Td>
                    ))}
                    <Td></Td>
                </tr>
                <tr>
                    <Td>Likelihood</Td>
                    {analysis.grams.threeGrams.data.results.map((g, i) => <Td key={i}>{g.percentage === '-1' ? '-' : Math.floor(Number(g.percentage) * 1000000) + '%'}</Td>)}
                    <Td></Td>
                </tr>
            </div>
        )
    },
    // 4-Gram
    44: function(analysis) {
        return (
            <div>
                <Spacer />
                <tr>
                    <Td><b>4-Gram</b></Td>
                    {analysis.grams.fourGrams.data.results.map((g, i) => (
                        <Td key={i}>
                            {g.tokens.map((t, i) => (
                                i + 1 === g.tokens.length || g.tokens[i + 1].search(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/) > -1 ? t : t + ' '
                            ))}
                        </Td>
                    ))}
                    <Td></Td>
                    <Td></Td>
                </tr>
                <tr>
                    <Td>Likelihood</Td>
                    {analysis.grams.fourGrams.data.results.map((g, i) => <Td key={i}>{g.percentage === '-1' ? '-' : Math.floor(Number(g.percentage) * 1000000) + '%'}</Td>)}
                    <Td></Td>
                    <Td></Td>
                </tr>
            </div>
        )
    },
    // 5-Gram
    45: function(analysis) {
        return (
            <div>
                <Spacer />
                <tr>
                    <Td><b>5-Gram</b></Td>
                    {analysis.grams.fiveGrams.data.results.map((g, i) => (
                        <Td key={i}>
                            {g.tokens.map((t, i) => (
                                i + 1 === g.tokens.length || g.tokens[i + 1].search(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/) > -1 ? t : t + ' '
                            ))}
                        </Td>
                    ))}
                    <Td></Td>
                    <Td></Td>
                    {analysis.grams.twoGrams.data.results.length === 2 ? null : <Td></Td>}
                </tr>
                <tr>
                    <Td>Likelihood</Td>
                    {analysis.grams.fiveGrams.data.results.map((g, i) => <Td key={i}>{g.percentage === '-1' ? '-' : Math.floor(Number(g.percentage) * 1000000) + '%'}</Td>)}
                    <Td></Td>
                    <Td></Td>
                    {analysis.grams.twoGrams.data.results.length === 2 ? null : <Td></Td>}
                </tr>
            </div>
        )
    }
}

const GramTable = (props) => (
    <table>
        <tbody>
            {props.analysis.google ? (
                props.activeGramOptions.map(id => {
                    return renderRow[id](props.analysis)
                })
            ) : (
                null
            )}
        </tbody>
    </table>
)

export default GramTable
