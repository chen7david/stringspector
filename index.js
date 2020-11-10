const regex = require('./regex')

class StringSpector {

    constructor(string){
        this.original = new String(string)
        this.string = this.original.toLowerCase()
        this.mutator = null
        this.state = {}
        this.junk = []
        this.regex = regex
    }

    inspect(string){
        if(this.state) return {}
        const self = new Inspector(string) 
        for(let key in this.regex)
            for(let regex of this.regex[key]){
                let match = this.string.match(regex)
                if(match) this.state[key] = match
            }

        if(this.state.episode){
            let [epId, s, e] = this.state.episode
            this.state.episode = {
                s: parseInt(s,10),
                e: parseInt(e,10),
                epId
            }
        } 

        if(this.state.year){
            let [year] = this.state.year
            this.state.year = year
        }

        if(this.mutator) Object.assign(this.state, this.mutator(this.state))
    }

    clean(){
        return this.string
            .replace(/:/g,' -')
            .replace(/\//g,' ')
            .replace(/\s\s+/g, ' ')
    }

    static load(string){
        return new Inspector(string)
    }
}

module.exports = StringSpector