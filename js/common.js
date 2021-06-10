function resizeElement() {

	// var img_leidajianshi = document.getElementById("img_leidajianshi");
	// var img_shuiqingjianshi = document.getElementById("img_shuiqingjianshi");
	// var img_jiangyuyubao = document.getElementById("img_jiangyuyubao");
	// var img_zhandianjianshi = document.getElementById("img_zhandianjianshi");
	var boxHeight = (document.documentElement.clientHeight - 85) / 3 - 50;
	var boxWidth = document.documentElement.clientWidth / 4 - 50;
	// var map_legend = document.getElementById("map_legend")
	// map_legend.style["margin-top"] = "" + (boxHeight * 2 + 40) + "px";
	// var map_option = document.getElementById("map_option")
	// console.log(map_option.clientHeight);
	// map_option.style["margin-top"] = "" + ((boxHeight + 50) * 2 - map_option.clientHeight - 30) + "px";
	// map_option.style["margin-left"] = "" + ((boxWidth + 50) * 2 - map_option.clientWidth - 50) + "px";
	
	if ((document.documentElement.clientWidth / 4) / ((document.documentElement.clientHeight - 85) / 3)  > 410 / 250)
	{
		var img_height = boxHeight;
		var img_width = img_height / 250 * 410;
		// img_leidajianshi.style["height"] = "" + boxHeight + "px";
		// img_leidajianshi.style["width"] = "" + (boxHeight / 250 * 410) + "px";
		// img_leidajianshi.style["margin-top"] = "auto";
		// img_leidajianshi.style["margin-left"] = "" + (boxWidth / 2 - img_width / 2) + "px";
		
		// img_shuiqingjianshi.style["height"] = "" + boxHeight + "px";
		// img_shuiqingjianshi.style["width"] = "" + (boxHeight / 250 * 410) + "px";
		// img_shuiqingjianshi.style["margin-top"] = "auto";
		// img_shuiqingjianshi.style["margin-left"] = "" + (boxWidth / 2 - img_width / 2) + "px";
		
		// img_jiangyuyubao.style["height"] = "" + boxHeight + "px";
		// img_jiangyuyubao.style["width"] = "" + (boxHeight / 250 * 410) + "px";
		// img_jiangyuyubao.style["margin-top"] = "auto";
		// img_jiangyuyubao.style["margin-left"] = "" + (boxWidth / 2 - img_width / 2) + "px";
		
		// img_zhandianjianshi.style["height"] = "" + boxHeight + "px";
		// img_zhandianjianshi.style["width"] = "" + (boxHeight/ 250 * 410) + "px";
		// img_zhandianjianshi.style["margin-top"] = "auto";
		// img_zhandianjianshi.style["margin-left"] = "" + (boxWidth / 2 - img_width / 2) + "px";
	}
	else
	{
		var img_width = boxWidth;
		var img_height = img_width / 410 * 250;
		// img_leidajianshi.style["width"] = "" + img_width + "px";
		// img_leidajianshi.style["height"] = "" + img_height + "px";
		// img_leidajianshi.style["margin-top"] = "" + (boxHeight / 2 - img_height / 2) + "px";
		// img_leidajianshi.style["margin-left"] = "auto";
		
		// img_shuiqingjianshi.style["width"] = "" + img_width  + "px";
		// img_shuiqingjianshi.style["height"] = "" + img_height + "px";
		// img_shuiqingjianshi.style["margin-top"] = "" + (boxHeight / 2 - img_height / 2) + "px";
		// img_shuiqingjianshi.style["margin-left"] = "auto";
		
		// img_jiangyuyubao.style["width"] = "" + img_width  + "px";
		// img_jiangyuyubao.style["height"] = "" + img_height + "px";
		// img_jiangyuyubao.style["margin-top"] = "" + (boxHeight / 2 - img_height / 2) + "px";
		// img_jiangyuyubao.style["margin-left"] = "auto";
		
		// img_zhandianjianshi.style["width"] = "" + img_width  + "px";
		// img_zhandianjianshi.style["height"] = "" + img_height + "px";
		// img_zhandianjianshi.style["margin-top"] = "" + (boxHeight / 2 - img_height / 2) + "px";
		// img_zhandianjianshi.style["margin-left"] = "auto";
	}
	
	var container_table_height = "" + ((document.documentElement.clientHeight - 85) / 3 - 60) + "px";
	var container_duty_table_height = "" + ((document.documentElement.clientHeight - 85) / 3 - 72) + "px";
	var container_table_width = "" + ((document.documentElement.clientWidth) / 4 - 20) + "px";
	
	var sd_map = document.getElementById("sd_map");
	var sd_map_bg = document.getElementById("sd_map_bg");
	
	var container_gaojingxinxi = document.getElementById("container_gaojingxinxi");
	container_gaojingxinxi.style["max-height"] = container_table_height;
	container_gaojingxinxi.style["max-width"] = container_table_width;
	
	var container_mianyuliang = document.getElementById("container_mianyuliang");
	container_mianyuliang.style["max-height"] = container_table_height;
	container_mianyuliang.style["max-width"] = container_table_width;
	
	var container_shuiqingjianshi = document.getElementById("container_shuiqingjianshi");
	
	var container_jiangyuyubao = document.getElementById("container_jiangyuyubao");
	
	var container_zhandianjianshi = document.getElementById("container_zhandianjianshi");
	
	var container_tianqijianshi = document.getElementById("container_tianqijianshi");
	container_tianqijianshi.style["max-height"] = container_table_height;
	container_tianqijianshi.style["max-width"] = container_table_width;
	
	var container_zhibanrenyuan = document.getElementById("container_zhibanrenyuan");
	container_zhibanrenyuan.style["max-height"] = container_table_height;
	container_zhibanrenyuan.style["max-width"] = container_table_width;
	
	var coutainer_leidajianshi = document.getElementById("coutainer_leidajianshi");
	coutainer_leidajianshi.style["max-height"] = container_table_height;
	coutainer_leidajianshi.style["max-width"] = container_table_width;
	
	if (getBrowser() === 'FF')
	{
		container_gaojingxinxi.style["height"] = container_table_height;
		container_mianyuliang.style["height"] = container_table_height;
		container_shuiqingjianshi.style["height"] = container_table_height;
		container_jiangyuyubao.style["height"] = container_table_height;
		container_tianqijianshi.style["height"] = container_table_height;
		container_zhandianjianshi.style["height"] = container_table_height;
		container_zhibanrenyuan.style["height"] = container_table_height;
		coutainer_leidajianshi.style["height"] = container_table_height;
		
		sd_map.style["height"] = ((document.documentElement.clientHeight - 85) / 3 * 2) - 14 + 'px';
	}
	
	var warning_table = document.getElementById("warning_table");
	warning_table.style["height"] = container_table_height;
	var rain_table = document.getElementById("rain_table");
	rain_table.style["height"] = container_table_height;
	var weather_table = document.getElementById("weather_table");
	weather_table.style["height"] = container_table_height;
	var duty_table = document.getElementById("duty_table");
	duty_table.style["height"] = container_duty_table_height ;
	//var scrollBoxArrs = documnent.getElementsByClassName("mCustomScrollBox");
	//if (scrollBoxArrs && scrollBoxArrs.length > 0)
	//{
	//	for (i = 0; i < scrollBoxArrs.length; i++)
	//	{
	//		var scrollBox = scrollBoxArrs[i];
	//		scrollBox.style["height"] = container_table_height;
	//	}
	//}
}

function getBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) { //判断是否Opera浏览器
        return "Opera"
    }
    ;
    if (userAgent.indexOf("Firefox") > -1) { //判断是否Firefox浏览器
        return "FF";
    }
    ;
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    ;
    if (userAgent.indexOf("Safari") > -1) { //判断是否Safari浏览器
        return "Safari";
    }
    ;
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) { //判断是否IE浏览器
        return "IE";
    }
    ;
}

// function optionClick()
// {
// 	var map_option = document.getElementById("map_option");
// 	var openCloseBtn = document.getElementById("img_option");
// 	if (openCloseBtn.src.indexOf("images/controls/triangle_down.png") > -1)
// 	{
// 		console.log(openCloseBtn.src + '11111111111111');
// 		map_option.style["height"] = "16px";
// 		openCloseBtn.src = "images/controls/triangle_up.png";
// 	}
// 	else
// 	{
// 		console.log(openCloseBtn.src);
// 		map_option.style["height"] = "133px";
// 		openCloseBtn.src = "images/controls/triangle_down.png";
// 	}
// 	var boxHeight = (document.documentElement.clientHeight - 85) / 3 - 50;
// 	var boxWidth = document.documentElement.clientWidth / 4 - 50;
// 	map_option.style["margin-top"] = "" + ((boxHeight + 50) * 2 - map_option.clientHeight - 30) + "px";
// 	map_option.style["margin-left"] = "" + ((boxWidth + 50) * 2 - map_option.clientWidth - 50) + "px";
// }

function optionYuLiangClick()
{
	var option_yuliang = document.getElementById("option_yuliang");
	if (option_yuliang.src.indexOf("images/controls/radio_open.png") > -1)
	{
		option_yuliang.src = "images/controls/radio_close.png";
	}
	else
	{
		option_yuliang.src = "images/controls/radio_open.png";
	}
}

function optionLeiDaClick()
{
	var option_leida = document.getElementById("option_leida");
	if (option_leida.src.indexOf("images/controls/radio_open.png") > -1)
	{
		option_leida.src = "images/controls/radio_close.png";
	}
	else
	{
		option_leida.src = "images/controls/radio_open.png";
	}
}