/* //项目上下文路径
var ctx="http://127.0.0.1:8848/hhszy-daping-03/"
 */
//URL带参数
var _addvcd = get_url_param("addvcd");
if (_addvcd == null || _addvcd == undefined || _addvcd == "")
    _addvcd = "37";
//当前页面IP+端口号
var _host = window.location.host;
var selectOptionHtml = "";
var mapData = new HashMap(); //每个选项对应的title
//mapData 所有类别数据集合 title
mapData.put("1", "告警信息");
mapData.put("2", "水情监视");
mapData.put("3", "天气监视");
mapData.put("4", "面雨量");
mapData.put("5", "降雨预报");
mapData.put("6", "雷达监视");
mapData.put("7", "地图监视");
mapData.put("8", "站点监视(水情)");
mapData.put("9", "值班人员");
mapData.put("10", "站点监视(雨情)");
mapData.put("11", "站点监视(墒情)");
mapData.put("12", "降雨监视");
mapData.put("13", "台风");

//地市不展示站点监视 add by hzx 2021-04-06
if (_addvcd.length > 2) {
    mapData.remove("8");
    mapData.remove("10");
    mapData.remove("11");
}

var mapDataUrl = new HashMap(); //每类数据对应的URL
mapDataUrl.put("1", "http://"+_host+"/web_front/ekanban_shuai/alarm.html?addvcd=" + _addvcd);
mapDataUrl.put("2", "http://"+_host+"/sdsq_web/other_dmxx?addvcd=" + _addvcd);
mapDataUrl.put("3", "http://"+_host+"/web_front/ekanban_shuai/weather.html?addvcd=" + _addvcd);
mapDataUrl.put("4", "http://"+_host+"/web_front/ekanban_shuai/arearain.html?addvcd=" + _addvcd);
mapDataUrl.put("5", "http://"+_host+"/web_front/dp_z/pic.html?tp=4&addvcd=" + _addvcd);
mapDataUrl.put("6", "http://"+_host+"/web_front/dp_z/pic.html?tp=2&addvcd=" + _addvcd);
mapDataUrl.put("7", "http://"+_host+"/sdsq_web/other_monitor?addvcd=" + _addvcd);
mapDataUrl.put("8", "http://"+_host+"/web_front/dp_d/con_sq.html?addvcd=" + _addvcd);
mapDataUrl.put("9", "http://"+_host+"/web_front/sd_dp_c/index.html?addvcd=" + _addvcd);
mapDataUrl.put("10", "http://"+_host+"/web_front/dp_d/con_yq.html?addvcd=" + _addvcd);
mapDataUrl.put("11", "http://"+_host+"/web_front/dp_d/con_hq.html?addvcd=" + _addvcd);
mapDataUrl.put("12", "http://"+_host+"/web_front/dp_z/pic.html?tp=3&addvcd=" + _addvcd);
mapDataUrl.put("13", "http://typhoon.nmc.cn/web.html?addvcd=" + _addvcd);

var mapDataImage = new HashMap(); //每类数据对应的的icon
mapDataImage.put("1", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAADlklEQVRYR+2YS8xdUxzFf4vSSsUjTcSrpQgJSqr1foSKDqhigEhaU6+kkUhMMBAGotSkXjExQBjU6wshgrbehAgS9YogXpGgCZWilqybfb6ce757zq3b9hvI9x+du89/77322uv/OFdsg9neCXgN2AtYKOn3UZfTqBMzz/Y+wI9ljXmSPhp1ve0J5BhJH04BqV3N9mXE9lzgIeApSbd3Ud3QyFAgtg8ErgEelPRJfe0JGrF9GfBItAiskLS6DYzt3Qoj04G5kr7r8J0DrI0f8LCkZcOA7Bw2gPOALcDFkp7o2OAgYEbzhHV/2wHxMnAIkBBfLOn1TiAlLGeWiccDfwBnS3qjmmh7IXABMB/YtwD+FngLWCPp85rvAcD6GoglksJMn7WGb7n/bJ5TfCzpSNsnAHcBp3RoJ1f6JHCdpC9t35FnYBMQEGFmgnXmEduHA48CLxYt3Abk6mIbyvhXZSy+i4EwEPsNuBz4ArgRuFvSurYDbFVCs30DcGtZJNnzWkkB12e2A/JSYCWwP/A3cEmXxqoFhgKxvQR4GojvGmC5pOim1cq1PgssKFeyQFIYbLVhVzMD+BSYDbwKLJL0V9eC1Tvbs4D3gF7ESFq0LUCuAO4D/gSOqkdDbcMIOOG9StKd9c0Km2Nl7NRmyNZ9hzHyCnBaMq2k5QM0cXRJUjn9SknXD/B5HzgWuFfS1f9ZrCVrbgR2AS6UlCQ3brYPBQJ0P+AF4HxJmwcAScTcUqWAViC2jwNOLEmp8nsXyKJVWZ8j6ZvadSREAyLp+u2inYFNke1zgWeAaCslITno5CL+LJm8s1a2fwb2biDtJR/gpTI+U1LGemb7A2Be+flDiYxq0RS0KtTjm0O+WXyzT+pRANXtpwBJpjwH2LWWrBIhD5RTZ0JqSY9229FVIumwFprHJC2tgU45eKf8Tkt5E3BmY+5YV4qPSEN/H5ACJolrj/JuT+A54AjgM+AMSWGpYq8PiKToboKNBKS2SSh+HjgdSKoPiK/ru5QCOc7IjgLyWFI48H0BMV51J5uRnPRg4Ky2Dn6yGNk9eUbSLy3Cjbh3vEbaNp90jUwB2RoGmj5TGvl/MWI7he+kUgDT9KQgxi4qjXDzwNNKv9IcT+nI118srcLN5Tmfm2mofwUel5TnnvXVGtv3AFeNIsoR5lwp6f42ICuAfBClK4v9UxqkQfukj837puUzNe8GWVqJNEL55llW/z/lX93/uMm3+azUAAAAAElFTkSuQmCC");
mapDataImage.put("2", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAiCAYAAADYmxC7AAADmklEQVRYR+2XS6ydYxiFn0VcUlRV4z5oU9G0ETVASNwStBGXiFuatFSEuNQ9HSjRYmDQiIEEcRdEgtQ1NFokQomk7UBoDGrgVFCCQQlRsmSdfH+yz+/f//n3OYd20G+yd/Z3W9/7rrXedwvA9u6S/s73nWEogIAfgQWS1uwsoPYC/gAWSnphF6g+EUj6dkWqCz1GRAp4Hzi8y8bamvnADUBE8wTwyhjO2CLph+wbd/psnwxEtVcBuwGPANdLem4MwIa3TASot4FNkpYWz7sWuAuYIenPsQAbFyjbU4rHzZW0qYDaE9hSorVqR4A6L+mSdETv5bYfAqZIWtgGqhj3KcB6Sb9Wa8cbqXuAROmCGqhzQ3hJh/QDZXsysBaYCZwj6dNGUIWwBw0Q8geBr4DHanv2LUq+qKSy6cjbgNnANcBvwFZJP42b6LY/A1ZKer5+q+0vgLslvdwwF5Wm3l4u6a36fN/02T4OuCwKBVZLWt1weHgwT9LHDXPPAN9Lur1hblYUC0yWlCiNGKNyyvYewMXAGcCtkrYVlR2cS4FDJeVzxLB9c+HKvIa5s4HH6wIZmOi2pwP3AldK+sv2ScC7kvZpIozt04BVkqY1gFoMBHSyMQPYVrn5wJyyfTxwoaRlthcAyyXN6QNqf+AXYLqkoZo6bwLuAF4FNgMfSFrfT31dat/pwIHAfsCxwC0tao15Pgy8V9aECqmR2Rca5Hs1hiSF/GMrM7bzykuBdZKW9ANl+6VYRolsOJn6GGM9M8Dq/jYwpxp4EcWlti3tDX0tTTHXpDnG+BHwVOHj/UUgjY7fZgkzJcUYG4ftb6NG4ADg6GIdaV22lw0uoG8EpvZK3/ajw2mSYpz/Gm2gkt/zJX3SEKW4/lbgMEnftQCPx30DLJH0WrXO9uvARkmJZDuoSBiYVFalR3oReLJhX3xmJXBkC8mrqayL7C/pWfslsKyor/p5e/U3r955BkhV+xLaeNEVDRdXL1zRAdTUUlPvBN4BzgLuA04Ffu/ZH/f/uVV9to8CPgeOkZSXDQ/bewNfA1dLeqMDqOy5DngAiDhOBFZICtkbR2uZsZ1+ey4wv3qF7eXAImBOlNQFVHnMCSXy4dKHbftGAxV+haAB9mYxzPRKKcLrugIadF2XghwFpYlLLYvcn65a30Ev67q+jehdz5iodRPT5E0Umvo5o6bvv7q4K9GfBTbsCBC1O4cSqfTL6Wn6/vP4n4Fu/gdWcs9Oqo7+eQAAAABJRU5ErkJggg==");
mapDataImage.put("3", "data:image/png;base64,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");
mapDataImage.put("4", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABO0lEQVRYR+2YMUoEQRBF3z+OeAADBTERRBNRMHCNFEwUE++gsYGrHkBxg91YxUjB2BOVzNLIgF3L7DQDO1KTzq/+xe+q+jUjFvzRgudHJFh6Q6FgZwqa2TmwV0rQMP5R0kMO616xmX0Cqw0JSmFvkjYjwQIZQ8EC8aah/1PBA2CpVJqG8e+SPubq4oYHdw7rr9WZ2Rmwn5HIgCtJr9U7MxsAJ46Ut5JGCbcNXEJ2g2rlJFVNrDnEN5IuEvEY2HVwFfFhwt0Bpw6uVRdHgjU1Q8GowT/NNWNhrcbMtaSX1J1HwLHTnUNJzwm3k8ZMDvok6T6cpAvfm7XybwDrDumvuZvZCrDl4L5qpbCcnCnH+S1pMtcVm1kM6hjUsSw4u9m0NPrQJN6vj3CS+jzs7zdJF7bV5sxQsI1qvarBHz0KGzhNSzgLAAAAAElFTkSuQmCC");
mapDataImage.put("5", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAFLElEQVRYR82YB4heVRCFv2PvHSu22AuKokaxNxR7wY5iEMWCFRULYlCIYsOGooi9kajYRQU7Chawxm5ix15ib0fOcl98/vnL23/ziwMLu/vmzpx778yZuSMGILYPAc4ATpB0w0hdaKQG2q23/Q0wH/A1sLCkP0fiZ7qDtL0MMKkGanVJr/3fQK4JvFgDtZqkif8JSNujgA8k/dHNoe3FgE+KzufA4r2u2/b80ZeUMJlGGl237e2A+wIS2F/SEz2A3gtsAxwg6ZYeulsBNwFzZI2kp1v1m4I8rWRr1icJjpB0RSfntmcBFpH0YQ+AewI3AzMWvUskHdUvyKVKnA1dSwG6vqTn+4012ysDLwMzFxs/AutKer0vkFlke1PgQWDWYuRySYePAORxwPll/VfAjpKe6Tsmq4W2k7nXAUsAW0rKSQyJ7ZzIaGALYGNgQ2D2EsePBpCkV2r6qwGPAInBYyS932nDjWKyR1zFxgHAOSHuLrp/AecCp/bK9r6vu0uSXAUcNIxrv1HS/sPQp+tJ2p4N2BpI7OUK5yzGw2fPlrK3T81hODRZfzfwGzA3sEHZRP2Ux0k6tSnQtiBtzwucCBxZHDWx9xywnaQvW5VtJzZDNbvUvu0k6Z4mhqcBaXs94DZgySYGajpfFP6c0G5dSaxsJMkXeVlS9XtXV/8CaXujQjNh/0p+Kf97FQiHfQssDawN5KrrullziqSzOgDdBHi89q1RXZ8K0vYqQHZaxV1sXQ6MlZQaPI3YngtI7zi2JSx2kXRXhzXfAfOUbydKSsYPie2E14Llz3DnbZI+HQJpeybgTSBNRCSG9pIU8u4pthcBQsTLFuUfgOUlfda62PaTQG4scqGkYwuGMcDVLfpJvpUqkHWF8FlKXk61sdhesdxEdUppRuq/hw1uBFJpdiqGp2a57dzaoW0crliBTP9XBXHf5c72wcCVjXcGUzPc9gIhemAtYAYgiThe0gSVQl8VdQ8dr/T2MBxNVbWdbubdklhNTCwkKbHXVQIyMXFB0XpM0ua9FnX7bnscsFmxWXFmYv0wYJ3a2hD/qk0OJCDTlO5dFp8uKa+8gYjt3QqpV53US6EyScmDjhKQ6VCy88g+km4dCMJi1PaBwDU1H/v26t4DMlm3blmUni6t/0DFdgpDWrVIuHCPXif5UGkiojdG0rUDRfgPaV9c/EySVPFzW9c5yctKUEfhUklh/YGK7TWAxGNkiqSKTzuCTG93ffn6UeijVyCPdAe2VwDeKnYmS6oqVUeQ2cWntUZhP0lpqwYmtncF7igOHpG0ZdeYzEfbeRClXEVSb9eTlLI2EGmhvTwnwq0dpSqL6TzyEKo6oJzsFpLe6IUyV9eEkCs7tUFD/hVCX7RX1am3aruXZrey91NpwdKp/N4OrO0dgDuBkySd12BDxwNn14YBjRK1tek9GWg9+snF8K2S0sINie0dgdtrj/s8Sy9qBWp7ofKaTN+5Uu17SuYoSVN6ba7d82F7IIPPalpR2ThP0gkFYCrUw0D60LpsLOmpotNaWep63wNbNW0HOz3E0jal8Ti61nFvL+l+21mTBjk00iqZSy4nhX6HBgn1EWCl+zGws6QXep1g9b3XkzavxjTE+Rkt6Rfb4bT3ujiIXkptQqKa+OadlMo2vpTBX5sCjN6wJxi2M2ZuO0csjretnh2FtPNQm9gp+ZqAHTbIckKhpnoSVL7ykszQ9Ocmzpvq9AsyA9IH2tzEgZIy0Jqu0hfIcpppr84sCfROGURlqDDd5W88AuR3MreTGwAAAABJRU5ErkJggg==");
mapDataImage.put("6", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEm0lEQVRYR8WYZ4idVRCGn9eCKPaOLTGKolFswWAJgahBYsEeLAgSRYkNwUSjPxKjaDBRFNSISFCUgCL2ggWNLXZ/RBELqFiwG40oQsSRdznfcvbs93177+7ddf7de+fMee6cOXNmRrRIRBwM3AJMBuZIurlNfzR+U5PRiBgPvA9skelcJsnAYya1gBGxUYLbs4ZkTCGbAB8ATmtx05hBDgKMiJOBhwq4P4BNiu/GBHIAYERsBnwKbJvBPAVcAqwEtisgZ0taOpoBWQJeDVyXbfg9sLek1RExAXgF2HEkkBGxPnA5cCjwGXCjJO9TK/2AEbEB8DWwTaZ5kqRHqs8RMQ54fSSQEfE8cGS2x3fAPpJ+rSPMAU8FHsyUPgd2lxT5wpFARsQMwCFTyhJJc4YCfBw4rpOcN1zIiJgPLKgBeVJSvne/Sp8HI2Id4C/Ax2z5B9ha0u9NsdECOUvSsnJdRPg1ehFwji1lrqTFjR6MiEnAO5nCSkmHNcEVMemLs0um65A4N4dMcC8AG9fYfAmYLslOGSSVB88H7sx+XSjJxzGkRIRvtVNQLWREHAi8XMD9CdwEvAf4eP9t2qgCvDXlukrvGElPD0mXFFogrwcuApxfK1kDTJNkuCGlAiyftkmdGsiOu86TJcAvCW7VkGRJoQL01XcKqGScpK86NdIh5I/A4ZKcnDuWCtABfES2avO2G9xmveG4vWSZpFkdkxUe9GtxQrZ4N0lO1MOSBOnb7ecxl0WS5nVjtPKg89Y52cIpkl7rxlCpGxEuLHy7RwRZAS4Crsg2mSkpf/aGxdoLyArwdGB5RrFY0txhURWLRgpZAe4BfJLZ/ljSXr0AtI0WyAWSrmnbJ69mfvL7mylPkPRFjyH9opR9zjxJDrFayQFvAy7MtK6SdEOvAJMn7QBfvo4hc8BD0q2rmJz1nbD9bvZMIqIryLLkdx98QEYzX9LCntElQy2QgxqxEnA68GwGZO+Nl/Tz/wVZAvrzh26UMqA3gKmS1o4S5ApgYmG735N5DJ4ILKnJ/F67XNKZvQZMF8ejlVebIKs8eCzwKLBuC0TX72infygimiAvVmrWXVpt2oFBv9nntVXAHdioVUmQHwHbZwprDOiqN68wnF6cOL8EZgKnFBaf8XeS3GT1RCLCvfjdwPGFwQ8M+C5wUPrBjctESR5/9ElE3A+U8fcN4FnhXSPJk2lY4BrxWmDLAu434GgD/p21m6sk7ZcrRoTrxP7pQo2RO/zvu3kWI2JXd37ABTVg3sIOmCGpz4POcVuljX8AdshjLCJmA7d3cJZvAfemTm014FGG+2pPxfx6uD6cAnh6Vp1YndkngLMl2YMY8DngqEzTMM5DayNiX8C/54H7cKq+3ez3UvynLpV0X27UgGcBA74ETP9tSth5Mu8bUaQjuhI4o6EZ7wbcGeQeYGndlKupaarbwNCTiwu0YZrn+BJN6wLWHZ47STtmRTmgGuDBdFMdI4+lmV0dnGPJ44m3m1wTEesBHqFMBXZKYzynDyd/j0Pcbnp096akvDhu9Xb+1DmmXPo7F+0P7AzY/X6GXFT2vGDoJA7+A2Ki05IfVpoJAAAAAElFTkSuQmCC");
mapDataImage.put("7", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAB7klEQVRIS+2XPWsVURCGn9dGJI3YBEETrBTyCwJ+NSHBFEo+CKS0U1AIKIiiRQikUEQUtLMUxCQY0KAkhfiBtYWFnahFQBArRRRfmXhuOFkhu5vrvdWdZvfsnDPPmTmzs7OiILZ3AA+BAUBFfY2xgWXghKTv+boNRm1vAx4AIzWMl01dAMYl/W5MLEJvAmeSchFYKrO4if4YcDzpb0k6+w/U9jngalI8A4Yk/dgq1PZ24AlwNNk4L+la3K95ansCuAdEeN8CByV93Sqwsc72TuAl0AdEeCcl3ZftI8BTIHYWiivAh2aB2foeYDo5FJEbDOgq0P0fIWWmVgMaqd1WyaGRSHdbSD8J/E2kzNPTku60Cmr7FHC7A90QYdu7JH0pht12F/CrWEA2mV8tvLZngQvAlKQb2Uu/D3gDfAYOSPqZiswUcB2YlXQx32jlM7X9HDgEzEsay6DDwKM07pH0MUHngFFgRVJ8pdalDvRFlMQSaK+ktQpmuwONKFROpPaG1/Ze4BUQ10/A6ywvdqezjkePgW9J1w/sAd4DhxsJls673FPbM8ClJsrijKTLWcZXgu5PnUQ0anUlGrHoFN7VgtallM2vnEhlhuroO9BosqNza5VEOR0P49E5RAfYzO9D3U06oOFhfBnaAY4mcOEPcXRoofAsqX0AAAAASUVORK5CYII=");
mapDataImage.put("8", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAjCAYAAACD1LrRAAADNklEQVRYR+2YS6jVVRTGf58ZSOlA0wgF0x6koPYwB5poIJJSA5EoCRNBDYoEC5Uc3AZ5QVC5PiEiBJXLnXQhkCIziCzESivxhYJK4kB8T5yVfrKO+1yOl/+TW10HrcE5cPb/v769vrXWt9c+IpntycBHwAxgODCgudbH79vAVeBHYJ2k38Of4sP2YuBzYGAfQcpe/xtYJmmnbL8A/Aw8CJwDNgN/xn7KvFRcj+DGACuAJ4C/gKkB/AXwOnAWmCLpRkWHtR6zPRQ4BDwJdAfwJeBRYLmk7bW81XzY9nJgK3AtgCP5Qcdrkr6u6avW47ZfBb5qFJftZi7/B65LY3RF9H9vuyXpcmrb6lTbHgv8lIrvy7zd2D4GTMhZb5PUXjnHtocAB1L/hc+Zkn7Lcm57C/BSxloUb7ukPXWAu5Oz6cAuYDTwYpO6Wrm4q5DlVNsOpdkIzJK03/ZjQER7EnhFUkRSy0qBbU8CfgU2SGprerc9G9gLrJLU0Ypq+ylgXMZOol33S7pZCGz7AeAXICKaJimEvcdsbwLeASZJCpltmO2LQLCSZVskrSgDfhfYlnJ5pLcX2w8lug9LCo1vAi/KKa7Y+GeSjuYCA9+lk+kbSUsKWuctoDMdKplVnlP52cUFDAa6gGckncmINqh8FrgA7AG+lxS0V7KiiOcB84F5kkI0mjSOACK3C4CogSiYm8AVSXHMRY7fBJ7PKa5OSSeKgJcGaHr5eIrqOvAhMDLD6Q1JwxLwlRzJjOVPJb1XBDwHeL8Sb3cfOiGpIZO2nwMmZrx7C9gn6WoRcAh9rh5nON0uKQ73SlYEvA841aLNRQ5jdpoo6XQl1DLJtB10x5QQRVRkH0ta21KAbwAxrYZYfJvo/yTRvzLEpopkLkzj7qCcKl0vKWbwHrMds/MjwZik8bYj93FUhu2QtLQUOO32aWA1MBcYFQNaaC7QISmOynvM9m7g7RRxyOPDwB8pbYskdVUCrpq3XlEPkxTt1zDbUaxDmr/9a8Blm71vgPttru63m0S/3Z3iXnyw5bYYp9D5f/i2+DjwwT23xVT2//39uKXnIvI1wMtJgcq6o856iM8P6R+BxsRyB7WG+lHjvjLfAAAAAElFTkSuQmCC");
mapDataImage.put("9", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAESElEQVRYR7WYaaydUxiFn6XUUENCYh5jqoQSLlpC4wcxpaFUJxGSBmmUiFlJxVDFD4RGpUGaNNSQIlIxhD8ajbFRMQ+peYh5npesa3+ce3vP+b7Te73/zrffvfba77yPWA2xvTEwGTgM2BVYD/gKWA48CDwk6c9uoNWNsu01gHOBS4ANOux9HThV0lNN8RsTsb02cB9wdAv4B8CzwPfAlsABwPplPRY5S9LcJmS6IbIImFhA38ohwCOSXB1kewQwHbisuCtrkyXdXUemERHbk4C7Ctgy4HBJ37UDt70v8DiwEfANsLOkLzqRaUrkNWBkAR0p6bO6G9qeANxT9GZLmjkoIrZHAS8VkFmSLq8j0eKqF4C9gZWSdhgskfi8CrjdJb3SBZFY4cqiv7Wkj9rtrXWN7dnARQVguKTfuyCS4E6QR/aT9NxgiMQVlxaAEZJ+6oLIVGBh0d9LUuXiVSCaWOQU4Pay80BJT3dB5FrgPOAvYBNJyaABpQmRBNk7QHRvlXR6EyK21wLeBrYFnpeUlG4rtUSy0/aTwCFA4mOMpGRDR7Edd1YZNl3SLUNBZDSwFBgGfAwcIWlFO2Db04B5Rf9NYA9Jvw2aSLHKxcBVBexn4HpgvqSVZT0NMb3mHOCYovcDMFbSi3UWbOSaCsR2bnlaP9BPgZT7zYENW9bS9MZJeriORNZridiOzrHADOBgIDdvKj8Ci4HrJL282q6xvU/xdU8/kKRhZo5PgD9a1jIgbQfsAgxv+Z70XZBUlvTlQITaWsT22cA1QNIwku45H7g3vUdSwHvF9rDWicx2CI0FTgKOB9YsqinxEySlg/eRAYnYvhE4s2gm2lOY5kiKqfuI7RS7KWXuuH+A9Z2AG4CjyloCPWSWtOquQsT2FWUUjN6HwPhOPcJ2NSJcLSmZNaDYPqNkWqzzC3CopJSEXulDxPY44IHyPWmZ1Hu/HXhxyxzgAmC0pGdqdMcDmdZCJjPNKEmf9yFiO9PUG8BmwLfA/pLyu6PYTkdNMM+UlE5dpx/L3FSUFknKa+A/i9hOsapMO03SbQ1AQzqVNim9VNJBdXuKFfPkiPUz06aRLut1je1M3omHWCVVsKd1KO7g92RF0jKSNN5U0td1ZGzvWNI/Llos6biKSCvgpCZTd7lA62SfTxMlVXNqnYsyjGcoTyPdoiJSAaZU51a/NrhVGmACLa++ShZIOrlub7nEkUCVwlMrIu+VuWGJpNYHVFvMYt7MG62yQtKeDYmk6KVCp2DOle11gRSqkOpYC/ofYDvxEbdWMTJFUipvI7H9KrAb8FiIbANUtWKGpJsbofwT5MmWO0plPbFpbFX4th8tD/nlIZIm1TtTABdKSn9pLIXM9pLebbypKNrO/Dsm/yKESG4Vi2xVHtO5YfrB/y2ZhU8oh8yrgjXvjzu7nDWGimhKfc+/vcZ20mlW6j+wzlCd0gEnGfMEcH7c+jei/pojTV7mqwAAAABJRU5ErkJggg==");
mapDataImage.put("10", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAjCAYAAACD1LrRAAADNklEQVRYR+2YS6jVVRTGf58ZSOlA0wgF0x6koPYwB5poIJJSA5EoCRNBDYoEC5Uc3AZ5QVC5PiEiBJXLnXQhkCIziCzESivxhYJK4kB8T5yVfrKO+1yOl/+TW10HrcE5cPb/v769vrXWt9c+IpntycBHwAxgODCgudbH79vAVeBHYJ2k38Of4sP2YuBzYGAfQcpe/xtYJmmnbL8A/Aw8CJwDNgN/xn7KvFRcj+DGACuAJ4C/gKkB/AXwOnAWmCLpRkWHtR6zPRQ4BDwJdAfwJeBRYLmk7bW81XzY9nJgK3AtgCP5Qcdrkr6u6avW47ZfBb5qFJftZi7/B65LY3RF9H9vuyXpcmrb6lTbHgv8lIrvy7zd2D4GTMhZb5PUXjnHtocAB1L/hc+Zkn7Lcm57C/BSxloUb7ukPXWAu5Oz6cAuYDTwYpO6Wrm4q5DlVNsOpdkIzJK03/ZjQER7EnhFUkRSy0qBbU8CfgU2SGprerc9G9gLrJLU0Ypq+ylgXMZOol33S7pZCGz7AeAXICKaJimEvcdsbwLeASZJCpltmO2LQLCSZVskrSgDfhfYlnJ5pLcX2w8lug9LCo1vAi/KKa7Y+GeSjuYCA9+lk+kbSUsKWuctoDMdKplVnlP52cUFDAa6gGckncmINqh8FrgA7AG+lxS0V7KiiOcB84F5kkI0mjSOACK3C4CogSiYm8AVSXHMRY7fBJ7PKa5OSSeKgJcGaHr5eIrqOvAhMDLD6Q1JwxLwlRzJjOVPJb1XBDwHeL8Sb3cfOiGpIZO2nwMmZrx7C9gn6WoRcAh9rh5nON0uKQ73SlYEvA841aLNRQ5jdpoo6XQl1DLJtB10x5QQRVRkH0ta21KAbwAxrYZYfJvo/yTRvzLEpopkLkzj7qCcKl0vKWbwHrMds/MjwZik8bYj93FUhu2QtLQUOO32aWA1MBcYFQNaaC7QISmOynvM9m7g7RRxyOPDwB8pbYskdVUCrpq3XlEPkxTt1zDbUaxDmr/9a8Blm71vgPttru63m0S/3Z3iXnyw5bYYp9D5f/i2+DjwwT23xVT2//39uKXnIvI1wMtJgcq6o856iM8P6R+BxsRyB7WG+lHjvjLfAAAAAElFTkSuQmCC");
mapDataImage.put("11", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAjCAYAAACD1LrRAAADNklEQVRYR+2YS6jVVRTGf58ZSOlA0wgF0x6koPYwB5poIJJSA5EoCRNBDYoEC5Uc3AZ5QVC5PiEiBJXLnXQhkCIziCzESivxhYJK4kB8T5yVfrKO+1yOl/+TW10HrcE5cPb/v769vrXWt9c+IpntycBHwAxgODCgudbH79vAVeBHYJ2k38Of4sP2YuBzYGAfQcpe/xtYJmmnbL8A/Aw8CJwDNgN/xn7KvFRcj+DGACuAJ4C/gKkB/AXwOnAWmCLpRkWHtR6zPRQ4BDwJdAfwJeBRYLmk7bW81XzY9nJgK3AtgCP5Qcdrkr6u6avW47ZfBb5qFJftZi7/B65LY3RF9H9vuyXpcmrb6lTbHgv8lIrvy7zd2D4GTMhZb5PUXjnHtocAB1L/hc+Zkn7Lcm57C/BSxloUb7ukPXWAu5Oz6cAuYDTwYpO6Wrm4q5DlVNsOpdkIzJK03/ZjQER7EnhFUkRSy0qBbU8CfgU2SGprerc9G9gLrJLU0Ypq+ylgXMZOol33S7pZCGz7AeAXICKaJimEvcdsbwLeASZJCpltmO2LQLCSZVskrSgDfhfYlnJ5pLcX2w8lug9LCo1vAi/KKa7Y+GeSjuYCA9+lk+kbSUsKWuctoDMdKplVnlP52cUFDAa6gGckncmINqh8FrgA7AG+lxS0V7KiiOcB84F5kkI0mjSOACK3C4CogSiYm8AVSXHMRY7fBJ7PKa5OSSeKgJcGaHr5eIrqOvAhMDLD6Q1JwxLwlRzJjOVPJb1XBDwHeL8Sb3cfOiGpIZO2nwMmZrx7C9gn6WoRcAh9rh5nON0uKQ73SlYEvA841aLNRQ5jdpoo6XQl1DLJtB10x5QQRVRkH0ta21KAbwAxrYZYfJvo/yTRvzLEpopkLkzj7qCcKl0vKWbwHrMds/MjwZik8bYj93FUhu2QtLQUOO32aWA1MBcYFQNaaC7QISmOynvM9m7g7RRxyOPDwB8pbYskdVUCrpq3XlEPkxTt1zDbUaxDmr/9a8Blm71vgPttru63m0S/3Z3iXnyw5bYYp9D5f/i2+DjwwT23xVT2//39uKXnIvI1wMtJgcq6o856iM8P6R+BxsRyB7WG+lHjvjLfAAAAAElFTkSuQmCC");
mapDataImage.put("12", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAD9klEQVRYR82YeehlYxjHPx8zRNlK0cwoW1EzTMmSsYZJsmQpjCVbkZiI8A/ZEn+YLDMk8wdGKVsRaZo0mjIzJkmWyL5NMjFKtsjy6JnO/bn3zLn3nHvPSfP+c+vc7/P9fs/7nvd9n+eRLXw4qb+I2B04GTgcmAPMAnYGvgI+AT4ClqsrJ9XIuLENRkQauQW4FJjeQDzNLgGWqn80wA9AxjIYEecBDwM7jisEvAecpn4xTmxjgxFxD3D9OOQV2J+Bc9TlTXkaGYyI24Bbm5LW4AI4Sl3ThK/WYEQcBqyd5HsdYSA30hz11zqTIw1GxFbFjty7jmiC/18GngFeV3MjVY46g2cDT08gPk5ILvmzwHXqN+XAOoMrgBPGUWuB/Qm4WH2+n2OowWJ58xvZtoXoJKHXqvf3AisNRsR2wJXAokkUWsb8BRyivr3ZTRIR2wB3AZcDO7QUahO+Tp03YDAidsm7M923Ye4wNs/K1VNLHBGrgGM6FGhLtUS9epPBiDgFeKktY8fxa9UjegaXARd2LNCW7mN1v57BLW158+UGDH4K7NP2lTuOX6Ue25vBt4ADOxZoS7dIvaFnMDPehW0ZO46fp67rGTwAeLdjgTZ0K9X55YP6UeCSNqwdxX4HHKpmzvhf0RQRebW9CezbkdAkNN8D89Wp1RxIFiJi+yJByLu4KpHIquzuosS8bBIHI2LezzK2N3M93LBsJuvc44HZwF5AvtnXwCM9gojIO/t84HRgjwrh9YkHHgeOzoQUOLgCtxpYDDynZvI6MGprkiazFBG5yTLZyJEi69XPy7HFZzQT2A3IcmKD+uEojU4MNnmJSTGNDEbEdDUTyZEjIqapf9fhNk1zQ85ag0mU2bWa30mdweOAH9R3GmAztb+vDtfEYJ6NDwAz1V9GEUbEK8BG9dwa3AwgWyBnqSPTvLqqLs/GD4DsZC1Wrxkm3JdT/lN0DrLYrxwR8VS2QArug9Tfh2HrDD4IXNUXPFfNJtDAiIis/L4sdmf+l6232WqaLWNPLEqL3vM71KFtlVFl565AFtL9LbYVagqURXNmp0rF4s+L1CcqsG+U6p5sKM1S83ezMcrgTcCdFTEz1A39zyMib4E81PvHGvXIEm4uULWBFqoPjWsweycnVQQtUKfaIRGxE/BjBS6PpW36b4eIuKLoL5bhT6oXjGvwReDUiqAz+9sTxf1dtTx/qllnT42IyPt7aQXnY2p2bMda4uwslKf9t7x31Y0l4deAgeUEXlDPKOH2zFoD2LrkJJua2ekay+C0ohe9oDhmMhW7XX21zBIRKZxtkkwKcmmzcX6j+m0FNkvcm4H9gc+AZeq9VebyWe1BPSzw/3r+LxjZUjiJqCy4AAAAAElFTkSuQmCC");
mapDataImage.put("13", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEJklEQVRYR7WYeaimYxjGfxcixl6MMBrKGjXNH2oyNEojW2IiZStbjWVoiFB2YykmS2P+Gdsfg2xlhkRhJMuIECJSZGzZ96Vcuqb3nM75vu993+c93+f+6zs993K9z7nv+7nuW4xQbG8E7A/sAOwDbAj8CHwDfAmslfR7l5Dqolyna3tr4ExgcQWuTvUf4BVgNbBc0i9t8YcCaHtT4GzgamBaW7Ce8x+A24Glkn6qs50yQNunATcA23cE1qv+HXAtsExSbniSdAZoezqwAjhiSGC95m8DR0r6fOJBJ4C25wMPAcm5YeQv4GXgNSC/Iymsg4HzJT095rwYoO2DgGeBjYdA9i1wEfCgpDFg4+5sp+oPAP4E3pL0dxFA2/sCr06hEHq/5RxJy0o+MAUo6Y9WgLZnAK8Dyb1RSFrMqZK+L3HWCND2JlWuzC5x1kFnXYpMUgqjUdoAXgZc3+Zkiud5YeZKeq/Jvhag7c2BlPxWUwRQYvY1MFvSF3XKTQAXAbeVRBlS501gTip2kJ8mgO8A+xUGDwF4EXi/uvG5wJ6FtlFbLGlpMUDbuwCfFga4E7g4LWGivu1ZQM7S19ok7/IMSb/1Kg68QdvHAI+1eQUeBY6T5Dpd208BhxX4WiCpL2YdwKuAK1ucht/tJennJj3bIRMfAVu2+Fsp6cTSG0y3X9ji8GZJlxTcDLafBA5v0V0naedSgA8AJ7Q4PF7Sw4UAbwRKPma6pLDvcan7F68K9WkJPjBnBtnYTrokbdpknqQ1JQCfq6hPk8Mlki5vi5hz2/cBpxToHivp8RKA4WOHtjj8EJglKdSoVmxvBnwFbFEA8HRJd5cAvDeMo8DhXZIykwwU20mh5cBZBb6i0pfXdTnYhSTcAyyS9OtEEFV7yW10GQ32lvRByQ2GPU9K1pYbCKlIk41NeF6o+3nANoU3F7WkyjRJ/5YADPVOuW/bIcCwqs9I6sv7JrJwB3DusFE72GdYypw8SZoAhjDkiRpmSCrFl7d8pqTPigFG0fYS4NLSKEPorZZ01CD79TeYYVxS2O0kqZZBmV1HPZP0hpovKSNtn4wBvCJLnUFKtnesRs5Md/+HrJE0r87xGMCZQF6G9K3rJGXqGhfbu1UtpI9tDIk4ND8zSe3gNF4ktkO5L6gCrgWeqDYJ72anV63Y7gcG5soUgV4o6dYm24kAM70F2B69qQh8Uk14OZozospeIemMtg+b1GZs7wS8McItQl38ayS1Mfb1tn190PbuwEsj2PsNApfnbKGkkJEiqSML2wG3ACcN+ogiz/1KWT6dLOnjLvZtq48swsOEFwAbdHE8QTcrt5vywU3TX2ObaQtse1fgaOAQ4MCCCS0750eAlcALvQylLd7E89b1W6+zioRmX5hcTRPPWJm/08uyYcgq4/m6VUYXcNH9D1UxTji/OpuZAAAAAElFTkSuQmCC");

var left_1_select = "1"; //左-1
var left_2_select = "2"; //左-2
var left_3_select = "3"; //左-3
var right_1_select = "4"; //右-4
var right_2_select = "5"; //右-5
var right_3_select = "6"; //右-6
var center_top_select = "7"; //中上-7
var center_left_select = "8"; //中左-8
var center_right_select = "9"; //中右-4

//地市不展示站点监视 add by hzx 2021-04-06
if (_addvcd.length > 2) {
    center_left_select = "12";
}

//根据设置的布局  填充数据
function createFillData() {
    //left_1_select 处理
    createBlockData("left-1", getCookie("left_1_select"));
    //left_2_select 处理
    createBlockData("left-2", getCookie("left_2_select"));
    //left_3_select 处理
    createBlockData("left-3", getCookie("left_3_select"));
    //right_1_select 处理
    createBlockData("right-1", getCookie("right_1_select"));
    //right_2_select 处理
    createBlockData("right-2", getCookie("right_2_select"));
    //right_3_select 处理
    createBlockData("right-3", getCookie("right_3_select"));
    //center_top_select 处理
    createBlockData("center-top", getCookie("center_top_select"));
    //center_left_select 处理
    createBlockData("center-left", getCookie("center_left_select"));
    //center_right_select 处理
    createBlockData("center-right", getCookie("center_right_select"));
}

/**
 * 填充数据
 * @param {Object} _objId
 * @param {Object} dataId
 */
function createBlockData(_objId, dataId) {
    var _frameUrlSelected = mapDataUrl.get(dataId)
        //alert(dataId);
        $("#" + _objId + "-img").hide();
    $("#" + _objId + "-data").show();
    $("#" + _objId + "-icon").attr("src", mapDataImage.get(dataId));
    $("#" + _objId + "-title").html(mapData.get(dataId));
    var htmlFrame = '<iframe ref="' + _objId + '" marginwidth="0" marginheight="0" frameborder="0"  class="dataFrame" src="'
        +_frameUrlSelected + '"></iframe>';
    $("#" + _objId + "-data").html(htmlFrame);
}
/**
 * 初始化每块的默认值
 */
function iniDefaultSelectedInfo() {
    left_1_select = getCookie("left_1_select") == null ? setCookie("left_1_select", "1") : getCookie("left_1_select");
    left_2_select = getCookie("left_2_select") == null ? setCookie("left_2_select", "2") : getCookie("left_2_select");
    left_3_select = getCookie("left_3_select") == null ? setCookie("left_3_select", "3") : getCookie("left_3_select");
    right_1_select = getCookie("right_1_select") == null ? setCookie("right_1_select", "4") : getCookie("right_1_select");
    right_2_select = getCookie("right_2_select") == null ? setCookie("right_2_select", "5") : getCookie("right_2_select");
    right_3_select = getCookie("right_3_select") == null ? setCookie("right_3_select", "6") : getCookie("right_3_select");
    center_top_select = getCookie("center_top_select") == null ? setCookie("center_top_select", "7") : getCookie("center_top_select");
    //地市不展示站点监视 add by hzx 2021-04-06
    if (_addvcd.length > 2) {
        center_left_select = getCookie("center_left_select") == null ? setCookie("center_left_select", "12") : getCookie("center_left_select");
    } else {
        center_left_select = getCookie("center_left_select") == null ? setCookie("center_left_select", "8") : getCookie("center_left_select");
    }
    center_right_select = getCookie("center_right_select") == null ? setCookie("center_right_select", "9") : getCookie("center_right_select");
}
/**
 * 初始化配置页面  9大块
 */
function iniConfig() {
    iniDefaultSelectedInfo(); //初始化目前选择的值
    //左-1
    var selectOptionHtml_left_1 = "";
    for (var i = 1; i < mapData.size() + 5; i++) {
        if (mapData.get(i + "") == null || mapData.get(i + "") == undefined)
            continue;

        if (left_1_select == i + "") {
            selectOptionHtml_left_1 += '<option data-v-common="" selected="selected" value="' + i + '">' + mapData.get(i + "") + '</option>';
        } else {
            selectOptionHtml_left_1 += '<option data-v-common="" value="' + i + '">' + mapData.get(i + "") + '</option>';
        }
    }
    $("#left-1").html(selectOptionHtml_left_1);
    //左-2
    var selectOptionHtml_left_2 = "";
    for (var i = 1; i < mapData.size() + 5; i++) {
        if (mapData.get(i + "") == null || mapData.get(i + "") == undefined)
            continue;

        if (left_2_select == i + "") {
            selectOptionHtml_left_2 += '<option data-v-common="" selected="selected" value="' + i + '">' + mapData.get(i + "") + '</option>';
        } else {
            selectOptionHtml_left_2 += '<option data-v-common="" value="' + i + '">' + mapData.get(i + "") + '</option>';
        }
    }
    $("#left-2").html(selectOptionHtml_left_2);
    //左-3
    var selectOptionHtml_left_3 = "";
    for (var i = 1; i < mapData.size() + 5; i++) {
        if (mapData.get(i + "") == null || mapData.get(i + "") == undefined)
            continue;

        if (left_3_select == i + "") {
            selectOptionHtml_left_3 += '<option data-v-common="" selected="selected" value="' + i + '">' + mapData.get(i + "") + '</option>';
        } else {
            selectOptionHtml_left_3 += '<option data-v-common="" value="' + i + '">' + mapData.get(i + "") + '</option>';
        }
    }
    $("#left-3").html(selectOptionHtml_left_3);

    //右-1
    var selectOptionHtml_right_1 = "";
    for (var i = 1; i < mapData.size() + 5; i++) {
        if (mapData.get(i + "") == null || mapData.get(i + "") == undefined)
            continue;

        if (right_1_select == i + "") {
            selectOptionHtml_right_1 += '<option data-v-common="" selected="selected" value="' + i + '">' + mapData.get(i + "") + '</option>';
        } else {
            selectOptionHtml_right_1 += '<option data-v-common="" value="' + i + '">' + mapData.get(i + "") + '</option>';
        }
    }
    $("#right-1").html(selectOptionHtml_right_1);

    //右-2
    var selectOptionHtml_right_2 = "";
    for (var i = 1; i < mapData.size() + 5; i++) {
        if (mapData.get(i + "") == null || mapData.get(i + "") == undefined)
            continue;

        if (right_2_select == i + "") {
            selectOptionHtml_right_2 += '<option data-v-common="" selected="selected" value="' + i + '">' + mapData.get(i + "") + '</option>';
        } else {
            selectOptionHtml_right_2 += '<option data-v-common="" value="' + i + '">' + mapData.get(i + "") + '</option>';
        }
    }
    $("#right-2").html(selectOptionHtml_right_2);

    //右-3
    var selectOptionHtml_right_3 = "";
    for (var i = 1; i < mapData.size() + 5; i++) {
        if (mapData.get(i + "") == null || mapData.get(i + "") == undefined)
            continue;

        if (right_3_select == i + "") {
            selectOptionHtml_right_3 += '<option data-v-common="" selected="selected" value="' + i + '">' + mapData.get(i + "") + '</option>';
        } else {
            selectOptionHtml_right_3 += '<option data-v-common="" value="' + i + '">' + mapData.get(i + "") + '</option>';
        }
    }
    $("#right-3").html(selectOptionHtml_right_3);

    //中-上
    var selectOptionHtml_center_top = "";
    for (var i = 1; i < mapData.size() + 5; i++) {
        if (mapData.get(i + "") == null || mapData.get(i + "") == undefined)
            continue;

        if (center_top_select == i + "") {
            selectOptionHtml_center_top += '<option data-v-common="" selected="selected" value="' + i + '">' + mapData.get(i + "") + '</option>';
        } else {
            selectOptionHtml_center_top += '<option data-v-common="" value="' + i + '">' + mapData.get(i + "") + '</option>';
        }
    }
    $("#center-top").html(selectOptionHtml_center_top);

    //中-左
    var selectOptionHtml_center_left = "";
    for (var i = 1; i < mapData.size() + 5; i++) {
        if (mapData.get(i + "") == null || mapData.get(i + "") == undefined)
            continue;

        if (center_left_select == i + "") {
            selectOptionHtml_center_left += '<option data-v-common="" selected="selected" value="' + i + '">' + mapData.get(i + "") + '</option>';
        } else {
            selectOptionHtml_center_left += '<option data-v-common="" value="' + i + '">' + mapData.get(i + "") + '</option>';
        }
    }
    $("#center-left").html(selectOptionHtml_center_left);

    //中-右
    var selectOptionHtml_center_right = "";
    for (var i = 1; i < mapData.size() + 5; i++) {
        if (mapData.get(i + "") == null || mapData.get(i + "") == undefined)
            continue;

        if (center_right_select == i + "") {
            selectOptionHtml_center_right += '<option data-v-common="" selected="selected" value="' + i + '">' + mapData.get(i + "") + '</option>';
        } else {
            selectOptionHtml_center_right += '<option data-v-common="" value="' + i + '">' + mapData.get(i + "") + '</option>';
        }
    }
    $("#center-right").html(selectOptionHtml_center_right);

    /* alert(left_1_select); */
}

//保存配置信息后方回调方法
function callBackSaveConfig() {
    layer.closeAll();
    createFillData();
    window.location.reload();
}

//配置页面配置信息保存
function doOk() {
    setCookie("left_1_select", $("#left-1").val());
    setCookie("left_2_select", $("#left-2").val());
    setCookie("left_3_select", $("#left-3").val());
    setCookie("right_1_select", $("#right-1").val());
    setCookie("right_2_select", $("#right-2").val());
    setCookie("right_3_select", $("#right-3").val());
    setCookie("center_top_select", $("#center-top").val());
    setCookie("center_left_select", $("#center-left").val());
    setCookie("center_right_select", $("#center-right").val());
}

function setCookie(key, value) {
    var Days = 365 * 1; //此 cookie 将被保存 365 天
    var exp = new Date(); //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = key + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(key) {
    var arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}

//跳转到配置页面
function toConfig() {
    var url = "config.html?addvcd=" + _addvcd + "&nocache=" + new Date().getTime();
    dialog.showDialog(url, "配置页面", "600px", "400px", callBackSaveConfig);
}

function switchFullScreen(_ref, _title) {
    var url_src = $("iframe[ref='" + _ref + "']").attr("src");
    toFull(url_src, _title);
}

$(function () {
    $(".fullscreen").click(function () {
        //alert($(this).html());
        //fullScreen("1");
        switchFullScreen($(this).attr("ref"), $(this).html());
    });
});
function toFull(_url_src, _title) {
    var index = layer.open({
            type: 2,
            content: _url_src,
            /* area: ['20%', '100%'], */
            maxmin: false,
            title: false,
            skin: 'layui-layer-rim layui-layer-bg', //layer_bg是自定义的css样式
        });
    layer.full(index);
}

//获取URL参数
function get_url_param(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
