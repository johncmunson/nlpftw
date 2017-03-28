import axios from 'axios'
import requestingAnalysis from './requestingAnalysis.js'
import receiveAnalysis from './receiveAnalysis.js'
import analysisError from './analysisError.js'

function fetchGoogleAnalysis(content) {
    return axios({
        method: 'post',
        url: `/api/analyze`,
        data: {content}
    })
}

function fetchGithubAnalysis() {
    return axios({
        method: 'get',
        url: `https://api.github.com/users/codeheaven-io`
    })
}

export default function analyzeContent(content) {
    return function(dispatch) {
        dispatch(requestingAnalysis())
        // Make requests concurrently
        axios.all([
            fetchGoogleAnalysis(content),
            fetchGithubAnalysis()
        ])
            // All requests are now complete
            .then(axios.spread(function(google, github) {
                dispatch(receiveAnalysis(google, github))
            }))
            .catch(err => dispatch(analysisError(err)))
    }
}
