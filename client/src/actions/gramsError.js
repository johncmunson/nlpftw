export default function gramsError(error) {
    return {
        type: "GRAMS_ERROR",
        error
    }
}
