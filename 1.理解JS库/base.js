/*
* 函数式
function $(id) {
    return document.getElementById(id);
};
* */

/*
对象式
*/
var Base={
    getId:function (id) {
        return document.getElementById(id);
    },
    getName:function (name) {
        return document.getElementsByName(name);
    },
    getTag:function(tag){
        return document.getElementsByTagName(tag);
    }
};