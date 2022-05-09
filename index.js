import { dataIntoken } from './src/dataIntoken/index.js'
import {Template2token} from './src/template2token/index.js'
import { token2HTMLstr } from './src/token2HTMLstr/index.js'
const str = `<ul>
                {{#arr}}
                    <li>
                        <ol>
                            {{#hobbys}}
                                <li>
                                    {{.}}
                                </li>
                            {{/hobbys}}
                        </ol>
                    </li>
                {{/arr}}
            </ul>`
const data = {arr:[{name:'ssw0',hobbys:["a","b","c"]},{name:'ssw1',hobbys:["d","e","f"]},{name:'ssw2',hobbys:["g","h","i"]}]}
const Totoken = new Template2token() //模板字符转换成token
const datainToken = new dataIntoken() //注入变量值，并将循环进行遍历
const ToHTML = new token2HTMLstr() //将token转换成模板字符串
const tokens = datainToken.parseData(Totoken.temp2token(str),data)
document.querySelector('#container').innerHTML = ToHTML.toHTMLstr(tokens)