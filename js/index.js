function ShowLoginBox(){
	layer.open({
		type:1,//弹出已个页面层
		title:'登录',
		area:["393px","300px"],
		content:$("#dloginbox")
	})
}

function Login(){
	var username = $.trim($("#txtUserName").val());
	var pwd = $.trim($("#txtPwd").val());
	if(username  == "" || pwd==""){
		layer.msg("用户密码不能为空",{
			icon:5
		});
	}else{
		$.post("/Handlerl.ashx",{"username":username,"pwd":pwd},function(data){
			if(data == "ok"){
				laye.msg("登录成功",{
					icon:6
				},function(){
					layer.closeAll();
					location.href = "http://www.baidu.com";
				})
			}else{
				layer.msg("用户名或密码错误",{
					icon:5
				})
			}
		})
	}
	
}
