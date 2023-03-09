$(function () {
    // 当前版本信息写入
    var version = '2023.03.10.0',
        sourceCodeUrl = 'https://lhshilin.github.io/jimu/download/积木' + version + '版本源码.zip',
        androidUrl = 'https://lhshilin.github.io/jimu/download/积木_' + version + '.apk';
    $('#sourceCodeDownload').attr('data-clipboard-text', sourceCodeUrl)
    $('#sourceCode a').attr({
        href : sourceCodeUrl,
        download : '积木' + version + '版本源码.zip'
    })
    $('#androidDownload').attr('data-clipboard-text', androidUrl)
    $('#android a').attr({
        href : androidUrl,
        download : '积木_' + version + '.apk'
    })
    // 下次不提示更新本地存储数据
    if(!localStorage.getItem('updateTip')) {
        localStorage.setItem('updateTip', 'true')
    }
    // 判断最新版本
    $.get('https://lhshilin.github.io/jimu/update.json', function (res) {
        function showUpdate() {
            $('.sidebar .about button').html('有新版本').css('color', '#f40')
            $('.update').stop().fadeIn(1500)
            $('body > .cover').show()
            $('body').css('overflow', 'hidden')
        }
        if(version === res.updateV) {
            $('.sidebar .about button').html('已最新版本')
        }else if(localStorage.getItem('updateTip') == 'true' || localStorage.getItem('updateV') !== res.updateV) {
            showUpdate()
        } else {
            $('.sidebar .about button').on('click', showUpdate)
        }
        var updateAndroidUrl = 'https://lhshilin.github.io/jimu/download/积木_' + res.updateV + '.apk';
        $('.update .androidUrl a').prop('href', updateAndroidUrl).children('span').html(updateAndroidUrl)
        $('.update .updatebtnleft').on('click', function () {
            $('.update').stop().fadeOut(300)
            $('body > .cover').hide()
            $('body').css('overflow', 'visible')
            localStorage.setItem('updateTip', 'false')
            localStorage.setItem('updateV', res.updateV)
        })
        $('.update .updatebtnright').on('click', function () {
            window.location.href = updateAndroidUrl;
        })
    });
})