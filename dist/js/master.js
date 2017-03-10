//解绑设备页面的解绑按钮
$(document).on('click', '.button-danger', function() {
    $.confirm('解绑设备', function() {
        $.alert('解绑后无法控制设备');
    });
});
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
/*车载进化器首页*/
//个人中心按钮

    $("#personal-external").click(function(){
        $(".personal-center").toggle();
    })
