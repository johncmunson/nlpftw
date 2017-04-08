export default function googleError(error) {
    return {
        type: "GOOGLE_ERROR",
        error
    }
}
