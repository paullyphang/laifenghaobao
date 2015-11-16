
//自动抢红包JS代码

var ts = 0.1;
var	timer1,timer2;
 
function findHb() {
	if(JQuery(".middle_star")!=null) {
		JQuery(".middle_star").click();
	}else{
		console.info("当前页面没有待拆红包");
	}
}

timer2 = window.setInterval(findHb,ts*1000);

function getHb(){
	if(JQuery(".big_bonus_active_btn")!=null){
		JQuery(".big_bonus_active_btn").click();
	}else{
		console.info("当前页面没有红包");
	}
}

timer1 = window.setInterval(getHb,ts*1000);
