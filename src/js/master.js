//解绑设备页面的解绑按钮
$(".button-danger").click(function() {
    $.confirm('解绑设备', function() {
        $.alert('解绑后无法控制设备');
    });
});

/*监控页面按钮部分*/
$(".buttons-tab a").click(function() {
    $(".buttons-tab a").removeClass("active");
    $(".tabs div").removeClass("active");
});
/******************************开关按钮方法***************************************************/
var wait = 60;

function time() {
    if (wait > 60) {
        alert("关机失败");

    } else {
        setTimeout(function() {
            if ($(".auto-title").text() == "手动运行") {
                $(".auto-title").text("关机成功");
                $(".state-card").css("background-color", "#999999");
            } else {
                $(".auto-title").text("手动运行");
                $(".state-card").css("background-color", "#1ba365");
            }
            alert("正在关机")
        })
    }
}
document.getElementById("switchBtn").onclick = function() { time(this); }
/******************************AUTO按钮方法***************************************************/
function auto() {
    if (wait > 60) {
        alert("运行失败");

    } else {
        setTimeout(function() {
            if ($(".auto-title").text() == "手动运行") {
                $(".auto-title").text("自动运行");
            } else {
                $(".auto-title").text("手动运行");
            }
            alert("正在运行")
        })
    }
}
document.getElementById("autoBtn").onclick = function() { auto(this); }
//风速按钮
$("#windSpeedBtn").click(function() {
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

//重置查询状态
$("#filterScreenBtn").click(function() {
    $.alert('<div>重置滤网已经完成</div>');
});
//每个按钮点击时颜色的变化
$(".monitoring-button span").click(function() {
    $(".monitoring-button span").css({ "background-color": "#fff", "color": "#3d4145", "border": "0.05rem #808080 solid" });
    $(this).css({ "background-color": "#1aa365", "color": "#fff", "border": "0.05rem #1aa365 solid" })
});
