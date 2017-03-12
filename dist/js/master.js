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
$(document).on('click', '#clock', function() {
    var buttons1 = [{
        text: '<div>定时开机</div><span>0小时</span>',
        label: true
    }, {
        text: '<div>定时关机</div><span>1小时</span>',
        label: true

    }, {
        text: '<span>1.5小时</span>',
        label: true
    }];
    var buttons2 = [{
        text: '确定'
    }];
    var groups = [buttons1, buttons2];
    $.actions(groups);
});
//上滑按钮
$(document).ready(function(){
$(".monitoring-button").click(function() {
    $(".state-card").css({ "height": "10rem", "padding-top": "0.98rem" });
    $(".monitoring-state").css({ "height": "6rem", "border": "none", "margin-bottom": "0.98rem" });
    $(".monitoring-message #row-one, #row-two").css({ "height": "2.04rem", "margin-left": "0.25rem", "line-height": "1.02rem" });
    $(".monitoring-message #row-one").html("<span>室温</span> 10&#8451;<br/><span>风速</span> 低");
    $(".monitoring-message #row-two").html("<span>温度</span> 80%<br/><span>滤网</span> 50%");
    $(".monitoring-button2").css({ "display": "block" });
    $("#slide-up").hide();
    //气氛灯按钮
    $("#deng").click(function() {
        $("#row-four").css({ "display": "block" });
    });
    //等离子按钮
    $("#denglizi").click(function() {
        $("#row-three").css({ "display": "block" });
    });

    //进度条
    function setProcess() {
        var processbar = document.getElementById("processbar");
        processbar.style.width = parseInt(processbar.style.width) + 1 + "%";
        processbar.innerHTML = processbar.style.width;
        if (processbar.style.width == "100%") {
            window.clearInterval(bartimer);
        }
    }
    var bartimer = window.setInterval(function() { setProcess(); }, 100);
    window.onload = function() {
        bartimer;
    }
    $("#wang").click(function() {
        $("#wang").html("<div class='processcontainer'> <div id='processbar' style='width:0%;'></div></div>");
    })
});
});

$(".monitoring-button").click(function() {
    $(".state-card").css({ "height": "12rem", "padding-top": "1.5rem" });
    $(".monitoring-state").css({ "height": "7rem;", "border": " 0.1rem #fff dashed", "margin-bottom": "1.5rem" });
    $(".monitoring-message #row-one").html("<span class='icon iconfont icon-quanguowendu'></span>10&#8451;<br/><span class='icon iconfont icon-fengsushezhi'></span> 低");
    $(".monitoring-message #row-two").html("<span class='icon iconfont icon-icon'></span>80%<br/><span class='icon iconfont icon-mchezai'></span> 50%");
    $(".monitoring-button2").hide();
    $("#slide-up").show();
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
