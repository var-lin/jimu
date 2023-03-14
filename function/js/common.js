$(function () {
	// 显示
	$('.container').fadeIn(300);
	// 聚焦输入框
	$('input:eq(0)').focus();
	// 获取数据函数
	window.getData = function (nullTip) {
		if(text === '') return $('.result').html('请把数值写上吧，亲').fadeOut(3000);
	}
	// 点击按钮获取数据
	$('button').click(function () {
		$('.result').html('请稍等').fadeIn(1000)
		getdata()        			
	})
	// 按下回车回去数据
	$(window).on('keydown', function (e) {
		if(e.keyCode === 13) {
        	$('.result').html('请稍等').fadeIn(1000)
        	getdata()
        }
    }
})

$('.container').fadeIn(300);
$('input:eq(0)').focus();
function getdata() {
		var text = $('input').val();
   	if(text === '') return $('.result').html('内容不能为空').fadeOut(3000);
    // ajax获得数据
		$.get('https://api.wer.plus/api/dub', {t : text}, function (res){
			if(res.data.text === null) return $('.result').html('未查到').fadeOut(3000);
			$('.data ul li:eq(0) a').attr('href', res.data.img_url).children('img').attr('src', res.data.img_url)
        $('.data ul li:eq(1) span').html(res.data.text)
     	$('.data').fadeIn(500)
        $('.result').html('操作成功').fadeOut(3000)
        $('input').val('')                                                    
		})
	}
$('button').click(function () {
	$('.result').html('请稍等').fadeIn(1000)
		getdata()        			
	})
	$(window).on('keydown', function (e) {
		if(e.keyCode === 13) {
        $('.result').html('请稍等').fadeIn(1000)
        getdata()
    }
	})