import axios from 'axios'
import requestingGoogle from './requestingGoogle.js'
import receiveGoogle from './receiveGoogle.js'
import googleError from './googleError.js'
import requestingGrams from './requestingGrams.js'
import receiveGrams from './receiveGrams.js'
import gramsError from './gramsError.js'

function fetchGoogle(dispatch, content) {
    return axios({
        method: 'post',
        url: `/api/analyze`,
        data: {content}
    })
    .then(analysis => dispatch(receiveGoogle(analysis)))
    .catch(err => dispatch(googleError(err)))
}

// function fetchNamedEntities(content) {
//     return axios({
//         method: 'get',
//         url: `http://www.langbench.com:8080/Apache/1.7.2/NounDetect?action=locate&text=${content}`,
//     })
// }

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

function fetchGrams(dispatch, content) {
    return axios.all([
        fetch2Grams(content),
        fetch3Grams(content),
        fetch4Grams(content),
        fetch5Grams(content)
    ])
        .then(axios.spread(function(twoGrams, threeGrams, fourGrams, fiveGrams) {
            dispatch(receiveGrams({twoGrams, threeGrams, fourGrams, fiveGrams}))
        }))
        .catch(err => dispatch(gramsError(err)))
}

export default function analyzeContent(content) {
    return function(dispatch) {
        dispatch(requestingGoogle())
        dispatch(requestingGrams())
        fetchGoogle(dispatch, content)
        fetchGrams(dispatch, content)
    }
}
