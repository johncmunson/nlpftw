import axios from 'axios'
import requestingAnalysis from './requestingAnalysis.js'
import receiveAnalysis from './receiveAnalysis.js'
import analysisError from './analysisError.js'

export default function analyzeContent(content) {
    return function(dispatch) {
        dispatch(requestingAnalysis())
        return axios({
            method: 'post',
            url: `/api/analyze`,
            data: {content}
        })
            .then(response => {
                dispatch(receiveAnalysis(response))
            })
            .catch(err => dispatch(analysisError(err)))
    }
}
