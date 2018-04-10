<script>
	var user = document.getElementById('user'),
		pwd = document.getElementById('pwd'),
		rpwd = document.getElementById('rpwd'),
		btn = document.getElementById('btn');
	user.onblur = function(){
		var regName = /^\w{6,12}$/;   //6-12位，可以有数字 字母 下划线
		if(regName.test(this.value)){
			this.nextElementSibling.innerHTML = "用户名正确";
		}else{
			this.nextElementSibling.innerHTML = "用户名输入有误";
		}
	}
	tel.onblur = function(){
		var regTel = /^1[3-8]\d{9}$/;   //1开始，3-8中的1位数字，9位数字
		if(regTel.test(this.value)){
			this.nextElementSibling.innerHTML = "手机号正确";
		}else{
			this.nextElementSibling.innerHTML = "手机号输入有误";
		}
	}
	pwd.onblur = function(){
		var regPwd = /^\w{6,12}$/;   //6-12位，可以有数字 字母 下划线
		if(regPwd.test(this.value)){
			this.nextElementSibling.innerHTML = "密码正确";
		}else{
			this.nextElementSibling.innerHTML = "密码输入有误";
		}
	}
	btn.onclick = function(){
		if(span1.innerHTML === "用户名正确"){
			if(span2.innerHTML === "手机号正确"){
				if(span3.innerHTML === "密码正确"){
					alert("注册成功！");
					location.href = "index.html";
				}else{
					alert("密码输入错误");
				}
			}else{
				alert("手机号输入错误");
			}
		}else{
			alert("用户名输入错误");
		}
	}
</script>