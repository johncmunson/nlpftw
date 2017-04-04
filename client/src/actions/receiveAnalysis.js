export default function receiveAnalysis(google, namedEntities, genders, grams) {
    return {
        type: 'RECEIVE_ANALYSIS',
        google,
        namedEntities,
        genders,
        grams
    }
}
