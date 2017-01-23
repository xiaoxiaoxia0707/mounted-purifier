$(function() {
            $(document).on('click', '.button-danger', function() {
                var buttons1 = [{
                    text: '解除设备',
                    bg: 'danger'
                }];
                var buttons2 = [{
                    text: '取消',
                    bg: '#ffffff'
                }];
                var groups = [buttons1, buttons2];
                $.actions(groups);
            });

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
            });

