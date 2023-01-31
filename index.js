$(function () {
    // 初始化 显示
    $('#homepage').stop().fadeIn(300);
    $('footer button .text').addClass('texttype');
    // 功能链接数据加载
    $.get('https://lhshilin.github.io/jimu/allFunctionData.json', function (res) {
        var fnnum = 0;
        // 数据载入
        // QQ专区数据输入及输入进全部功能里
        $(res.QQ).each(function (i, e) {
            $('#homepage .fn-qq p').append('<a class="col-4"></a>').children('a').eq(i).html(e.name).prop('href', e.url)
        })
        fnnum += res.QQ.length;
        //  信息查询专区数据输入及输入进全部功能里
        $(res.informationquery).each(function (i, e) {
            $('#homepage .fn-informationquery .row').append('<a class="col-4"></a>').children('a').eq(i).html(e.name).prop('href', e.url)
        })
        fnnum += res.informationquery.length;
        //  网站专区数据输入及输入进全部功能里
        $(res.website).each(function (i, e) {
            $('#homepage .fn-website .row').append('<a class="col-4"></a>').children('a').eq(i).html(e.name).prop('href', e.url)
        })
        fnnum += res.website.length;
        // 文案专区数据输入及输入进全部功能里
        $(res.copywriting).each(function (i, e) {
            $('#homepage .fn-copywriting .row').append('<a class="col-4"></a>').children('a').eq(i).html(e.name).prop('href', e.url)
        })
        fnnum += res.copywriting.length;
        // 其他功能专区数据输入及输入进全部功能里
        $(res.other).each(function (i, e) {
            $('#homepage .fn-other .row').append('<a class="col-4"></a>').children('a').eq(i).html(e.name).prop('href', e.url)
        })
        fnnum += res.other.length;
        // 输出一共的功能数量
        $('#homepage .func-num span').html(fnnum)

        mysteriouCode(res)
    });
    // 更新日志数据输入
    $.get('https://lhshilin.github.io/jimu/log.json', function (res) {
        $(res).each(function (i, v) {
            $('#toupdate').append('<ul class="row"><li><span class="update-date">' + v.date + '</span><ul class="update-content"></ul></li></ul>')         
            $(v.data).each(function (index, value) {
                $('#toupdate > ul > li > ul').eq(i).append('<li></li>').children('li').eq(index).html(value)
            })          
        })
    });
    // 获得软件已运行时间 pastTime
    (function () {       
        var pasttimeevents = $('#homepage .pasttime span'),
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
    // 更新日志返回置顶显示隐藏功能 toupDateReturnTop
    (function () {
        $(window).on('scroll', function () {
            var htmlheight = $(window).height() / 2;
            if($('html').scrollTop() > htmlheight && $('#toupdate').css('display') != 'none') {
                $('#toupdate #returntop').show()
            }else {
                $('#toupdate #returntop').hide()
            }
        })
        $('#toupdate #returntop').on('click', function () {
            $('html').stop().animate({
                scrollTop : 0
            })
        })
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
        var authorQQcopybtn = new Clipboard('#authorQQcopybtn'),
            authorQQmailcopybtn = new Clipboard('#authorQQmailcopybtn'),
            authorQQCommunicationGroup = new Clipboard('#authorQQCommunicationGroup'),
            sourceCodeDownload = new Clipboard('#sourceCodeDownload'),
            androidDownload = new Clipboard('#androidDownload'),
            lanzouyunDownload = new Clipboard('#lanzouyunDownload');
        // QQ号复制按钮
        authorQQcopybtn.on('success', function(e) {
            e.clearSelection();
            $('#authorQQcopybtn').html('复制成功')
        })
        authorQQcopybtn.on('error', function(e) {
            $('#authorQQcopybtn').html('复制失败')
        })
          // QQ邮箱复制按钮
        authorQQmailcopybtn.on('success', function(e) {
            e.clearSelection();
            $('#authorQQmailcopybtn').html('复制成功')
        });
        authorQQmailcopybtn.on('error', function(e) {
            $('#authorQQmailcopybtn').html('复制失败')
        })
        // QQ交流群号复制按钮
        authorQQCommunicationGroup.on('success', function(e) {
            e.clearSelection();
            $('#authorQQCommunicationGroup').html('复制成功')
        });
        authorQQCommunicationGroup.on('error', function(e) {
            $('#authorQQCommunicationGroup').html('复制失败')
        })
        // pc端下载链接点击复制
        sourceCodeDownload.on('success', function(e) {
            e.clearSelection();
            $('#sourceCodeDownload').html('复制成功')
        })
        sourceCodeDownload.on('error', function(e) {
            $('#sourceCodeDownload').html('复制失败')
        })
        // 安卓版下载链接点击复制
        androidDownload.on('success', function(e) {
            e.clearSelection();
            $('#androidDownload').html('复制成功')
        })
        androidDownload.on('error', function(e) {
            $('#androidDownload').html('复制失败')
        })
          // 蓝奏云备用下载链接点击复制
           lanzouyunDownload.on('success', function(e) {
            e.clearSelection();
            $('#lanzouyunDownload').html('复制成功')
        })
        lanzouyunDownload.on('error', function(e) {
            $('#lanzouyunDownload').html('复制失败')
        })
    }());
    // mysteriouCode
    function mysteriouCode(res) {
        function mysteriouCodeUrl() {
            $(res.mysteriouCode).each(function (i, e) {
                $('#homepage .fn-mysteriouCode .row').append('<a class="col-4"></a>').children('a').eq(i).html(e.name).prop('href', e.url)
            })
            // 输出一共的功能数量
            var funcNum = parseInt($('#homepage .func-num span').html())
            $('#homepage .func-num span').html(funcNum + res.mysteriouCode.length)
            $('.fn-mysteriouCode').show()
        }
        if(!localStorage.getItem('mysteriouCode')) {
            localStorage.setItem('mysteriouCode', 'false')
        }
        if(localStorage.getItem('mysteriouCode') === 'true') {
            mysteriouCodeUrl()
        } else {
            var count = 0,
                timer;
            function down() {
                timer = setInterval(function () {
                    count ++;
                    if(count == 3) {
                        count = 0;
                        clearInterval(timer)
                        $('.mysteriouCode').fadeIn(300)
                        $('.cover').show()
                        $('body').css('overflow', 'hidden')
                        $(window).on('keydown', function (e) {
                            if(e.keyCode === 13) {
                                $('.mysteriouCode .mysteriouCodeRight').click()
                                $(window).on('keydown', null)
                            }
                        })
                    }
                }, 1000)
                return timer
            }
            function clear() {
                $('.mysteriouCode').hide(300)
                $('.cover').hide()
                $('body').css('overflow', 'visible')
                $(window).on('keydown', null)
            }
            $('.mysteriouCode .mysteriouCodeLeft').on('click', function () {
                clear()
            })
            $('.mysteriouCode .mysteriouCodeRight').on('click', function () {
                if($('.mysteriouCode input').val() === '') {
                    return $('.mysteriouCode .mysteriouCodeTip .meg').html('密码不能为空')
                }
                $.get('https://v.api.aa1.cn/api/api-md5/go.php', {act : '加密', md5 : $('.mysteriouCode input').val()}, function (res) {
                    res = res.slice(6, 38)
                    if(res == '871925f4b0a5cd9e35cd0340edea0e82') {
                        $('.mysteriouCode .mysteriouCodeTip .meg').html('密码正确')
                        mysteriouCodeUrl()
                        localStorage.setItem('mysteriouCode', 'true')
                        clear()
                    } else {
                        $('.mysteriouCode .mysteriouCodeTip .meg').html('密码错误')
                    }
                })
            })
            $('#logo').on({
                mousedown : function () {
                    down()
                    $('#logo').on('mouseup', function () {
                        count = 0;
                        clearInterval(timer)
                        return false;
                    }) 
                },
                touchstart : function () {
                    down()
                    $('#logo').on('touchend', function () {
                        count = 0;
                        clearInterval(timer)
                        return false;
                    }) 
                }
            })
        }
    };
    // 下雪特效执行
    $(document).ready( function() {
        $("canvas.xiaxue").let_it_snow();
    });
})