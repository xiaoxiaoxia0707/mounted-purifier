	//动态计算html的font-size
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 640) deviceWidth = 640;
    document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
       console.log(document.documentElement.style.fontSize);

    //信息下拉刷新
    $(document).on("pageInit", "#pull-to-refresh-content", function(e, id, page) {
        var $content = $(page).find(".content").on('refresh', function(e) {
            // 模拟2s的加载过程
            setTimeout(function() {
                var cardHTML = '<div class="card">' +
                    '</div>' +
                    '</div>' +
                    '</div>';

                $content.find('.content').prepend(cardHTML);
                // $(window).scrollTop(0);
                // 加载完毕需要重置
                $.pullToRefreshDone($content);
            }, 2000);
        });
    });
    $.init();
