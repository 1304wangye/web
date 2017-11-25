$(function() {
	
	// 常用乘船人信息数据
	var passengerData = [
		{
			id:1,
			name:'王大川',
			codeTypeId:1,
			codeType:'身份证',
			code:'2202045678951',
			mobile:'13608965458',
			isDefault:true
		},
		{
			id:2,
			name:'张三',
			codeTypeId:1,
			codeType:'身份证',
			code:'220204565671111',
			mobile:'13608961111',
			isDefault:false
		},
		{
			id:3,
			name:'李四',
			codeTypeId:2,
			codeType:'军人证',
			code:'220204565672222',
			mobile:'13608961111',
			isDefault:false
		},
		{
			id:4,
			name:'王五',
			codeTypeId:3,
			codeType:'港澳台通行证',
			code:'220204565673333',
			mobile:'13608963333',
			isDefault:false
		},
		{
			id:5,
			name:'赵六',
			codeTypeId:4,
			codeType:'其他证件',
			code:'220204565674444',
			mobile:'13608964444',
			isDefault:false
		},
		{
			id:6,
			name:'钱七',
			codeTypeId:1,
			codeType:'身份证',
			code:'220204565675555',
			mobile:'13608965555',
			isDefault:false
		},
	];
	
	//获得默认乘车人数据
	$('#defaultPassenger').html('<label><input type="checkbox" id="' + passengerData[0].id 
		+ '" />' + passengerData[0].name + '</label>');
	
	//获得其他乘车人数据
	var passStr = '';
	for (var i = 1;i < passengerData.length;i ++) {
		passStr += '<label><input type="checkbox" id="' + passengerData[i].id + '" />' + passengerData[i].name + '</label>';
	}
	$('#passengerBlock').html(passStr);
	//乘车人信息：更多按钮
	$('#moreBtn').click(function() {
		
		if ($('#moreBtn').html() == '更多&gt;&gt;'){
			$('#moreBtn').html('<<收回');
			$('#passengerBlock').css('display','inline-block');
		} else {
			$('#moreBtn').html('更多>>');
			$('#passengerBlock').css('display','none');
		}
		
	});
	
	//取票人信息：更多按钮
	$('#moreBtn2').click(function() {
		
		if ($('#moreBtn2').html() == '更多&gt;&gt;'){
			$('#moreBtn2').html('<<收回');
			$('#allQupianren').css('display','inline-block');
		} else {
			$('#moreBtn2').html('更多>>');
			$('#allQupianren').css('display','none');
		}
		
	});
	
});