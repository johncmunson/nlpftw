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

export default function analyzeContent(content) {
    return function(dispatch) {
        dispatch(requestingAnalysis())
        // Make requests concurrently
        axios.all([
            fetchGoogleAnalysis(content),
            axios.get('https://api.github.com/users/codeheaven-io')
        ])
            // All requests are now complete
            .then(axios.spread(function(googleAnalysis, users) {
              dispatch(receiveAnalysis(googleAnalysis))
              console.log(users)
            }))
            .catch(err => dispatch(analysisError(err)))
    }
}
