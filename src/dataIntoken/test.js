import { dataIntoken } from './index.js'
import {Template2token} from '../template2token/index.js'
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
// const str2 = `<ul>{{#arr}}<li>{{.}}</li>{{/arr}}</ul>`
const str1 = `<div>{{item}}</div>`
const data = {arr:[{name:'ssw0',hobbys:["a","b","c"]},{name:'ssw1',hobbys:["d","e","f"]},{name:'ssw2',hobbys:["g","h","i"]}]}
const data2 = {arr:["a","b","c"]}
const Totoken = new Template2token()
const datainToken = new dataIntoken()
console.log(JSON.stringify(datainToken.parseData(Totoken.temp2token(str),data)))