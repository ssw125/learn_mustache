import { Scanner } from './Scan/index.js'
import { Tokens } from './Tokens/index.js'
export class Template2token{
    temp2token(str){
        const tokens = new Tokens()
        const scanl = new Scanner(str)
        while(scanl.tail !== '' && scanl.tail.indexOf("{{")!==-1 && scanl.tail.indexOf("}}")!==-1){
            tokens.tag2token(scanl.scan("{{"))
            if(scanl.tail.indexOf('#')===0){ //循环遍历
                const str = scanl.scan("}}").substring(1)
                const res = ['#',str,[]]
                const content = scanl.scan(`{{/${str}}}`)
                res[2] = this.temp2token(content)
                tokens.token.push(res)
            }else{
                tokens.var2token(scanl.scan("}}"))
            }
        }
        tokens.tag2token(scanl.tail)//保存尾部
        return tokens.token
    }
}
