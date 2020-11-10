module.exports = ({state, string}) => {

    if(state.episode){
        let [epId, s, e] = state.episode
        const name = string.split(epId)
        state.episode = {
            s: parseInt(s,10),
            e: parseInt(e,10),
            epId,
            name: name[1].replace(/^\s+|\s+$/g, '')   
        }
        state.show = {
            name: name[0].replace(/^\s+|\s+$/g, '')
        }
    }

    if(state.year){
        let [year] = state.year
        state.year = year
        state.movie = {
            name: string.split(year)[0].replace(/^\s+|\s+$/g, '')
        }
    }

    return state
}