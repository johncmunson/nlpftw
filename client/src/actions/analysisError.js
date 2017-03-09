export default function analysisError(error) {
    return {
        type: "ANALYSIS_ERROR",
        error
    }
}
