$(function () {
    // 侧边栏设置
    function setting(e, dataName, tacitConsent, target, callback) {
        if(!localStorage.getItem(dataName)) localStorage.setItem(dataName, tacitConsent);
        var key = localStorage.getItem(dataName) === 'true';
        if(target) key ? $(target).show() : $(target).hide();
        $(e).children('input').prop('checked', key)
        $(e).on('click', function () {
            $(this).children('input').prop('checked', !key)
            localStorage.setItem(dataName, !key)
            key = !key;
            if(target) key ? $(target).show() : $(target).hide();
            if(callback) callback(key)
        })
        if(callback) callback(key)
    }
    // 首页设置
        // 显示/隐藏历史浏览
    setting('.sidebar .setting .set_historyBrowsing', 'historyBrowsing', true, '#homepage > .historyBrowsing')
        // 开启/关闭历史浏览删除音
    setting('.sidebar .setting .set_historyBrowsing_deleteSound', 'historyBrowsing_deleteSound', true)
        // 显示/隐藏下雪动画
    setting('.sidebar .setting .set_xiaxue', 'xiaxue', true, null, function (key) {
        if(key) {
            $('body').append('<canvas class="xiaxue"></canvas>')
            $("canvas.xiaxue").let_it_snow()
        } else {
            $('canvas.xiaxue').remove()
        }
    })
    // 功能页设置
        // 输入框保存上次输入的数据
    setting('.sidebar .setting .set_dataRtention', 'dataRtention', true)
        // 输入框查询后保留数据
    setting('.sidebar .setting .set_inputRtention', 'inputRtention', true)
    // 功能链接数据加载
    axios.get('https://lhshilin.github.io/jimu/allFunctionData.json').then((res) => {
        res = res.data;
        $('#homepage .row p').css('height', 'auto').html('')
        var fnnum = 0,
            aElement = '<a class="col-4" target="_blank"></a>';
        // 数据载入
        // QQ专区数据输入及输入进全部功能里
        $(res.QQ).each(function (i, e) {
            $('#homepage .fn-qq p').append(aElement).children('a:last').html(e.name).attr('href', e.url)
        })
        fnnum += res.QQ.length;
        // 使用工具数据输入及输入进全部功能里
        $(res.usingTools).each(function (i, e) {
            $('#homepage .fn-usingTools p').append(aElement).children('a:last').html(e.name).attr('href', e.url)
        })
        fnnum += res.usingTools.length;
        //  信息查询专区数据输入及输入进全部功能里
        $(res.informationquery).each(function (i, e) {
            $('#homepage .fn-informationquery .row').append(aElement).children('a:last').html(e.name).attr('href', e.url)
        })
        fnnum += res.informationquery.length;
        //  网站专区数据输入及输入进全部功能里
        $(res.website).each(function (i, e) {
            $('#homepage .fn-website .row').append(aElement).children('a:last').html(e.name).attr('href', e.url)
        })
        fnnum += res.website.length;
        //  解析专区数据输入及输入进全部功能里
        $(res.analysis).each(function (i, e) {
            $('#homepage .fn-analysis .row').append(aElement).children('a:last').html(e.name).attr('href', e.url)
        })
        fnnum += res.analysis.length;
        //  热搜榜专区数据输入及输入进全部功能里
        $(res.hotSearchList).each(function (i, e) {
            $('#homepage .fn-hotSearchList .row').append(aElement).children('a:last').html(e.name).attr('href', e.url)
        })
        fnnum += res.hotSearchList.length;
        // 文案专区数据输入及输入进全部功能里
        $(res.copywriting).each(function (i, e) {
            $('#homepage .fn-copywriting .row').append(aElement).children('a:last').html(e.name).attr('href', e.url)
        })
        fnnum += res.copywriting.length;
        // 其他功能专区数据输入及输入进全部功能里
        $(res.other).each(function (i, e) {
            $('#homepage .fn-other .row').append(aElement).children('a:last').html(e.name).attr('href', e.url)
        })
        fnnum += res.other.length;
        // 输出一共的功能数量
        $('.fn-num span').html(fnnum).parent().show()
        mysteriouCode(res)
        // 加载历史浏览
        if(!localStorage.getItem('historyBrowsingList')) {
            localStorage.setItem('historyBrowsingList', "{}")
        }
        var historyBrowsingList = JSON.parse(localStorage.getItem('historyBrowsingList')),
            ele = '<li><a target="_black"></a></li>',
            timer;
        if(historyBrowsingList !== {}) {
            var count = 0;
            for(var key in historyBrowsingList) {
                $.each($('#homepage .jumbotron .row a'), function (i, e) {
                    if($(e).html() == key) count ++;
                })
                if(count == 1) {
                    count = 0;
                    $('#homepage > .historyBrowsing').append(ele).find('a:last').attr('href', historyBrowsingList[key]).html(key)
                } else {
                    count = 0;
                    delete historyBrowsingList[key];
                    localStorage.setItem('historyBrowsingList', JSON.stringify(historyBrowsingList))
                }
            }
        }
        // 首页搜索功能
        $('.search .search-box input').removeAttr('readonly')
        $('.search .search-content').css('width', $('.search .search-box').width())
        function searchEach(zoneName, zoneData, text, count) {
            var value,
                textToLower = text.toLowerCase(),
                textToUpper = text.toUpperCase();
            $.each(zoneData, function (i, v) {
                value = v.name;
                if(value.indexOf(textToLower) >= 0 || value.indexOf(textToUpper) >= 0) {
                    switch(zoneName) {
                        case 'QQ' :
                            value = 'Q Q-';
                            break;
                        case 'usingTools' :
                            value = '实用-';
                            break;
                        case 'informationquery' :
                            value = '信息-';
                            break;
                        case 'website' :
                            value = '网站-';
                            break;
                        case 'analysis' :
                            value = '解析-';
                            break;
                        case 'hotSearchList' :
                            value = '热搜-';
                            break;
                        case 'copywriting' :
                            value = '文案-';
                            break;
                        case 'other' :
                            value = '其他-';
                            break;
                        case 'mysteriouCode' :
                            value = '秘密-';
                            break;
                    }
                    $('.search .search-content').append('<li><span></span><a target="_black"></a></li>').find('span:last').html(value).siblings('a').html(v.name).attr('href', v.url)
                    count ++;
                }
            })
            return count
        }
        function search() {
            clearTimeout(timer)
            var timer = setTimeout(function () {
                var text = $('.search .search-box input').val(),
                    mysteriouCode = localStorage.getItem('mysteriouCode') === 'true',
                    count = 0;
                if(text == '') {
                    $('.search .search-content').hide()
                    return;
                }
                $('.search .search-content').html('<li class="search-tip">共搜索到 <span class="search-tip-count"></span> 个功能</li>')
                $.each(res, function (i, v) {
                    if(i == 'mysteriouCode') {
                        if(mysteriouCode) {
                            count = searchEach(i, v, text, count)
                        }
                    } else {
                        count = searchEach(i, v, text, count)
                    }
                })
                if(count) {
                    $('.search .search-content .search-tip .search-tip-count').html(count)
                    count > 8 ? $('.search .search-content').css('height', '234px') : $('.search .search-content').css('height', 'auto');
                    count = 0;
                } else {
                    $('.search .search-content .search-tip').html('未搜索到功能')
                    $('.search .search-content').css('height', 'auto')
                }
                $('.search .search-content').show()
            }, 500)
        }
        $('.search .search-box input').on({
            'input' : search,
            'focus' : search
        })
        $('.search .search-box img').on('click', function () {
            $('.search .search-box input').val('')
            $('.search .search-content').html('')
            $('.search .search-content').hide()
        })
        // 点击添加历史浏览函数
        function addHistoryBrowsing(e) {
            var fnName = $(e).html(),
                fnHref = $(e).attr('href'),
                count = 0;
            if(!fnHref) return;
            $.each($('#homepage > .historyBrowsing li a'), function (i, e) {
                if($(e).html() == fnName) {
                    count ++;
                }
            })
            if(count == 0) {
                historyBrowsingList[fnName] = fnHref;
                $('#homepage > .historyBrowsing').append(ele).find('a:last').attr('href', fnHref).html(fnName)
                localStorage.setItem('historyBrowsingList', JSON.stringify(historyBrowsingList))
            }
        }
        $('.search .search-content').on('click', function (e) {
            if(e.target !== this) {
                addHistoryBrowsing(e.target)
            }
        })
        // 点击功能里功能新增到历史浏览
        $('#homepage .jumbotron .row').on('click', function (e) {
            if(e.target !== this) {
                addHistoryBrowsing(e.target)
            }
        })
        // 历史浏览长按删除
        function removeHistoryBrowsing(e) {
            timer = setTimeout(function () {
                $(e).parent().remove()
                delete historyBrowsingList[$(e).html()]
                localStorage.setItem('historyBrowsingList', JSON.stringify(historyBrowsingList))
                if(localStorage.getItem('historyBrowsing_deleteSound') === 'true') {
                    $('.historyBrowsing_deleteSound')[0].play()
                }
            }, 1000);
        }
        function removeHistoryBrowsingAll() {
            timer = setTimeout(function () {
                $('#homepage > .historyBrowsing').html('')
                historyBrowsingList = {};
                localStorage.setItem('historyBrowsingList', "{}")
                if(localStorage.getItem('historyBrowsing_deleteSound') === 'true') {
                    $('.historyBrowsing_deleteSound')[0].play()
                }
            }, 2000)
        }
        $('#homepage > .historyBrowsing').on({
            'mousedown' : function (e) {
                if(e.target == this) {
                    removeHistoryBrowsingAll()
                } else {
                    removeHistoryBrowsing(e.target)
                }
            },
            'touchstart' : function (e) {
                if(e.target == this) {
                    removeHistoryBrowsingAll()
                } else {
                    removeHistoryBrowsing(e.target)
                }
            },
            'mouseup' : function () {
                clearTimeout(timer)
            },
            'touchend' : function () {
                clearTimeout(timer)
            }
        })
        // 滚动条到某功能位置侧边栏功能变色
        var fnScrollTop = [],
            fnHeight = [],
            htmlScrollTop;
        $(window).on('scroll', function () {
            htmlScrollTop = $(this).scrollTop();
            $.each($('#homepage .jumbotron'), function (i, v) {
                fnScrollTop[i] = Math.floor($(v).offset().top) - 41;
                fnHeight[i] = Math.floor(fnScrollTop[i] + $(v).height());
            })
            if(htmlScrollTop >= fnScrollTop[0] && htmlScrollTop <= fnHeight[$('#homepage .sidebar .navigaBar li').length - 1]) {
                $.each(fnScrollTop, function (i, v) {
                    if(htmlScrollTop >= v && htmlScrollTop <= fnHeight[i]) {
                        $('#homepage .sidebar .navigaBar li').eq(i).addClass('select').siblings().removeClass('select')
                    }
                })
            } else {
                $('#homepage .sidebar .navigaBar li').removeClass('select')
            }
        })
    }).catch((err) => {
        $('#homepage .row p .loaddingImg').css({
            'animationPlayState' : 'paused',
            'animation' : 'fn_loaddingImgrotate'
        }).attr('src', './images/bug.svg').on('click', function () {
            window.location.reload()
        })
        $('#logo').on('click', function () {
            window.location.reload()
        })
    })
    // 更新日志数据输入
    axios.get('https://lhshilin.github.io/jimu/log.json').then((res) => {
        $('#toupdate > img').remove()
        res = res.data;
        $(res).each(function (i, v) {
            $('#toupdate').append('<ul class="row"><li><span class="update-date">' + v.date + '</span><ul class="update-content"></ul></li></ul>')         
            $(v.data).each(function (index, value) {
                $('#toupdate > ul > li > ul').eq(i).append('<li></li>').children('li:last').html(value)
            })          
        })
    }).catch((err) => {
        $('#toupdate > img').css({
            'animationPlayState' : 'paused',
            'animation' : 'update_loaddingImgrotate'
        }).attr('src', './images/bug.svg').on('click', function () {
            window.location.reload()
        })
    });
    // 反馈功能 feedback
    (function () {
        var key = true,
            name,
            certno;
        $('#feedback').on('click', function () {
            togglePrompt(true, '.feedbackBox')
            $('.feedbackBox input:eq(0)').focus()
        })
        $('.feedbackBox input').on('keydown', function (e) {
            if(e.keyCode == 13) send()
        })
        $('.feedbackBox button:eq(0)').on('click', function () {
            togglePrompt(false, '.feedbackBox')
        })
        $('.feedbackBox button:eq(1)').on('click', send)
        function send() {
            if(key) {
                key = false,
                name = $('.feedbackBox input:eq(0)').val(),
                certno = $('.feedbackBox input:eq(1)').val(),
                email = $('.feedbackBox input:eq(2)').val();
                $('.feedbackBox .message').html('请稍等');
                if(name == '') {
                    key = true;
                    return $('.feedbackBox .message').html('请输入标题');
                }
                if(certno == '') {
                    key = true;
                    return $('.feedbackBox .message').html('请输入内容');
                }
                if(email == '' || email.indexOf('@') < 0) {
                    key = true;
                    return $('.feedbackBox .message').html('请输入正常的邮箱联系方式,方便回复你');
                }
                $.ajax({
                    url : 'https://api.yuxli.cn/api/mail/mail.php',
                    type : 'get',
                    dataType : 'text',
                    data : {
                        address : '1352058684@qq.com',
                        name : name,
                        certno : certno + ' 联系方式：' + email
                    },
                    success : function (res) {
                        $('.feedbackBox .message').html(res)
                        $('.feedbackBox input').val('')
                        key = true;
                    },
                    error : function (err) {
                        $('.feedbackBox .message').html('反馈失败，可能发送反馈接口有问题，请在侧边栏点击联系作者')
                        key = true;
                    }
                })
            }
        }
    })();
    // mysteriouCode
    function mysteriouCode(res) {
        function mysteriouCodeUrl() {
            $(res.mysteriouCode).each(function (i, e) {
                $('#homepage .fn-mysteriouCode .row').append('<a class="col-4" target="_blank"></a>').children('a').eq(i).html(e.name).attr('href', e.url)
            })
            // 输出一共的功能数量
            $('.fn-num span').html(parseInt($('.fn-num span').html()) + res.mysteriouCode.length)
            $('.fn-mysteriouCode').show()
            $('.sidebar .navigaBar').append('<li style="color: #a0a;">秘密区</li>')
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
                        togglePrompt(true, '.mysteriouCode')
                        $('.mysteriouCode input').focus()
                        $('.mysteriouCode input').on('keydown', function (e) {
                            if(e.keyCode === 13) {
                                $('.mysteriouCode .mysteriouCodeRight').click()
                                $('.mysteriouCode input').on('keydown', null)
                            }
                        })
                    }
                }, 1000)
                return timer
            }
            function clear() {
                togglePrompt(false, '.mysteriouCode')
                $('.mysteriouCode input').on('keydown', null)
            }
            $('.mysteriouCode .mysteriouCodeLeft').on('click', clear)
            $('.mysteriouCode .mysteriouCodeRight').on('click', function () {
                var key = $('.mysteriouCode input').val();
                if(key === '') {
                    return $('.mysteriouCode .mysteriouCodeTip .meg').html('密码不能为空')
                }
                axios({
                    url : 'https://api.qqsuu.cn/api/dm-md5',
                    method : 'get',
                    params : {
                        text : key
                    }
                }).then((res) => {
                    res = res.data;
                    if(res.code !== 200) return $('.mysteriouCode .mysteriouCodeTip .meg').html('判断的接口出错,请联系作者修复')
                    if(res.md5 === '871925f4b0a5cd9e35cd0340edea0e82') {
                        $('.mysteriouCode .mysteriouCodeTip .meg').html('密码正确')
                        mysteriouCodeUrl()
                        localStorage.setItem('mysteriouCode', 'true')
                        clear()
                        $('html').animate({
                            'scrollTop' : $('html').prop('scrollHeight')
                        })
                    } else {
                        $('.mysteriouCode .mysteriouCodeTip .meg').html('密码错误')
                    }
                }).catch((err) => {
                    $('.mysteriouCode .mysteriouCodeTip .meg').html('判断的接口出错,请联系作者修复')
                })
            })
            $('#logo').on({
                mousedown : function (e) {
                    e.preventDefault()
                    down()
                    $('#logo').on('mouseup', function () {
                        count = 0;
                        clearInterval(timer)
                    }) 
                },
                touchstart : function (e) {
                    e.preventDefault()
                    down()
                    $('#logo').on('touchend', function () {
                        count = 0;
                        clearInterval(timer)
                    })
                }
            })
        }
    };
    $(window).on('storage', (e) => {
        if(e.originalEvent.key == 'mysteriouCode' || e.originalEvent.key == 'chatGPT3.0apikey') {
            localStorage.setItem(e.key, e.originalEvent.oldValue)
        }
    })
})