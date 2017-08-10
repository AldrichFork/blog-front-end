

window.onload=function () {
    var base=new Base();
    $().getId('box').css('color','red').css('background','yellow');
    //alert();
    $().getTagName('p').css('color','green').html('标题').click(function () {
        alert('点击有效');
    }).css('background-color','pink');
}
