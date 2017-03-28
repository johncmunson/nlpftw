const options = [
    {
        category: 'Clausal Paraphrase',
        options: [
            {
                name: 'Independent Clause --> New Sentence',
                id: '1'
            }, {
                name: 'New Sentence --> Independent Clause',
                id: '2'
            }, {
                name: 'Possessive --> "has a"',
                id: '3'
            }, {
                name: '"has a" --> Possessive',
                id: '4'
            }
        ]
    }, {
        category: 'Syntactic Paraphrase',
        options: [
            {
                name: 'to Pronoun',
                id: '5'
            }, {
                name: 'to Active Voice',
                id: '6'
            }, {
                name: 'to Passive Voice',
                id: '7'
            }, {
                name: 'to Contraction',
                id: '8'
            }, {
                name: 'from Contraction',
                id: '9'
            }, {
                name: 'to Gerund Chunk',
                id: '10'
            }, {
                name: 'from Gerund Chunk',
                id: '11'
            }, {
                name: 'to Cleft',
                id: '12'
            }, {
                name: 'from Cleft',
                id: '13'
            }, {
                name: 'ADV --> ADVCL',
                id: '14'
            }, {
                name: 'ADVCL --> ADV',
                id: '15'
            }
        ]
    }, {
        category: 'Semantic Paraphrase',
        options: [
            {
                name: 'Swap Synonym',
                id: '16'
            }, {
                name: '"not" Antonym',
                id: '17'
            }, {
                name: 'to Hyponym',
                id: '18'
            }, {
                name: 'to Meronym',
                id: '19'
            }, {
                name: 'Reduce Compound Modifier',
                id: '20'
            }
        ]
    }
]

export default options
