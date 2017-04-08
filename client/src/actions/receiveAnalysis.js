export default function receiveAnalysis(google, grams) {
    return {
        type: 'RECEIVE_ANALYSIS',
        google,
        // namedEntities,
        // genders,
        grams
    }
}
