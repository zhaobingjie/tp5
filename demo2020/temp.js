/**
 * 说明：按理来说b时属于a中的一个局部变量，是会在调用a时创建，调用完销毁的变量，
 * 但a中有一个闭包也就是其中的匿名函数调用了b，所以内存回收认为b是被引用的，因此在回收的时候不会释放它。
 * 所以b一直存在内存中，而外部却不能调用这个变量，这同时就产生了内存泄漏
 */
// function a(){
//     var b = 1;
//     //闭包
//     (function(){
//         b++;
//     })();
//     console.log(b);
// }
// a();  

/**
 * 闭包函数的应用 : 计数器
 * 表达式声明函数 , 变量 add 指向一个匿名函数 , 且这个匿名函数是通过自执行函数返回的, 自执行函数运行了一次创建了变量 counter ,
 * 匿名函数引用了 counter 变量,导致自执行函数运行结束后其内部创建的局部变量 counter 没有被释放 , counter变量变成了匿名函数的私有变量
 */
// var add = (function () {
//     var counter = 0;
//     return function (name) {
//         console.log(name); 
//         return counter += 1;
//     }
// })();
// console.log(add);
// console.log(add('jack'));
// console.log(add());


/** 
 * 原型对象 : prototype
 * JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，
 * 直到找到一个名字匹配的属性或到达原型链的末尾。Date 对象, Array 对象, 以及 Person 对象从 Object.prototype 继承。
 * 参考 : https://blog.csdn.net/cc18868876837/article/details/81211729
 */
//对象构造器
function Person(name, age) {
    this.name = name;
    this.age = age;
    //对象方法
    this.say = () => 'name : ' + this.name + ' , age :' + this.age;
}
//类方法
Person.runIntro =  function(){ return 'name : ' + this.name + ' , age :' + this.age; } //构造器外添加的方法(类方法)无法被实例继承使用 会报错
//原型方法
Person.prototype.intro = function () { return 'name : ' + this.name + ' , age :' + this.age; }
let person = new Person('jack', 18);
// console.log(person.say());
// console.log(person.intro());
// console.log(person.runIntro());//报错
/**
 * 总结 : 
 *      1.构造器外添加的方法(类方法)无法被实例继承使用 会报错
 *      2.构造器外可以通过prototype属性给对象添加方法或者属性
 * 应用 : 子类重写父类的属性或方法：
 */
function AClass() {
    this.version1 = 1;
    this.func1 = function () {
        console.log(1);
    }
}
function AClass2() {
    this.version2 = 2;
    this.func2 = function () {
        console.log(2);
    }
}
AClass2.prototype = new AClass();
AClass2.prototype.version1 = 3;
AClass2.prototype.func1 = function () {
    console.log(4);
}
var obj = new AClass2();
console.log(obj.version1)
obj.func1();

