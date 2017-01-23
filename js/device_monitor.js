$(function() {
// 动态设定根元素字体大小
    !(function(win, doc) {
        function setFontSize() {
            // 获取屏幕宽度
            var winWidth = window.innerWidth;
            // 计算字体大小
            var size = (winWidth / 375) * 20;
            doc.documentElement.style.cssText = 'font-size:' + size + 'px' + '!important';
        }
        var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
        var timer = null;
        // 监听横竖屏切换以及缩放屏幕时执行设置字体大小方法,延迟时间是100ms
        win.addEventListener(evt, function() {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 100);
        }, false);
        // 监听页面加载事件执行字体设置方法,延迟时间是100ms
        win.addEventListener("pageshow", function(e) {
            if (e.persisted) {
                clearTimeout(timer);
                timer = setTimeout(setFontSize, 100);
            }
        }, false);
        // 初始化
        setFontSize();
    }(window, document));
    judgeHeight(window, document);
  
});
    
// 动态设定内边距高度方法 
function judgeHeight(win, doc) {
    function setPadding() {
        // 获取屏幕高度
        var winHeight = window.innerHeight;
        // 计算内边距高度
        var paddingTop = (winHeight / 667) * 4;
        // 获取元素
        var row = doc.getElementsByName("button-group");
        // 设定内边距高度
        row[0].style.cssText = 'padding-top:' + (paddingTop < 4 ? paddingTop : 4) + 'rem';
    }
    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
    var timer = null;
    // 监听横竖屏切换以及缩放屏幕时执行设置内边距高度方法,延迟时间是100ms
    win.addEventListener(evt, function() {
        clearTimeout(timer);
        timer = setTimeout(setPadding, 100);
    }, false);
    // 监听页面加载事件，执行内边距高度设置方法,延迟时间是100ms
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(setPadding, 100);
        }
    }, false);
    // 初始化
    setPadding();
}