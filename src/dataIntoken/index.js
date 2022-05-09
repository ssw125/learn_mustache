export class dataIntoken{
    parseData(token,data){
        token.forEach((item)=>{
            if(item[0]==='name'){
                item[0] = 'text'
                if(item[1]==='.'){  //.说明item[1]是数组
                    item[1] = data
                }else{
                    item[1] = data[item[1]]
                }
            }else if(item[0]==='#'){
                const dataobj = data[item[1]]
                const res = []
                for(let i in dataobj){
                    const arr = JSON.parse(JSON.stringify(item[2])) //深拷贝
                    res.push(this.parseData(arr,dataobj[i])) //[['text','<li>'],['name',"."],['text','</li>']] []
                }
                item[2] = res
            }
        })
        return token
    }    
}
/** 
"['text', '<ul>']
 ['#', 'arr', [
     "#",
    "arr",
    [
        ['text', '<li><ol>'],
        ['#', 'hobbys', Array(3)],
        ['text', '<li><ol>'],
    ]
 ]]
 ['text', '</ul>']"
 */