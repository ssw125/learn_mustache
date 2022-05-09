export class token2HTMLstr{
    toHTMLstr(token){//将token转换成str
        let res = ''
        token.forEach(item=>{
            console.log(item)
            if(item[0]=='text'){
                res+=item[1]
            }else if(item[0]=='#'){
                item[2].forEach(i=>{
                    res+=this.toHTMLstr(i)
                })
            }
        })
        return res
    }
}