//解绑设备页面的解绑按钮
$(document).on('click', '.button-danger', function() {
    $.confirm('解绑设备', function() {
        $.alert('解绑后无法控制设备');
    });
});

/*监控页面按钮部分*/
//开关按钮
$("#kaiguan").click(function() {
    if ($(".auto-title").text() == "手动运行") {
        $(".auto-title").text("已关机");
        $(".state-card").css("background-color", "#999999");
    } else {
        $(".auto-title").text("手动运行");
        $(".state-card").css("background-color", "#1ba365");
    }
});
//AUTO按钮
$("#auto").click(function() {
    if ($(".auto-title").text() == "手动运行") {
        $(".auto-title").text("自动运行");
    } else {
        $(".auto-title").text("手动运行");
    }
});
//风速按钮
$(document).on('click', '#fengsu', function() {
    var buttons1 = [{
        text: '高速',
        label: true
    }, {
        text: '中速',
        label: true
    }, {
        text: '低速',
        label: true
    }];
    var buttons2 = [{
        text: '取消'
    }];
    var groups = [buttons1, buttons2];
    $.actions(groups);
});
//定时开关机
// $(document).on('click', '#clock', function() {
//     var buttons1 = [{
//         text: '<div>定时开机</div><span>0小时</span>',
//         label: true
//     }, {
//         text: '<div>定时关机</div><span>1小时</span>',
//         label: true

//     }, {
//         text: '<span>1.5小时</span>',
//         label: true
//     }];
//     var buttons2 = [{
//         text: '确定'
//     }];
//     var groups = [buttons1, buttons2];
//     $.actions(groups);
// });
$("#clock").datetimePicker({
    value: ['1985', '12', '04', '9', '34']
});

//等离子
$("#denglizi").click(function(){

});