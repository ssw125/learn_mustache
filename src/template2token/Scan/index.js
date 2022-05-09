export class Scanner{ //用于扫描字符串
    constructor(templateStr){
      this.tmpStr = templateStr
      this.tail = templateStr //用于记录未扫描的字符串
      this.pos = 0 //指向当前扫描的位置  
    }
    //扫描字符串，当与到目标字符串时停止扫描，返回所扫描过的字符串
    scan(target){
        const begin = this.pos
        while(!this.tail.startsWith(target) && this.tail.indexOf(target)!==-1){ //带扫描字符串的开头不是目标字符串
            this.pos++//指针移动到下一位
            this.tail = this.tmpStr.substring(this.pos) //待检测的字符串移除开头的那一个字符
        }
        if(this.tail.indexOf(target) ==-1){ //结尾不存在target
            this.tail = ''
            return this.tmpStr.substring(begin)
        }
        const pre = this.tmpStr.substring(begin,this.pos)
        this.jump(target) //除去目标
        return pre
    }
    jump(target1){ //跳过{{}}并且取出目标字符串
        if(this.tail.indexOf(target1)===0){
            this.pos+=target1.length
            this.tail = this.tmpStr.substring(this.pos)
        }     
        return this.tail
    }
}


