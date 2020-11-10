module.exports = {
    episode: [
        /(\d{1,4})x(\d{1,4})/,
        /season\s*(\d{1,4})\s*episode\s*(\d{1,4})/,
        /\bs(\d+).*e(\d+)\b/,
    ],
    year: [
        /\b(19|20)\d{2}\b/,
    ],
    id: [
        /ff\d*/,
    ],
}