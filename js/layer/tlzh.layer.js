var  dialog = {
    // 错误弹出层
    error: function(message) {
        layer.open({
            content:message,
            icon:2,
            title : '错误提示',
        });
    },
    // 错误弹出层
    warn: function(message,callback) {
        layer.open({
            content:message,
            icon:0,
            title : '警告提示',
            yes : function(index){
            	if (callback != null && typeof callback === "function" ) {
            		callback();
            	}
            	layer.close(index);
            }
        });
    },
    //成功弹出层
    success : function(message,callback) {
        layer.open({
            content : message,
            icon : 1,
            yes : function(index){
            	if (callback != null && typeof callback === "function" ) {
            		callback();
            	}
            	layer.close(index);
            }
        });
    },
    showDialog : function(url, name,width,height,okCallback) {
        layer.open({
    		type : 2,
    		fix : true,
    		title : name,
    		shadeClose : true,
			/* shade: [0.8, '#393D49'], */
    		maxmin : false,
    		area : [ width, height ],
    		content : url,
    		btn:['确定','关闭'],
		 	offset: ['5px', '68%'],
    		yes: function(index, layero){
    			var iframeWin = window[layero.find('iframe')[0]['name']];
    			if (iframeWin && iframeWin!=null) {
        			iframeWin.doOk();
    			}
				if (okCallback != null && typeof okCallback === "function" ) {
					okCallback();
				}
    		}
    		
    	});
    },
    close : function() {
    	layer.close(layer.getFrameIndex(window.name));
    },
    parentclose : function() {
    	parent.layer.close(parent.layer.getFrameIndex(window.name));
    }
}