function b (name){
    this.name = name;
    getScore('math');
    function getScore(subject){
        console.log(subject+': 99 分');
    }
    this.getSubject = function(){
        console.log('this is subject function');
    }
}
b.prototype.check = function(){
    console.log('jack =>'+this.name);
    return 'jack' == this.name;
}
module.exports = b;