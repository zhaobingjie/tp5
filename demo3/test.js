/**
 * js 数据类型
 * 基本型:number,boolean,string,null,undefined
 * 复杂型:array,function,object
 */
/**
 * js 赋值/引用
 * 常见: 
 *      引用:array,object
 *      赋值:number,boolean,string,function
 */
var f1 = function(){
    console.log(1);
}
var f2 = f1;
f1();//1
f2();//1
f1 = function(){
    console.log(2);
}
f1();//2
f2();//1
console.log(typeof f1);//function
console.log(typeof f2);//fucntion

var a = [1,2,3];
var b = a;
a[0] = 5;
console.log(a,b);//[ 5, 2, 3 ] [ 5, 2, 3 ]
console.log(typeof a);//object
console.log(typeof b);//object

var obj1 = {name:'jack',age:18};
var obj2 = obj1;
var str3 = obj1.name;
obj1.name = 'bjzhao';
console.log(obj1,obj2,str3);//{ name: 'bjzhao', age: 18 } { name: 'bjzhao', age: 18 } 'jack'