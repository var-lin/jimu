$(function () {
    // 下次不提示更新本地存储数据
    if(!localStorage.getItem('updataTip')) {
        localStorage.setItem('updataTip', 'true')
    }
    // 遮掩层样式
    $('.cover').css({
        width : $(window).width(),
        height : $(window).height()
    })
    // 判断最新版本
    $.get('https://lhshilin.github.io/jimu/updata.json', function (res) {
        if('2023.01.22.00' === res.updataV) {
            console.log('已经是最新版本')
        }else if(localStorage.getItem('updataTip') == 'true' || localStorage.getItem('updataV') !== res.updataV) {
            $('.updata').stop().fadeIn(1500)
            $('.cover').show()
            $('body').css('overflow', 'hidden')
        }
        $('.updata .androidUrl a').prop('href', res.androidUrl).children('span').html(res.androidUrl)
        $('.updata .updatabtnleft').on('click', function () {
            $('.updata').stop().fadeOut(300)
            $('.cover').hide()
            $('body').css('overflow', 'visible')
            localStorage.setItem('updataTip', 'false')
            localStorage.setItem('updataV', res.updataV)
        })
    })
})