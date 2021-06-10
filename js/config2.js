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




//获取URL参数
function get_url_param(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
