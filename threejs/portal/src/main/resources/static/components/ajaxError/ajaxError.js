$(function(){
    //.ajaxError事件定位到document对象，文档内所有元素发生ajax请求异常，
    // 都将冒泡到document对象的ajaxError事件执行处理，ajax方法中有error，先处理error，再冒泡到此处的error
    $(document).ajaxError(
        //所有ajax请求异常的统一处理函数，处理
        function(event,xhr,options,exc ){
            var noAuth = xhr.getResponseHeader('NOAUTH');
            if (noAuth === "403") {
                // 未授权异常，异步无权403会重定向到403.html，并返回xhr.status 200
                layer.msg("系统拒绝：您没有访问权限。");
                return
            }
            if(xhr.status == 'undefined'){
                return;
            }
            switch(xhr.status){
                case 403:
                    // 未授权异常
                    layer.msg("系统拒绝：您没有访问权限。");
                    break;
                case 404:
                    layer.msg("您访问的资源不存在。");
                    break;
                case 500:
                    layer.msg("服务器异常。");
                    break;
            }
        }
    );
});