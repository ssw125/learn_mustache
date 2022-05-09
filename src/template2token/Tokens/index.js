export class Tokens{
    constructor(data){
        this.token = [],
        this.data2token = data 
    }
    tag2token(str){
        this.token.push(['text',str])
    }
    var2token(val){
        if(val !== ''){
            if(isNaN(+val)){
                this.token.push(["name",val])
            }else{
                this.token.push(["text",val])
            }
        }
    }
}