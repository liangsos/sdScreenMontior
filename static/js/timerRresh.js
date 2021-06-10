var bTime="2020-10-10 09:50";
var eTime="2020-12-24 09:55";
var subDayNums=100;//默认取近几天的数据 

$(function(){
	setStartEndTime();//计算查询日期
	 iniDefaultSelectedInfo(); //初始化配置页面
	createFillData();//填充每块数据
});

 /**
  * 设置开始 结束时间
  */
 var currentDate=null;
 var beforeDate=null;
   function setStartEndTime(){
 	 currentDate = new Date();
 	var year = currentDate.getFullYear();
 	var month = currentDate.getMonth() + 1;
 	if(month<10){month="0"+month}
 	var day =currentDate.getDate();
 	if(day<10){day="0"+day}
 	var hh = currentDate.getHours(); //获取时
 	if(hh<10){hh="0"+hh}
 	var mm = currentDate.getMinutes(); //获取分
 	if(mm<10){mm="0"+mm}
 
 	eTime=year + "-" + month + "-" + day + " " + hh + ":" + mm;  
 	    beforeDate=new Date();
 	    beforeDate.setDate(beforeDate.getDate()-subDayNums);
 		 year = beforeDate.getFullYear();
 		 month = beforeDate.getMonth() + 1;
 		if(month<10){month="0"+month}
 		 day =beforeDate.getDate();
 		if(day<10){day="0"+day}
 		 hh = beforeDate.getHours(); //获取时
 		if(hh<10){hh="0"+hh}
 		 mm = beforeDate.getMinutes(); //获取分
 		if(mm<10){mm="0"+mm}
 		bTime=year + "-" + month + "-" + day + " " + hh + ":" + mm;  
   }
   
