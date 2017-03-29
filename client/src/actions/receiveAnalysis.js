export default function receiveAnalysis(google, namedEntities, github) {
    return {
        type: 'RECEIVE_ANALYSIS',
        google,
        namedEntities,
        github
    }
}
