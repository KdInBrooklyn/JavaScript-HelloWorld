/**
 * Created by LiSen on 2017/6/27.
 */

/**
 * 变量提升
 * JavaScript引擎的工作方式是,先解析代码,获取所有被声明的变量,然后再一行一行地运行.
 * 这造成的结果就是, 所有的变量的声明语句,都会被提升到代码的头部,这就叫做变量提升(hoisting)
 * 变量提升最对var命令声明有效.如果一个变量不是var命令声明的,就不会发生变量提升
 * **/

console.log(1);

var 长欢的对象 = undefined

/**
 * 单行注释除了使用'//'之外,还可以使用'<! --' 及 '-->'(要放在行首)
 * **/

/**
 * JavaScript中每个case代码块内部的break语句不能少,否则会接下去执行下一个case代码块,而不是跳出switch结构
 * **/

/**
 * switch语句后面的表达式与case语句后面的表达式,在比较运行结果时,采用的是严格相等运算符(===),而不是相等运算符9==)
 * 这意味着比较时不会发生类型转换
 *  **/


/**
 * JavaScript的数据类型
 * 数值(number):  整数和小数
 * 字符串(string): 字符组成的文本
 * 布尔值(bool):
 * undefined: 表示未定义或不存在. 即由于目前没有定义,所以此处暂时没有任何值
 * null: 表示无值, 相当于OC和Swift中的nil
 * object: 各种值组成的集合
 * **/


/**
 * 对象又分为三个子类型
 * 狭义的对象(object)
 * 数组(array)
 * 函数(function): JavaScript把函数当成一种数据类型,可以像其他类型的数据一样,进行赋值和传递
 * **/

/**
 * typeof运算符
 *
 *
 * **/

typeof 123
typeof "123"
typeof false

/**null 和 undefined
 * 在if语句中,它们都会被自动转为false, 相等运算符甚至直接报告两者相等
 * 但是在转为数值是,null为0, undefined为NaN
 * **/

typeof null //"object"


/**
 * 布尔值
 * 除了以下六个值被转为false,其他值都视为true
 * undefined/null/false/0/NaN
 * ""或''(空字符串)
 * **/
//空数组[]和空对象{}对应的布尔值都是true

/**
 * JavaScript内部,所有数字都是以64位浮点数形式存储,包括整数.
 * 1 和 1.0 是同一个数
 * **/

//当某些运算只有整数才能完成时,此时JavaScript会自动把64位浮点数转成32位整数,然后在进行运算

//0.1 + 0.2 === 0.3 //false
//(0.3 - 0.2) === (0.2 - 0.1) //false

//JavaScript中精度最多只能到53个二进制,及绝对值小于2的53次方的整数都可以精确表示


/**与数值相关的全局方法**/
/**  parseInt('字符串') : 将字符串转为整数
 *   如果字符串头部有空格,空格会被自动去除
 * **/

parseInt('123');

//parseInt方法还可以接收第二个参数,第二个参数指定 进制

/**
 *  parseFloat('字符串'): 将字符串转为浮点数
 * **/

/**
 * 字符串既可以用单引号''来表示,也可以用""来表示
 * 如果字符串中有单引号或双引号,需要在单引号或双引号前面加上反斜杠
 * **/

/**字符集
 * JavaScript使用Unicode字符集. 在JavaScript引擎内部,所有字符都用Unicode表示
 * **/
/**JavaScript内部都是以16位(2个字节)的UTF-16格式存储 **/

/** Base64 是一种编码方法,可以将任意字符转换成可打印字符. 使用这种编码方法,主要不是为了加密,而是为了不出现特殊字符,简化程序的处理
 *  JavaScript原声提供两个Base64相关方法
 *  btoa():  字符串或二进制值转为Base64编码
 *  atob(): Base64编码转为原来的编码
 * **/

/** 对象是JavaScript的核心概念,也是最重要的数据类型. JavaScript的所有数据都可以被视为对象
 *
 *  所谓对象就是一种无序的数据集合,由若干个"键值对"(key-value)构成
 *
 * **/

/**对象生成的三种方法**/
var o1 = {};

var o2 = new Object();

var o3 = Object.create(Object.prototype);

// 对象的所有键名都是字符串
var o = {
    'p': 'Hello World'
};


/**属性可以动态创建,不必在对象声明时就指定
 * **/

var dynamicO = {}
dynamicO.foo = 123

/** 对象的引用
 *  如果不同的变量名指向同一个对象,那么它们都是这个对象的引用,也就是指向同一个内存地址.
 *  修改其中一个变量,会影响到其他所有变量
 *  如果取消某一个变量对于原对象的引用,不会影响到另一个变量
 * **/

/** 原始类型的数据引用
 *  对于原始类型的数据的引用是值引用,也就是都是值拷贝
 * **/

/** JavaScript规定
 *  如果行首是大括号,则一律解释为语句(即代码块)
 *  如果要解释为表达式(对象),必须在大括号前加上圆括号
 * **/


/** 读取属性
 *  读取对象的属性,有两种方法,一种是使用点运算符,另一种是使用方括号运算符
 *  数值键名不能使用点运算符(因为会被当成小数点), 只能使用方括号运算符
 * **/

var propertyObj = {
    p: 'Hello World'
};

propertyObj.p
propertyObj['p']


/** 注意检查变量是否声明
 *  如果读取一个不存在的键,会返回undefined,而不是报错. 可以利用这一点来检查一个全局变量是否被声明
 * **/

if ('a' in window) {
    //变量a声明过
} else {
    //变量a未声明
}

/** 属性的赋值
 * 点运算符和方括号运算符,不仅可以用来读取数值,还可以用来赋值
 * JavaScript 允许属性的"后绑定". 也就是说,你可以在任意时刻新增属性,没必要在定义对象的时候就定义好属性
 * **/


/** 查看所有属性
 *  查看一个对象本身的所有属性,可以使用Object.keys 方法
 * **/

Object.keys(propertyObj)

/** delete命令
 *  该命令用于删除对象的属性,删除成功后返回true
 *  注意: 删除一个不存在的属性,delete不报错,而且返回true
 *  该命令只能删除对象本身的属性,无法删除集成的属性;
 *  该命令不能删除var命令声明的变量,只能用来删除属性. 因为var声明的全局变量都是顶层对象的属性,而且默认不得删除
 * **/

delete propertyObj.p
Object.keys(propertyObj)

/** in 运算符
 *  in 运算符用于检查对象是否包含某个属性(注意,检查的是键名,不是键值)如果包含就返回true,否则返回false
 *  in 运算符的一个问题是,它不能识别对象集成的属性, 可以用hasOwnProperty方法来判断
 * **/


/** for...in 循环
 * for...in循环用来遍历一个对象的全部属性
 * 注意点: 1. 它遍历的是所有可遍历的属性,会跳过不可遍历的属性
 * 2. 它不仅遍历对象自身的属性,还遍历集成的属性
 * **/

for (var i in propertyObj) {
    console.log(i)
}

/** with 语句
 * 它的作用是操作同一个对象的多个属性时,提供一些书写的方便
 * 不过它有一个弊病,就是绑定对象不明确
 * **/

with (propertyObj) {
    //statements
};

/** 数组
 *  任何类型的数据都可以放入数组
 *  本质上,数组属于一种特殊的对象.typeof运算符返回数组的类型是object
 *  JavaScript使用一个32位整数保存数组的元素个数.
 *  将数组清空的一个有效方法就是将length属性设为0
 *  数组的空位是可以读取的,返回undefined
 *  使用delete命令删除一个数组成员,会形成空位,并且不会影响length属性
 *
 *
 *  数组的某个位置是空位和某个位置是undefined是不一样的.如果是空位,在遍历的时候会被跳过
 * **/


/**函数**/

//函数的声明有三种方式
//1. function命令
function prints(s) {
    console.log(s);
}

//函数表达式, 采用变量赋值的写法
/**
 * 采用函数表达式声明函数时, function命令后面不带有函数名. 即便是带有函数名, 该函数名也只有在函数体内部有效
 * **/
var print = function (s) {
    console.log(s);
}

/**采用function命令声明函数时,整个函数会像变量声明一样,被提升到代码头部**/

/**函数的toString方法返回函数的源码,甚至函数内部的注释也可以返回**/

/**使用var命令声明变量时, 只有在函数内部声明的是局部变量,在其他区块中(if)中声明的都是全局变量**


 /** 函数执行时所在的作用域, 是定义时的作用域,而不是调用时所在的作用域**/
var a = 1;

var x = function () {
    console.log(a);
}

function f() {
    var a = 2;
    x();
}

f(); //打印出来的结果是1.

/** 传递方式
 *  函数参数如果是原始类型的值(数值,字符串,布尔值), 传递方式是传值传递. 这意味着, 在函数体内修改参数值,不会影响到函数外部
 *  如果函数参数是复合类型的值(数组,对象,其他函数),传递方式是传址传递. 也就是说,传入函数的原始值地址,因此在函数内部修改参数,将会影响到原始值
 * **/

var p = 2;
function f(p) {
    p = 3;
}

f(p);

console(p); // p = 2

/**同名参数**/

/**arguments对象
 * 由于JavaScript允许函数有不定数目的参数,所以我们需要一种体制,可以在函数体内部读取所有参数.这就是argumens对象的由来
 * arguments对象除了可以读取参数,还可以为参数赋值(但是严格模式下不允许)
 * 可以通过arguments对象的length属性来判断函数调用时到底带有几个参数
 * arguments对象带有一个callee属性,返回它所对应的原函数.因此可以通过arguments.callee达到调用函数自身的目的.但是这种用法在严格模式下也是禁止的
 * **/


/** 闭包
 *  要理解闭包,首先必须理解变量作用域.JavaScript有两种作用域: 全局作用域和函数作用域
 *  在某些情况下,我们需要得到函数f1内部的局部变量.正常情况下,我们是无法获取到该变量的. 所以,变通一下,在函数f1内部再定义一个函数f2, 然后将该函数f2返回.
 *  我们通过这个返回的函数f2便可以获取到函数f1内部的局部变量. 本质上闭包就是讲函数内部与函数外部连接起来的一座桥梁
 *  闭包的另一个作用就是让这些变量时钟保持在内存中.即闭包可以使得它诞生环境一直存在.
 * **/

function createIncrementor(start) {
    return function () {
        return start++;
    }
}

var inc = createIncrementor(5)
inc();
inc()
inc()

/** 立即调用表达式
 *  在JavaScript中,一对圆括号() 是一种运算符,跟在函数名之后,表示调用该函数
 *  有时,我们需要在定义函数之后立即调用该函数. 如果我们在函数的定义之后加上圆括号,会产生语法错误
 * **/

/** eval命令
 *  eval命令的作用是,将字符串当做语句执行
 * **/

/**
 * JavaScript 提供两个相等运算符'==' 和'==='
 * 使用'===' 对原始类型值进行比较时, 如果两个值不是同一类型,则直接返回false
 * 使用'===' 对符合类型值进行比较时,会判断它们是否引用同一个内存地址
 * 使用'==', 则会将它们转化成同一个类型,再用'==='进行比较
 * **/

/** 否运算
 * 对整数进行一次取反, 结果是自身的取反值减去1
 * 对一个整数两次否运算, 则得到它自身. 对一个小数连续进行两次否运算,能达到取整效果. 而是是所有取整方法中最快的一种
 * **/

/** 异或运算
 *  异或运算是在两个二进制位不同时为1, 相同时为0
 *  连续对两个数a和b进行三次异或运算, a^=b, b^=a, a^=b可以互换它们的值, 这是互换两个变量的值最快的方法
 * **/

var a = 99;
var b = 90;
/** 位运算符
 *  或运算: |, 表示若两个二进制位都位0, 则结果为0, 否则为1;
 *  与运算: &, 表示若两个二进制位都为1, 则结果为1, 否则为0;
 *  异或运算: ^, 表示若两个二进制位不相同, 则结果为1, 否则为0;
 *  否运算: ~, 表示对一个二进制位取反;
 *  左移运算: <<;
 *  右移运算: >>;
 *  带符号位的右移运算: >>>
 *
 *  上面那些位运算符直接处理每一个比特位(bit), 所以是非常底层的运算,好处是速度极快, 缺点是不直观
 *  位运算符只对整数起作用, 如果一个运算子不是整数,会自动转为整数后在执行.
 *  虽然JavaScript内部数值都是以64位浮点数的形式存储, 但是做位运算的时候, 是以32位带符号的整数进行运算的, 并且返回值也是一个32位带符号的整数
 * **/

a ^= b, b ^= a, a ^= b;

//异或运算也可以用来取整
12.98 ^ 0 ; //12

///其他运算符

/** void运算符
 *  void运算符的作用是执行一个表达式, 然后不返回任何值,或者说返回undefined.
 *  这个运算符主要是用于书签工具, 以及用于在超级链接中插入代码,目的是返回undefined可以防止网页跳转
 * **/


/** 数据类型转换
 *  JavaScript是一种动态类型语言, 变量没有类型限制, 可以随时赋予任意值
 * **/

//强制转换

/** 强制转换主要指使用Number, String和Boolean三个构造函数, 手动将各种类型的值转换成数字, 字符串和布尔值
 *
 * **/

/** JavaScript的原生错误类型
 *  1. SyntaxError: 解析代码时发生的语法错误
 *  2. RefrenceError: 引用一个不存在的变量时发生的错误
 *  3. RangeError: 当一个值超出有效范围时发生的错误
 *  4. TypeError: 变量或参数不是预期类型时发生的错误
 *  5. 
 *
 * **/