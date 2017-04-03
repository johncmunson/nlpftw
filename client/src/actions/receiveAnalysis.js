export default function receiveAnalysis(google, namedEntities, genders) {
    return {
        type: 'RECEIVE_ANALYSIS',
        google,
        namedEntities,
        genders
    }
}
