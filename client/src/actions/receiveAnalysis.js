export default function receiveAnalysis(google, namedEntities) {
    return {
        type: 'RECEIVE_ANALYSIS',
        google,
        namedEntities
    }
}
