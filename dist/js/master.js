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
        }
    ];
var buttons2 = [{
    text: '取消'
}];
var groups = [buttons1, buttons2]; 
$.actions(groups);
});
//定时开关机
 $("#clock").datetimePicker({
    value: ['1985', '12', '04', '9', '34']
  });

/*车载进化器首页*/
//车载进化器页面的弹出框
$(document).on('click', '#headpage', function() {
    $.modal({
        title: '感谢关注车载净化器！',
        text: '车载进化器，关注您的每一次呼吸！点击下方"<a>我的设备</a>",检测一下您车内的环境，为它做一次深呼吸吧！尚未绑定设备的，请先点击下方"<a>设备绑定</a>"选择设备绑定，扫描设备二维码进行绑定。',
        buttons: [{
            text: '确认'
        }]
    })
});
//个人中心按钮
$("#personal-external").click(function() {
    $(".personal-center").toggle();
})
