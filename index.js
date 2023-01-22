$(function () {
    // 初始化 显示
    $('#homepage').stop().fadeIn(300)
    $('footer button .text').addClass('texttype')
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
    })
    // 更新日志数据输入
    $.get('https://lhshilin.github.io/jimu/log.json', function (res) {
        $(res).each(function (i, v) {
            $('#toupdate').append('<ul class="row"><li><span class="update-date">' + v.date + '</span><ul class="update-content"></ul></li></ul>')         
            $(v.data).each(function (index, value) {
                $('#toupdate > ul > li > ul').eq(i).append('<li></li>').children('li').eq(index).html(value)
            })          
        })
    })
    // 获得软件已运行时间
    function pastTime() {       
        var pasttimeevents = $('#homepage .pasttime span')
        // 设置发布时间
        var old_time = new Date(2022, 0, 16)          
           var new_time,         
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
      }
    pastTime()
    // 更新日志返回置顶显示隐藏功能
    function toupDateReturnTop() {
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
    }
    toupDateReturnTop()
    // 底部按钮切换功能 
    function footerBtnType() {
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
    }
    footerBtnType()    
    // 打赏二维码切换效果
    $('#reward button').eq(0).click(function () {
        $(this).addClass('btn-success').siblings('button').removeClass('btn-primary')
        $('#reward img').eq(0).stop().fadeIn(500).siblings('img').hide()
    })
    $('#reward button').eq(1).click(function () {
        $(this).addClass('btn-primary').siblings('button').removeClass('btn-success')
        $('#reward img').eq(1).stop().fadeIn(500).siblings('img').hide()
    })
    // 点击复制功能
    function copy() {       
        // QQ复制按钮
        var authorQQcopybtn = new Clipboard('#authorQQcopybtn'),
            authorQQmailcopybtn = new Clipboard('#authorQQmailcopybtn'),
            authorQQCommunicationGroup = new Clipboard('#authorQQCommunicationGroup'),
            aliyunpanDownload = new Clipboard('#aliyunpanDownload'),
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
           aliyunpanDownload.on('success', function(e) {
            e.clearSelection();
            $('#aliyunpanDownload').html('复制成功')
        })
        aliyunpanDownload.on('error', function(e) {
            $('#aliyunpanDownload').html('复制失败')
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
    }
    copy()
    // 下雪特效执行
    $(document).ready( function() {
           $("canvas.xiaxue").let_it_snow();
    })
})