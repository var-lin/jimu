$(function () {
	$('#homepage .jumbotron').animate({
        opacity : 1
    });
    // 代刷网下拉
    (function () {
        if(!localStorage.getItem('replaceBrushStyle')) {
            localStorage.setItem('replaceBrushStyle', 'none')
        }
        var key = localStorage.getItem('replaceBrushStyle'),
            imgEle = $('#homepage .replaceBrush h6 span img'),
            imgdown = './images/caret-down-square.svg',
            imgup = './images/caret-up-square.svg';
        $('#homepage .replaceBrush .replaceBrush-content').css('display', key)
        if(key == 'none') {
            $(imgEle).attr('src', imgdown)
        } else {
            $(imgEle).attr('src', imgup)
        }
        $('#homepage .replaceBrush h6').on('click', function () {
            $('#homepage .replaceBrush .replaceBrush-content').stop().slideToggle(300)
            if(key == 'none') {
                key = 'block';
                localStorage.setItem('replaceBrushStyle', 'block')
                $(imgEle).attr('src', imgup)
            } else {
                key = 'none';
                localStorage.setItem('replaceBrushStyle', 'none')
                $(imgEle).attr('src', imgdown)
            }
        })
    })();
    // 时间段提示内容获取
    (function () {
        function writeText() {
            $.ajax({
                url : 'https://v1.hitokoto.cn/',
                type : 'get',
                dataType : 'json',
                success : function (res) {
                    $('.brief-remark').html(res.hitokoto)
                },
                error : function (err){
                    $('.brief-remark').html('接口可能失效啦~请联系作者修复哈')
                }
            });
        }
        var date = new Date(),
            dateYear = date.getFullYear(),
            dateMonth = (date.getMonth() + 1) <= 9 ? '0' + (date.getMonth() + 1) : '' + (date.getMonth() + 1),
            dateDay = date.getDate() <= 9 ? '0' + date.getDate() : '' + date.getDate(),
            birthday = localStorage.getItem('birthday') == 'true';
        date = dateYear + dateMonth + dateDay;
        if(!localStorage.getItem('date')) {
            localStorage.setItem('date', date)
        }
        if(localStorage.getItem('date') == date && !birthday) {
            writeText()
        } else {
            $.get('https://www.mxnzp.com/api/holiday/single/' + date, {ignoreHoliday : false, app_id : 'jlfmcnsgqikmmejf', app_secret : 'Rnp4ZkJ4NHVVWnhvcC9MRTJLYWZtZz09'}, function (res) {
                if(res.code == 1 && res.data.lunarCalendar == '三月初十') {
                    localStorage.setItem('birthday', 'true')
                    var text = '今天是作者的生日哦,那就祝自己生日快乐吧!🎉🎉🎉',
                        text_len = text.length;
                    $('.brief-remark').html('')
                    for (var i = 0; i < text_len; i ++) {
                        (function (i) {
                            setTimeout(function () {
                                $('.brief-remark').html($('.brief-remark').html() + text[i])
                            }, 100 * i)
                        }(i));
                    }
                } else {
                    writeText()
                    localStorage.setItem('birthday', 'false')
                    localStorage.setItem('date', date)
                }
            })
        }
    }());
    // 返回置顶显示隐藏功能 toupDateReturnTop
    (function () {
        $(window).on('scroll', function () {
            var htmlheight = $(window).height() / 2;
            if($('html').scrollTop() > htmlheight) {
                $('#returntop').show()
            }else {
                $('#returntop').hide()
            }
        })
        $('#returntop').on('click', function () {
            $('html').stop().animate({
                scrollTop : 0
            })
        })
    }());
    // 侧边栏
    (function () {
        function clear() {
            $('#homepage .cover').hide()
            $('body').css('overflow', 'visible')
            $('.sidebar').stop().animate({
                left : -280
            }, 300)
            $('.sidebarBn img').css('transform', 'rotate(0deg)')
        }
        $('.sidebar .navigaBar').on('click', function (e) {
            var target = e.target;
            if(target !== this) {
                $(target).css('background-color', '#fff')
                setTimeout(function () {
                    $(target).css('background-color', '')
                }, 500)
                clear()
                $('html').animate({
                    scrollTop : $('.jumbotron').eq($(target).index()).offset().top
                })
            }
        })
        $('.sidebarBn').on('click', function () {
            $('.sidebarBn img').css('transform', 'rotate(90deg)')
            $('#homepage .cover').show()
            $('body').css('overflow', 'hidden')
            $('.sidebar').stop().animate({
                left : 0
            }, 300)
            $('#homepage .cover').on('click', function () {
                clear()
            })
        })
        function down() {
            $(this).css('background-color', '#ccc')
        }
        function up() {
            $(this).css('background-color', '#fff')
        }
        $('.sidebarBn').on({
            'mousedown' : down,
            'mouseup' : up,
            'touchstart' : down,
            'touchend' : up
        })
    })();
    // 获得软件已运行时间 pastTime
    (function () {       
        var pasttimeevents = $('.sidebar .pasttime span'),
        // 设置发布时间
            old_time = new Date(2022, 0, 16),
            new_time,         
            day, 
            leave_day, 
            hour, 
            leave_hour, 
            minute,
            second;
        function caleTimeDiff() {
            // 获取最新时间
            new_time = new Date()         
            // 计算时间差(差多少秒)
            diff_time = (new_time - old_time) / 1000;       
            day = Math.floor(diff_time / (3600 * 24));
            leave_day = diff_time % (3600 * 24);
            hour = Math.floor(leave_day / (3600));
            leave_hour = leave_day % (3600);
            minute = Math.floor(leave_hour / 60);
            second = Math.floor(leave_hour % 60);        
            // 时间输出
            pasttimeevents.eq(0).html(day)
            pasttimeevents.eq(1).html(hour)
            pasttimeevents.eq(2).html(minute)
            pasttimeevents.eq(3).html(second)
        }
        caleTimeDiff()
        setInterval(caleTimeDiff, 999)
    }());
    // 底部按钮切换功能 footerBtnType
    (function () {
        $('footer button').each(function (i, e) {
            $(this).click(function () {
                   // 点击底部按钮返回滚动条置顶
                $('html').scrollTop(0)
                   // 页面隐藏显示切换
                $('#showregion > div').eq(i).stop().fadeIn(300).siblings().hide()
                // 文字效果切换
                $(e).find('.text span').css({
                    fontSize : '.6rem',
                    color : '#fedcba',
                    backgroundColor : 'cornflowerblue'
                })
                $(e).siblings().find('.text span').css({
                    fontSize : '.5rem',
                    color : '#fff',
                    backgroundColor : 'transparent'
                })
            })
        })
    }());
    // 打赏二维码切换效果
    $('#reward button').eq(0).click(function () {
        $(this).addClass('btn-success').siblings('button').removeClass('btn-primary')
        $('#reward img').eq(0).stop().fadeIn(500).siblings('img').hide()
    });
    $('#reward button').eq(1).click(function () {
        $(this).addClass('btn-primary').siblings('button').removeClass('btn-success')
        $('#reward img').eq(1).stop().fadeIn(500).siblings('img').hide()
    });
    // 点击复制功能 copy
    (function () {       
        // QQ复制按钮
        var urlClipboardLeftBtn = new Clipboard('#homepage .replaceBrush .replaceBrush-content .urlClipboard .leftBtn'),
            urlClipboardRightBtn = new Clipboard('#homepage .replaceBrush .replaceBrush-content .urlClipboard .rightBtn'),
            authorQQcopybtn = new Clipboard('#authorQQcopybtn'),
            authorQQmailcopybtn = new Clipboard('#authorQQmailcopybtn'),
            authorQQCommunicationGroup = new Clipboard('#authorQQCommunicationGroup'),
            sourceCodeDownload = new Clipboard('#sourceCodeDownload'),
            androidDownload = new Clipboard('#androidDownload'),
            lanzouyunDownload = new Clipboard('#lanzouyunDownload');
        // 代刷网左复制按钮
        urlClipboardLeftBtn.on('success', function(e) {
            e.clearSelection();
            $('#homepage .replaceBrush .replaceBrush-content .urlClipboard .leftBtn').html('复制成功')
        })
        // 代刷网右复制按钮
        urlClipboardRightBtn.on('success', function(e) {
            e.clearSelection();
            $('#homepage .replaceBrush .replaceBrush-content .urlClipboard .rightBtn').html('复制成功')
        })
        // QQ号复制按钮
        authorQQcopybtn.on('success', function(e) {
            e.clearSelection();
            $('#authorQQcopybtn').html('复制成功')
        })
          // QQ邮箱复制按钮
        authorQQmailcopybtn.on('success', function(e) {
            e.clearSelection();
            $('#authorQQmailcopybtn').html('复制成功')
        })
        // QQ交流群号复制按钮
        authorQQCommunicationGroup.on('success', function(e) {
            e.clearSelection();
            $('#authorQQCommunicationGroup').html('复制成功')
        },)
        // 积木pc端下载链接点击复制
        sourceCodeDownload.on('success', function(e) {
            e.clearSelection();
            $('#sourceCodeDownload').html('复制成功')
        })
        // 积木安卓版下载链接点击复制
        androidDownload.on('success', function(e) {
            e.clearSelection();
            $('#androidDownload').html('复制成功')
        })
        // 蓝奏云备用下载链接点击复制
        lanzouyunDownload.on('success', function(e) {
            e.clearSelection();
            $('#lanzouyunDownload').html('复制成功')
        })
    }());
})