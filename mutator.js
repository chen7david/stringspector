module.exports = (object) => {
    const {state, string} = object
    if(state.episode){
        let [epId, s, e] = state.episode
        const name = string.split(epId)
        state.episode = {
            s: s && epId.includes('s') ? parseInt(s,10): null,
            e: e && epId.includes('e') ? parseInt(e,10): null,
            epId,
            name: name[1].replace(/^\s+|\s+$/g, '')   
        }
        state.show = name[0].replace(/^\s+|\s+$/g, '')
    }

    if(state.year){
        let [year] = state.year
        state.year = year
        state.movie = string.split(year)[0].replace(/^\s+|\s+$/g, '')
    }

    if(state.id){
        let [id] = state.id
        state.id = id.replace('ff', '')
    }

    state.query = object.string

    return state
}