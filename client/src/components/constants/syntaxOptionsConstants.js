const options = [
    {
        category: 'Sentence & Clause',
        options: [
            {
                name: 'Snip Sentence',
                id: '23',
                disabled: true
            },
            // {
            //     name: 'Show Tokens',
            //     id: '24',
            //     disabled: true
            // },
            {
                name: 'Part-of-Speech',
                id: '25'
            }, {
                name: 'Verb Tense',
                id: '250'
            }, {
                name: 'Shallow Parse Chunker',
                id: '26',
                disabled: true
            }, {
                name: 'Grammar/Dependency Parse',
                id: '27'
            }, {
                name: 'Propositions',
                id: '28',
                disabled: true
            }, {
                name: 'Plurality',
                id: '280'
            }
        ]
    }, {
        category: 'Word Level',
        options: [
            {
                name: 'Lemma',
                id: '29',
            }, {
                name: 'Stem',
                id: '30',
                disabled: true
            }, {
                name: 'Named Entities',
                id: '31',
            }, {
                name: 'Quantities',
                id: '32',
                disabled: true
            }, {
                name: 'Coreference',
                id: '33',
                disabled: true
            }, {
                name: 'Genders',
                id: '330',
            }
        ]
    }, {
        category: 'Semantic Relations',
        options: [
            {
                name: 'Word Sense',
                id: '34',
                disabled: true
            }, {
                name: 'Hyponyms',
                id: '35',
                disabled: true
            }, {
                name: 'Hypernyms',
                id: '36',
                disabled: true
            }, {
                name: 'Meronyms',
                id: '37',
                disabled: true
            }, {
                name: 'Holonyms',
                id: '38',
                disabled: true
            }, {
                name: 'Synonyms',
                id: '39',
                disabled: true
            }, {
                name: 'Antonyms',
                id: '40',
                disabled: true
            }, {
                name: 'Verb Frames',
                id: '41',
                disabled: true
            }
        ]
    }, {
        category: 'Language Models',
        options: [
            {
                name: '2-Gram',
                id: '42',
            }, {
                name: '3-Gram',
                id: '43',
            }, {
                name: '4-Gram',
                id: '44',
            }, {
                name: '5-Gram',
                id: '45',
                disabled: true
            }, {
                name: 'Hyper2-Gram',
                id: '46',
                disabled: true
            }
        ]
    }
]

export default options
