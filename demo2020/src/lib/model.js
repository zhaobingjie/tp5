var num =0 ;
console.log('require times : ',num);
module.exports = {
    sayHi : name => {
        console.log(`hi ${name}`);
        console.log('require times : ',num);
        num ++;
        return num;
    },
};