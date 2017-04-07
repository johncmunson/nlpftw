export default function receiveAnalysis(google, genders, grams) {
    return {
        type: 'RECEIVE_ANALYSIS',
        google,
        // namedEntities,
        genders,
        grams
    }
}
