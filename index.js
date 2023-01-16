$(function () {
    // 初始化 显示
    $('#homepage').stop().fadeIn(300)
    setTimeout(function () {
       	$('#homepage #homepage-head').fadeIn(1000)
    }, 300)
    $('#homepagebtn .img img').stop().animate({
        width : 25
    })
    $('footer button .text').addClass('texttype')
    // 主页初始化
    $('#homepage .row a').prop('href', '#').html('未开发')
    // 数据和数据添加
    function data() {
        var dataurl = {
            qq : './function/qqZone/',
            informationquery : './function/informationQueryZone/',
            website : './function/webSiteZone/',
            copywriting : './function/copyZone/',
            other : './function/other/'
        }
        // 功能链接数据
        var allfunctiondata = {
            QQ : [
                {name : '获取QQ昵称和头像', url : dataurl.qq + 'getQQNameImg.html'},
                {name : 'QQ电脑在线查询', url : dataurl.qq + 'queryQQPConline.html'},
                {name : 'QQ强制聊天', url : dataurl.qq + 'qqForceChat.html'},
                {name : 'QQ跳转资料卡', url : dataurl.qq + 'qqForceCard.html'},
                {name : 'QQ号测凶吉(娱乐)', url : dataurl.qq + 'qqMeasuringGoodAndBadLuck.html'}
            ],
            informationquery : [
            	{name : '访客相关信息查询', url : dataurl.informationquery + 'visitorInformation.html'},
               	{name : '获得IP信息归属地', url : dataurl.informationquery + 'GetiPInformationplaceOfOwnership.html'},
                {name : '身份证信息查询', url : dataurl.informationquery + 'idCardInformationQuery.html'},
                {name : '历史上的今天', url : dataurl.informationquery + 'todayInHistory.html'},
                {name : '手机号归属地查询', url : dataurl.informationquery + 'queryTelAttribution.html'}
            ],
            website : [
            	{name : '查询网站标题', url : dataurl.website + 'queryWebSiteTitle.html'},
                {name : '域名注册查询', url : dataurl.website + 'queryDomainNameRegistration.html'},
                {name : 'ICP备案查询', url : dataurl.website + 'queryICP.html'},
                {name : '效验爬虫真实性', url : dataurl.website + 'checkCrawler.html'}
            ],
            copywriting : [
            	{name : '毒鸡汤', url : dataurl.copywriting + 'poisonousChickenSoup.html'},
                {name : '社会经典语录', url : dataurl.copywriting + 'socialClassicQuotations.html'},
                {name : '舔狗日记', url : dataurl.copywriting + 'lickDogDiary.html'},
                {name : '一言', url : dataurl.copywriting + 'aBriefRemark.html'}
            ],
            other : [
               	{name : '微博热搜榜', url : dataurl.other + 'blogHotSearch.html'},
            	{name : '万能翻译', url : dataurl.other + 'universalTranslata.html'},
               	{name : '字符串加密/解密', url : dataurl.other + 'stringEncryption&Decryption.html'}
            ]
        }
        // 更新日志数据
        var toupdate = [
            {
                date : '2023.01.16更新日志',
                data : [
                    '<span class="c-f40">New&nbsp</span>“<span class="c-f40" data-toggle="modal" data-target="#exampleModal">联系作者</span>”新增“积木交流群”',
                    '<span class="c-f40">New&nbsp</span>调整功能页面在pc端的位置',
                    '<span class="c-f40">New&nbsp</span>修复安卓版下载链接复制后未显示复制成功',
                    '<span class="c-f40">New&nbsp</span>修复“<a href="' + dataurl.informationquery + 'queryICP.html">ICP备案查询</a>”查询失败',
                    '<span class="c-f40">New&nbsp</span>修复“<a href="' + dataurl.other + 'stringEncryption&Decryption.html">字符串加密/解密</a>”切换按钮UI变形',
                    '<span class="c-f40">New&nbsp</span>删除本地源代码文件减少文件大小',
                    '<span class="c-f40">New&nbsp</span>删除失效功能"查询QQ空间访客"',
                    '<span class="c-f40">New&nbsp</span>删除失效功能"QQ估价(娱乐)"',
                    '<span class="c-f40">New&nbsp</span>删除失效功能"骚扰电话查询"',
                    '<span class="c-f40">New&nbsp</span>删除失效功能"今日节日"',
                    '<span class="c-f40">New&nbsp</span>删除失效功能"网址缩短"',
                    '<span class="c-f40">New&nbsp</span>删除失效功能"网址还原"',
                    '<span class="c-f40">New&nbsp</span>删除失效功能"彩虹屁"',
                    '<span class="c-f40">New&nbsp</span>删除失效功能"随机笑话"',
                    '<span class="c-f40">New&nbsp</span>删除失效功能"土味情话"',
                    '<span class="c-f40">New&nbsp</span>删除失效功能"伤感语录"',
                    '<span class="c-f40">New&nbsp</span>删除失效功能"MD5加密/解密"',
                    '<span class="c-f40">New&nbsp</span>文字加密/解密改名为“<a href="' + dataurl.other + 'stringEncryption&Decryption.html">字符串加密/解密</a>”',
                    '<span class="c-f40">New&nbsp</span>优化代码逻辑',
                    '<span style="color: #055;">注释&nbsp</span>软件的接口都是别人的，所以不知道什么时候功能就会失效'
                ]
            },
        	{
               	date : '2022.04.10更新日志',
                data : [
                	'<span style="color: #f00;">重要&nbsp</span>这款作品是处在某一段学习(Ajax)的时候写的，不会一直停留在这一阶段，所以这可能会是最后一个版本',
                   	'修复“<a href="' + dataurl.qq + 'qqEvaluation.html">QQ估价</a>”功能部分查询失效问题',
                	'删除"电影实时排行榜"，因接口一直处于关闭状态',
                   	'删除底部"全部功能"按钮，功能全部显示在"首页"',
                    '整改"更新日志"页面样式',
                    '下雪特效功能存放本地，加快进软件加载速度'
                ]
            },
        	{
               	date : '2022.02.16更新日志',
                data : [
                	'划分功能代码，方便作者查询'
                ]
            },
        	{
               	date : '2022.02.13更新日志',
                data : [
                	'更改底部按钮样式',
                   	'图片存入本地，加快加载速度'
                ]
            },
        	{
               	date : '2022.02.06更新日志',
                data : [
                	'去除多余重复代码',
                	'去除部分手机按钮有多余边框问题',
                   	'由于方法在公网，公网加载速度太慢，方法已经存放在本地，不可避免会加大软件本身大小'
                ]
            },
        	{
               	date : '2022.02.05更新日志',
                data : [
                	'新增“<a href="' + dataurl.qq + 'qqMeasuringGoodAndBadLuck.html">QQ号测凶吉</a>”功能',
                   	'添加满屏下雪效果'
                ]
            },
        	{
               	date : '2022.02.04更新日志',
                data : [
                	'新增“<a href="' + dataurl.informationquery + 'idCardInformationQuery.html">身份证信息查询</a>”功能'
                ]
            },
        	{
               	date : '2022.01.30更新日志',
                data : [
                	'新增“<a href="' + dataurl.informationquery + 'todayHoliday.html">今日节日</a>”功能',
                	'“信息查询专区”把关于信息查询的功能分为一个专区'
                ]
            },
        	{
               	date : '2022.01.29更新日志',
                data : [
                	'新增“<a href="' + dataurl.informationquery + 'GetiPInformationplaceOfOwnership.html">获得IP信息归属地</a>”功能',
                   	'“<a href="' + dataurl.informationquery + 'todayInHistory.html">历史上的今天</a>”功能添加接口不稳定提示'
                ]
            },
        	{
               	date : '2022.01.28更新日志',
                data : [
                	'新增“<a href="' + dataurl.other + 'MD5Encryption&Decryption.html">MD5加密/解密</a>”功能',
                	'将“查询相关文字”改为“文案专区”'
                ]
            },
        	{
               	date : '2022.01.27更新日志',
                data : [
                	'新增“<a href="' + dataurl.copywriting + 'randomJokes.html">随机笑话</a>”功能',
                   	'新增“<a href="' + dataurl.copywriting + 'earthyHoneyWords.html">土味情话</a>”功能',
                	'新增“<a href="' + dataurl.website + 'shortenTheUrl.html">网址缩短</a>”功能',
                   	'新增“<a href="' + dataurl.website + 'reductionOfUrl.html">网址还原</a>”功能',
                	'点击底部按钮滚动条自动置顶(本页回到最顶处)',
                	'把“其他功能”里关于网站的功能分出一个专区'
                ]
            },
        	{
               	date : '2022.01.26更新日志',
                data : [
                	'新增“<a href="' + dataurl.copywriting + 'rainbowFart.html">彩虹屁</a>”功能',
                   	'新增“<a href="' + dataurl.copywriting + 'queryQQSpaceVisitors.html">查询QQ空间访客</a>”功能',
                    '新增“<a href="' + dataurl.copywriting + 'sadSayings.html">伤感语录</a>”功能',
                	'第二专区(查询相关文字)把一些查询文字的方法列入进去',
                   	'主页各分区标题颜色改变',
                   	'全部功能里按钮颜色随分区分开'
                ]
           	},
        	{
               	date : '2022.01.25更新日志',
                data : [
                	'新增“<a href="' + dataurl.copywriting + 'poisonousChickenSoup.html">毒鸡汤</a>”功能',
                   	'新增“<a href="' + dataurl.copywriting + 'socialClassicQuotations.html">社会经典语录</a>”功能',
                    '新增“<a href="' + dataurl.copywriting + 'lickDogDiary.html">舔狗日记</a>”功能',
                    '新增“<a href="' + dataurl.copywriting + 'aBriefRemark.html">一言</a>”功能',
                    '新增“<a href="' + dataurl.copywriting + 'todayInHistory.html">历史上的今天</a>”功能',
                	'修复“<a href="' + dataurl.other + 'blogHotSearch.html">微博热搜榜</a>”功能排名不全问题',
                    '主页“其他”功能多显示一排'
                ]
            },
        	{
              	date : '2022.01.24更新日志',
                data : [
                	'“<span class="c-f40" data-toggle="modal" data-target="#exampleModal">联系作者</span>”里软件更新地址新增“蓝奏云盘”下载地址',
                   	'修改“更新日志”返回置顶图标样式',
                    '调整“<span class="c-f40" data-toggle="modal" data-target="#exampleModal">联系作者</span>”密码布局'
                ] 
            },
        	{
               	date : '2022.01.23更新日志',
                data : [
                	'新增“<a href="' + dataurl.website + 'queryDomainNameRegistration.html">域名注册查询</a>”功能',
                   	'新增“<a href="' + dataurl.other + 'textEncryption&Decryption.html">文字加密/解密</a>”功能',
                    '新增“<a href="' + dataurl.website + 'queryWebSiteTitle.html">查询网站标题</a>”功能',
                    '“<a href="' + dataurl.other + 'universalTranslata.html">万能翻译</a>”功能输入框外框样式修改'
                ]
           	},
        	{
               	date : '2022.01.22更新日志',
                data : [
                	'新增“<a href="' + dataurl.other + 'universalTranslata.html">万能翻译</a>”功能',
                   	'新增“<a href="' + dataurl.qq + 'queryQQPConline.html">QQ电脑在线查询</a>”功能',
                   	'删除本地框架，利用网络框架(减少软件大小，所以没网络加载不出来页面，其实软件功能也无论如何都需要网络支持都能使用)',
                    '删除本地图片，利用网络图片(减少软件大小，所以页面底栏图片没做动画，换了另一种效果样式)',
                    '压缩剩余图片，减小软件大小',
                    '“<a href="' + dataurl.other + 'blogHotSearch.html">微博热搜榜</a>”功能添加一键返回置顶',
                    '更新日志添加一键返回置顶',
                    '更新日志顶部添加提示语',
                    '改变全部功能的一共功能文字颜色',
                    '整理更新日志',
                    '日志前加“New”，代表此版本更新内容'
                ]
           	},
        	{
               	date : '2022.01.21更新日志',
                data : [
                	'新增“<a href="' + dataurl.informationquery + 'visitorInformation.html">访客相关信息查询</a>”功能',
                   	'新增“<a href="' + dataurl.other + 'blogHotSearch.html">微博热搜榜</a>”功能',
                    '修正“<a href="' + dataurl.informationquery + 'visitorInformation.html">访客相关信息查询</a>”功能页面滑动问题',
                    '修正“<a href="' + dataurl.other + 'blogHotSearch.html">微博热搜榜</a>”功能排名问题',
                   	'主页样式修改',
                   	'删除多余代码',
                ]
            },
        	{
               	date : '2022.01.20更新日志',
                data : [
                	'修复软件已运行时间以后可能会出现的问题'
                ]
            },
        	{
               	date : '2022.01.19更新日志',
               	data : [
                  	'更改新的软件包名，旧版本请卸载',
                    '“主页”改为“首页”',
                    '首页顶部添加软件已运行的时间',
                  	'“<span class="c-f40" data-toggle="modal" data-target="#exampleModal">联系作者</span>”添加点击复制信息按钮',
                    '调整“<span class="c-f40" data-toggle="modal" data-target="#exampleModal">联系作者</span>”布局',
                    '增加功能里回车键可以执行查看功能',
               		'修改功能里输入框样式',
                    '修正功能里"来自接口"的链接',
                    '修复QQ强制聊天的接口错误',
                    '部分按钮改成半透明',
                    '整理数据删除没必要数据'
               	]
           	},       	         
			{
               	date : '2022.01.18更新日志',
               	data : [
                  	'新增“<a href="' + dataurl.informationquery + 'queryTelAttribution.html">手机号归属地查询</a>”功能',
                    '新增“<a href="' + dataurl.other + 'filmRankingList.html">电影实时排行榜</a>”功能(未开放)',
                    '新增“<a href="' + dataurl.qq + 'qqForceChat.html">QQ强制聊天</a>”功能',
                    '新增“<a href="' + dataurl.qq + 'qqForceCard.html">QQ跳转资料卡</a>”功能',
                    '移除加载圈，添加加载动画',
               		'“主页”宽度收缩',
                    '“主页”顶部留缝',
                    '“全部功能”两按钮分开',
                    '按钮文字溢出可以滑动按钮看溢出文字',
                    '修复更新日志布局',
                    '修改页面数据加载逻辑',
                    '整理数据删除没必要数据',
                    '修复若干问题'
               	]
           	},
           	{
               	date : '2022.01.17更新日志',
               	data : [
               		'新增“<a href="' + dataurl.website + 'queryICP.html">ICP备案查询</a>”功能',
                    '新增“<a href="' + dataurl.website + 'checkCrawler.html">效验爬虫真实性</a>”功能',
                    '新增“<a href="' + dataurl.informationquery + 'queryHarassTel.html">骚扰电话查询</a>”功能',
                    '“<span class="c-f40" data-toggle="modal" data-target="#exampleModal">联系作者</span>”增加“软件更新链接”',
                    '功能里文字清除机制(操作成功清除)',
                    '底部“功能”按钮改名为“主页”',
                    '打开软件内容浮现出来',
                    '按钮添加图标，切换按钮添加过渡动画',
                    '优化代码，改变UI样式，优化功能UI，整理代码结构'
               	]
           	},
           	{
               	date : '2022.01.16更新日志',
               	data : [
                  	'2022年01月16日00时“积木”诞生',
               		'新增“<a href="' + dataurl.qq + 'getQQNameImg.html">获取QQ昵称和头像</a>”功能',
                    '新增“<a href="' + dataurl.qq + 'qqEvaluation.html">QQ估价</a>”功能',
                    '添加<span class="c-f40" data-toggle="modal" data-target="#exampleModal">打赏</span>功能',
                    '功能里添加操作执行后的结果反馈',
                    '更新日志功能添加跳转链接',
                    '修复手机状态栏显示问题',
                    '优化功能界面，优化代码'
               	]
           	}
        ]
        var fnnum = 0;
        // 数据载入
        // QQ专区数据输入及输入进全部功能里
        $(allfunctiondata.QQ).each(function (i, e) {
       		$('#homepage .fn-qq p').append('<a class="col-4"></a>').children('a').eq(i).html(e.name).prop('href', e.url)
        })
        fnnum += allfunctiondata.QQ.length;
        //	信息查询专区数据输入及输入进全部功能里
        $(allfunctiondata.informationquery).each(function (i, e) {
       		$('#homepage .fn-informationquery .row').append('<a class="col-4"></a>').children('a').eq(i).html(e.name).prop('href', e.url)
        })
        fnnum += allfunctiondata.informationquery.length;
        //	网站专区数据输入及输入进全部功能里
        $(allfunctiondata.website).each(function (i, e) {
       		$('#homepage .fn-website .row').append('<a class="col-4"></a>').children('a').eq(i).html(e.name).prop('href', e.url)
        })
        fnnum += allfunctiondata.website.length;
        // 文案专区数据输入及输入进全部功能里
        $(allfunctiondata.copywriting).each(function (i, e) {
       		$('#homepage .fn-copywriting .row').append('<a class="col-4"></a>').children('a').eq(i).html(e.name).prop('href', e.url)
        })
        fnnum += allfunctiondata.copywriting.length;
        // 其他功能专区数据输入及输入进全部功能里
        $(allfunctiondata.other).each(function (i, e) {
        	$('#homepage .fn-other .row').append('<a class="col-4"></a>').children('a').eq(i).html(e.name).prop('href', e.url)
        })
        fnnum += allfunctiondata.other.length;
        // 更新日志数据输入
        $(toupdate).each(function (i, v) {
        	$('#toupdate').append('<ul class="row"><li><span class="update-date">' + v.date + '</span><ul class="update-content"></ul></li></ul>')         
            $(v.data).each(function (index, value) {
            	$('#toupdate > ul > li > ul').eq(i).append('<li></li>').children('li').eq(index).html(value)
            })      	
        })
        // 输出一共的功能数量
        $('#homepage .func-num span').html(fnnum)
    }
    data()
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