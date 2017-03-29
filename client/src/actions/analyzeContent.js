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

function fetchNamedEntities(content) {
    return axios({
        method: 'get',
        url: `http://www.langbench.com:8080/Apache/1.7.2/NounDetect?action=locate&text=${content}`,
    })
}

export default function analyzeContent(content) {
    return function(dispatch) {
        dispatch(requestingAnalysis())
        // Make requests concurrently
        axios.all([
            fetchGoogleAnalysis(content),
            fetchNamedEntities(content)
        ])
            // All requests are now complete
            .then(axios.spread(function(google, namedEntities) {
                dispatch(receiveAnalysis(google, namedEntities))
            }))
            .catch(err => dispatch(analysisError(err)))
    }
}
