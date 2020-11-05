

export default {
    async request(url, method = 'GET', data = null) {
        try{
            const headers = {};
            let body;

            if (data) {
                headers['Content-Type'] = 'application/json';
                body = JSON.stringify(data)
            }
            const response = await fetch(url, {
                method,
                headers,
                body
            });

            return response.json()
        }catch (e) {
            console.warn('Error:', e.message)
        }
    },
    async getNoteTags(id){
        const response = await this.request('/api/notes/getById', 'POST', {id:id});
        if (response.message === 'successfully'){
            const tags = response.note.tags;
            console.log(tags);
            let objTags = [];
            for(let item of tags){
                objTags.push({
                    tag: item
                });
            }
            console.log(objTags);
            return objTags;
        }

    }
}