module.exports = (state) => {

    if(state.episode){
        let [epId, s, e] = state.episode
        state.episode = {
            s: parseInt(s,10),
            e: parseInt(e,10),
            epId
        }
    } 

    if(state.year){
        let [year] = state.year
        state.year = year
    }

    return state
}