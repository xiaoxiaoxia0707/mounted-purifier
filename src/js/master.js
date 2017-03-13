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
//上滑按钮
$(document).ready(function(){
$(".monitoring-button").click(function() {
    $(".state-card").css({ "height": "9rem", "padding-top": "0.9rem" });
    $(".monitoring-state").css({ "height": "6rem", "border": "none", "margin-bottom": "0.9rem" });
    $(".monitoring-message").css({"padding":"0","height":"1.2rem"});
    $(".monitoring-message").html("<div class='message'><p>室温&nbsp;100&#8451;</p></div><div class='message'><p>风速&nbsp;低</p></div><div class='message'><p>湿度&nbsp;80%</p></div><div class='message'><p>滤网&nbsp;50%</p> </div>");
    $(".monitoring-button2").css({ "display": "block" });
    $(".")
     //等离子按钮
    $("#denglizi").click(function() {
        $("#row-three").css({ "display": "block" });
    });
    //气氛灯按钮
    $("#deng").click(function() {
        $("#row-four").css({ "display": "block" });
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
