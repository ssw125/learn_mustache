import {Template2token} from './index'
const toToken = new Template2token()
const str = `<ul>{{#arr}}<li><ol>{{#h}}<li>{{.}}</li>{{/h}}</ol></li>{{/arr}}</ul>`
console.log(toToken.temp2token(str))