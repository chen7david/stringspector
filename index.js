class Inspector {

    constructor(original){
        this.original = original
        this.string = new String(original)
        this.metadata = {}
    }

    static inspect(original){
        return new Inspector(original)
    }

    done(){
        this.metadata.string = this.string
        return this.metadata
    }

    filter(junk = []){
        let remove_str = [], remove_arr = []
        Object.values(this.metadata).concat(junk).forEach(o => {
            Array.isArray(o) ? remove_arr.push(o) : remove_str.push(o)
        })
        
        remove_arr.map(o => o[0]).map(o => this.string = this.string.replace(o,''))        
        
        this.string = this.string.match(/[\w'-]+/g, '').filter(w => !remove_str.includes(w)).join(' ')
        return this
    }

    lowercase(){
        this.string = this.string.toLowerCase()
        return this
    }

    whitespace(){
        this.string = this.string.replace(/^\s+|\s+$|\s+(?=\s)/g, '')
        return this
    }

    match(key, regexes = []){
        for(let regex of regexes){
            const match = this.string.match(regex)
            if(match) this.metadata[key] = match
        }
        return this
    } 

    specialchar(){
        this.string = this.string.match(/[\w'-]+/g, '').join(' ')
        return this
    }

    resolution(){
        const resolution = this.string.match(/\b\d{4}p\b/)
        if(resolution) this.metadata.resolution = resolution[0]
        return this
    }

    year(){
        const year = this.string.match(/\b(19|20)\d{2}\b/)
        if(year) {
            this.metadata.year = year[0]
            this.metadata.moviename = this.string.split(year[0])[0].trim()
        }
        return this
    }

    movie(){
        this.year()
        return this
    }

    episode(){

        this.match('episode', [
            /s(\d+)/i,
            /e(\d+)/i,
            /season\s*(\d{1,4})/i,
            /episode\s*(\d{1,4})/i,
            /(\d{1,4})x(\d{1,4})/i,
            /season\s*(\d{1,4})\s*episode\s*(\d{1,4})/i,
            /\bs(\d+).*e(\d+)\b/i,
        ])

        if(this.metadata.episode){
            const [episode_id, season, episode] = this.metadata.episode
            Object.assign(this.metadata, {episode_id, season, episode})
        }
        this.showname()
        this.episodename()
        return this
    }

    showname(){
        if(this.metadata.episode_id){
            this.metadata.showname = this.string.split(this.metadata.episode_id)[0].trim()
        }
        return this
    }

    episodename(){
        if(this.metadata.episode_id){
            this.metadata.episodename = this.string.split(this.metadata.episode_id)[1].trim()
        }
        return this
    }

}

module.exports = Inspector