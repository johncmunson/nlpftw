const options = [
    {
        category: 'Clausal Paraphrase',
        options: [
            {
                name: 'Independent Clause --> New Sentence',
                id: '1',
                disabled: true
            }, {
                name: 'New Sentence --> Independent Clause',
                id: '2',
                disabled: true
            }, {
                name: 'Possessive --> "has a"',
                id: '3',
                disabled: true
            }, {
                name: '"has a" --> Possessive',
                id: '4',
                disabled: true
            }
        ]
    }, {
        category: 'Syntactic Paraphrase',
        options: [
            {
                name: 'to Pronoun',
                id: '5',
                disabled: true
            }, {
                name: 'to Active Voice',
                id: '6',
                disabled: true
            }, {
                name: 'to Passive Voice',
                id: '7',
                disabled: true
            }, {
                name: 'to Contraction',
                id: '8',
                disabled: true
            }, {
                name: 'from Contraction',
                id: '9',
                disabled: true
            }, {
                name: 'to Gerund Chunk',
                id: '10',
                disabled: true
            }, {
                name: 'from Gerund Chunk',
                id: '11',
                disabled: true
            }, {
                name: 'to Cleft',
                id: '12',
                disabled: true
            }, {
                name: 'from Cleft',
                id: '13',
                disabled: true
            }, {
                name: 'ADV --> ADVCL',
                id: '14',
                disabled: true
            }, {
                name: 'ADVCL --> ADV',
                id: '15',
                disabled: true
            }
        ]
    }, {
        category: 'Semantic Paraphrase',
        options: [
            {
                name: 'Swap Synonym',
                id: '16',
                disabled: true
            }, {
                name: '"not" Antonym',
                id: '17',
                disabled: true
            }, {
                name: 'to Hyponym',
                id: '18',
                disabled: true
            }, {
                name: 'to Meronym',
                id: '19',
                disabled: true
            }, {
                name: 'Reduce Compound Modifier',
                id: '20',
                disabled: true
            }
        ]
    }
]

export default options
