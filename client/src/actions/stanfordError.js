export default function stanfordError(error) {
    return {
        type: "STANFORD_ERROR",
        error
    }
}
