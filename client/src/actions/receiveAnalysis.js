export default function receiveAnalysis(google, namedEntities, grams) {
    return {
        type: 'RECEIVE_ANALYSIS',
        google,
        namedEntities,
        // genders,
        grams
    }
}
