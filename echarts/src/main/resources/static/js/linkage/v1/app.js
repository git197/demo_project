//地图容器
var chart = echarts.init(document.getElementById('main'));
//34个省、市、自治区的名字拼音映射数组
var provinces = {
    //23个省
    "台湾": "taiwan",
    "河北": "hebei",
    "山西": "shanxi",
    "辽宁": "liaoning",
    "吉林": "jilin",
    "黑龙江": "heilongjiang",
    "江苏": "jiangsu",
    "浙江": "zhejiang",
    "安徽": "anhui",
    "福建": "fujian",
    "江西": "jiangxi",
    "山东": "shandong",
    "河南": "henan",
    "湖北": "hubei",
    "湖南": "hunan",
    "广东": "guangdong",
    "海南": "hainan",
    "四川": "sichuan",
    "贵州": "guizhou",
    "云南": "yunnan",
    "陕西": "shanxi1",
    "甘肃": "gansu",
    "青海": "qinghai",
    //5个自治区
    "新疆": "xinjiang",
    "广西": "guangxi",
    "内蒙古": "neimenggu",
    "宁夏": "ningxia",
    "西藏": "xizang",
    //4个直辖市
    "北京": "beijing",
    "天津": "tianjin",
    "上海": "shanghai",
    "重庆": "chongqing",
    //2个特别行政区
    "香港": "xianggang",
    "澳门": "aomen"
};
var name_title = "中国人民大学2017年各省市计划录取人数"
var subname = '数据爬取自千栀网\n，\n上海、浙江无文理科录取人数'
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 18
var max = 480,
    min = 9;
var maxSize4Pin = 100,
    minSize4Pin = 20;
var cityData1 = [];
for(var i = 0;i<dataMsg.length;i++){
    var b = {
        name : dataMsg[i].province,
        value : dataMsg[i].device_count
    }
    cityData1.push(b)
}
console.log(cityData1)
//直辖市和特别行政区-只有二级地图，没有三级地图
var special = ["北京","天津","上海","重庆","香港","澳门"];
var mapdata = [];
var geoCoordMap = {};
var cityData = [
    {name:"北京",value:177},
    {name:"海东市",value:42},
    {name:"天津",value:42},
    {name:"河北",value:102},
    {name:"山西",value:81},
    {name:"内蒙古",value:47},
    {name:"辽宁",value:67},
    {name:"吉林",value:82},
    {name:"黑龙江",value:66},
    {name:"上海",value:24},
    {name:"江苏",value:92},
    {name:"浙江",value:114},
    {name:"安徽",value:109},
    {name:"福建",value:116},
    {name:"江西",value:91},
    {name:"山东",value:119},
    {name:"河南",value:137},
    {name:"湖北",value:116},
    {name:"湖南",value:114},
    {name:"重庆",value:91},
    {name:"四川",value:125},
    {name:"贵州",value:62},
    {name:"云南",value:83},
    {name:"西藏",value:9},
    {name:"陕西",value:80},
    {name:"甘肃",value:56},
    {name:"青海",value:10},
    {name:"宁夏",value:18},
    {name:"新疆",value:67},
    {name:"广东",value:123},
    {name:"广西",value:59},
    {name:"海南",value:14},
    ];

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};
//绘制全国地图
$.getJSON('../common/mapdata/henan.json', function(data){
    console.log(data)
	d = [];
	for( var i=0;i<data.features.length;i++ ){
		d.push({
			name:data.features[i].properties.name,
            value : (123*Math.random()).toFixed(0)
		})
        // 地区经纬度
        geoCoordMap[data.features[i].properties.name] = data.features[i].properties.cp;
	}
	mapdata = d;
	//注册地图
	echarts.registerMap('henan', data);
	//绘制地图
	renderMap('henan',convertData(d));
});

//地图点击事件
chart.on('click', function (params) {
	console.log( params );
    geoCoordMap = {};
    debugger
	if( params.name in provinces ){
		//如果点击的是34个省、市、自治区，绘制选中地区的二级地图
		$.getJSON('../common/mapdata/province/'+ provinces[params.name] +'.json', function(data){
            console.log(data)
			echarts.registerMap( params.name, data);
			var d = [];
			for( var i=0;i<data.features.length;i++ ){
				d.push({
					name:data.features[i].properties.name,
                    value : 123*Math.random().toFixed(0)
				})
                geoCoordMap[data.features[i].properties.name] = data.features[i].properties.cp;
			}
			renderMap(params.name,convertData(d));
		});
	}else if( params.seriesName in provinces ){
		//如果是【直辖市/特别行政区】只有二级下钻
		if(  special.indexOf( params.seriesName ) >=0  ){
			renderMap('henan',mapdata);
		}else{
			//显示县级地图

			$.getJSON('../common/mapdata/city/'+ cityMap[params.name] +'.json', function(data){
                console.log(data)
				echarts.registerMap( params.name, data);
				var d = [];
				for( var i=0;i<data.features.length;i++ ){
					d.push({
						name:data.features[i].properties.name,
                        value : 123*Math.random().toFixed(0)
					})
                    geoCoordMap[data.features[i].properties.name] = data.features[i].properties.cp;
				}
				renderMap(params.name,d);
			});	
		}	
            console.log(geoCoordMap)
	}else{
		renderMap('henan',mapdata);
            console.log(geoCoordMap)
	}
});

//初始化绘制全国地图配置
var option = {
    background : '#ccc',
    title : {
        text: 'Echarts3 中国地图下钻至县级',
        subtext: '三级下钻',
        left: 'center',
        textStyle:{
            color: '#000',
            fontSize:20,
            fontWeight:'normal',
            fontFamily:"Microsoft YaHei"
        },
        subtextStyle:{
        	color: '#fff',
            fontSize:13,
            fontWeight:'normal',
            fontFamily:"Microsoft YaHei"
        }
    },
    
    
    animationDuration:1000,
	animationEasing:'cubicOut',
	animationDurationUpdate:1000
     
};
function renderMap(map,data){
    console.log(data)
	option.title.subtext = map;
    option.visualMap = {
        type: 'continuous',
        min: 0,
        max: 200,
        text:['高', '低'],
        realtime: false,
        calculable : true,
        seriesIndex: [0],
        inRange : {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿

        }
    },
    option.geo = {
        show: true,
        map: map,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#031525',
                borderColor: '#3B5077',
            },
            emphasis: {
                areaColor: '#2B91B7',
            }
        }
    };
    option.series = [
        
		{
            name: map,
            type: 'map',
            mapType: map,
            showLegendSymbol: false,
            nameMap:{
			    'henan':'中国'
			},
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true,
                    color: '#05C3F9'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    show : true,
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            data:data
        },
        {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: data,
            symbolSize: function(val) {
                return val[2] / 10;
            },
            itemStyle: {
                normal: {
                    color: '#05C3F9'
                }
            }
        },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: function(val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a * min;
                b = maxSize4Pin - a * max;
                return a * val[2] + b;
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    },
                    formatter : function(params){
                        return params.value[2]==undefined?0:params.value[2];
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                    show : false
                }
            },
            zlevel: 6,
            data: data,
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                formatter : function(params){
                    return params.value[2]==undefined?0:params.value[2];
                },
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: 'yellow'
                }
            },
            zlevel: 1
        },	
    ];
    //渲染地图
    chart.setOption(option);
}

console.log(convertData(cityData))