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

// function fetchGenders(content) {
//     return axios({
//         method: 'get',
//         url: `http://www.langbench.com:8080/GenderService/?text=${content}&lang=eng&format=linear`,
//     })
// }

function fetch2Grams(content) {
    return axios({
        method: 'get',
        url: `http://www.langbench.com:8080/LegendaryService/1/TupleService/?text=${content}&N=2`
    })
}

function fetch3Grams(content) {
    return axios({
        method: 'get',
        url: `http://www.langbench.com:8080/LegendaryService/1/TupleService/?text=${content}&N=3`
    })
}

function fetch4Grams(content) {
    return axios({
        method: 'get',
        url: `http://www.langbench.com:8080/LegendaryService/1/TupleService/?text=${content}&N=4`
    })
}

function fetch5Grams(content) {
    return axios({
        method: 'get',
        url: `http://www.langbench.com:8080/LegendaryService/1/TupleService/?text=${content}&N=5`
    })
}

function fetchGrams(content) {
    return axios.all([
        fetch2Grams(content),
        fetch3Grams(content),
        fetch4Grams(content),
        fetch5Grams(content)
    ])
        .then(axios.spread(function(twoGrams, threeGrams, fourGrams, fiveGrams) {
            return {twoGrams, threeGrams, fourGrams, fiveGrams}
        }))
}

export default function analyzeContent(content) {
    return function(dispatch) {
        dispatch(requestingAnalysis())
        // Make requests concurrently
        axios.all([
            fetchGoogleAnalysis(content),
            fetchNamedEntities(content),
            // fetchGenders(content),
            fetchGrams(content)
        ])
            // All requests are now complete
            .then(axios.spread(function(google, namedEntities, grams) {
                dispatch(receiveAnalysis(google, namedEntities, grams))
            }))
            .catch(err => dispatch(analysisError(err)))
    }
}
