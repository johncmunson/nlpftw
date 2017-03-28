export default function receiveAnalysis(google, github) {
    return {
        type: 'RECEIVE_ANALYSIS',
        google,
        github
    }
}
