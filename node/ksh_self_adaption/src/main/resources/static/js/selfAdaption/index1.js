
(function () {


    $(window).resize(function () {          //当浏览器大小变化时
        // alert($(window).height());          //浏览器时下窗口可视区域高度
        // alert($(document).height());        //浏览器时下窗口文档的高度
        // alert($(document.body).height());   //浏览器时下窗口文档body的高度
        // alert($(document.body).outerHeight(true)); //浏览器时下窗口文档body的总高度 包括border padding margin
        resize();
    });

  /*  */



    // initChrat2()
    // initChrat3();

})();

function resizeWidth() {
    var ratio = $(window).width() / (window.screen.width || $('body').width());
    $('body').css({
        transform: "scale(" + ratio + ")",
        // transform: "scale(" + ratio + ")",
        transformOrigin: "left top",
        backgroundSize: "100%"
    });
}

function resizeCenter() {
    if (!window.screen.height || !window.screen.width) return resizeCenterBak();
    var ratio = $(window).height() / window.screen.height;
    $('body').css({
        transform: "scale(" + ratio + ")",
        transformOrigin: "left top",
        backgroundSize: 100 * (window.screen.width / $(window).width() * ratio) + "%" + ' 100%',
        backgroundPosition: ($(window).width() - $('body').width() * ratio) / 2 + "px top",
        marginLeft: ($(window).width() - $('body').width() * ratio) / 2
    });
}

function resizeHeight() {
    if (!window.screen.height || !window.screen.width) return resizeCenterBak();
    var ratio = $(window).height() / window.screen.height;
    $('body').css({
        transform: "scale(" + ratio + ")",
        transformOrigin: "left top",
        backgroundSize: 100 * (window.screen.width / $(window).width() * ratio) + "%" + ' 100%',
        backgroundPosition: ($(window).width() - $('body').width() * ratio) / 2 + "px top",
        // marginLeft: ($(window).width() - $('body').width() * ratio) / 2
    });
    $('html').css({
        overflowX: 'scroll',
    })
}


function resizeCenterBak() {
    var ratioX = $(window).width() / $('body').width();
    var ratioY = $(window).height() / $('body').height();
    var ratio = Math.min(ratioX, ratioY);
    $('body').css({
        transform: "scale(" + ratio + ")",
        transformOrigin: "left top",
        backgroundSize: (1 / ratioX) * 100 * ratio + "%",
        backgroundPosition: ($(window).width() - $('body').width() * ratio) / 2 + "px top",
        marginLeft: ($(window).width() - $('body').width() * ratio) / 2
    });
}

function resizeFull() {
    debugger
    if (window.screen.height || !window.screen.width)
    {return resizeFullBak();}
    var ratioX = $(window).width() / window.screen.width;
    var ratioY = $(window).height() / window.screen.height;
    $('body').css({
        transform: "scale(" + ratioX + ", " + ratioY + ")",
        // transformOrigin: "left top",
        // backgroundSize: "100% 100%",
    });
}

function resizeFullBak() {
    var ratioX = $(window).width() / $('body').width();
    var ratioY = $(window).height() / $('body').height();
    $('body').css({
        transform: "scale(" + ratioX + ", " + ratioY + ")",
        transformOrigin: "left top",
        // backgroundSize: "100% " + ratioY * 100 + "%",
    });
}

function resize() {
    resizeHeight();
    // resizeCenter();
    resizeWidth();
    // resizeCenterBak();
    // resizeFull();
    // resizeFullBak()
}

function initChrat2() {
     let myChart = echarts.init(document.getElementById('charts2'));
    option = {
        title: {
            text: '堆叠区域图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };


    myChart.setOption(option);


}

function initChrat3() {
    let myChart = echarts.init(document.getElementById('charts3'));
    option = {
        title: {
            text: '堆叠区域图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };


    myChart.setOption(option);


}