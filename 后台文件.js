function axiosURL(cityName) {
    document.getElementById("cityName").innerText = cityName;
    var url = encodeURI("http://wthrcdn.etouch.cn/weather_mini?city=" + cityName);
    axios.get(url)
        .then(function (response) {
            var data = response.data;
            console.log(data);
            var todayWeather = data.data.forecast[0];
            document.getElementById("ganmao").innerText = "温馨提示：" + data.data.ganmao;
            var fengli = todayWeather.fengli;
            document.getElementById("fengx").innerHTML = "今日风向<br>" + todayWeather.fengxiang;
            document.getElementById("fengli").innerHTML = "风力<br>" + fengli.substring(fengli.indexOf("T") + 3, fengli.indexOf("T") + 5);
            document.getElementById("high").innerText = "最" + todayWeather.high;
            document.getElementById("low").innerText = "最" + todayWeather.low;
            document.getElementById("wendu").innerText = data.data.wendu + "℃";
            var arr = todayWeather.date.split("日");
            document.getElementById("date").innerHTML = arr[0] + "日<br>" + arr[1];
            document.getElementById("sweather").innerText = todayWeather.type;
            if (todayWeather.type == "晴") {
                document.getElementById('icon').className = 'sunny1';
                document.getElementById('tou1').className = 'sun'
            } else if (todayWeather.type == "多云") {
                document.getElementById('icon').className = 'cloudy1';
                document.getElementById('tou1').className = 'cloud'
            } else if (todayWeather.type == "小雨" || todayWeather.type == "中雨" || todayWeather == "大雨") {
                document.getElementById('icon').className = 'rainy1';
                document.getElementById('tou1').className = 'rain'
            } else if (todayWeather.type == "雪") {
                document.getElementById('icon').className = 'snowy1';
                document.getElementById('tou1').className = 'snow'
            } else if (todayWeather.type == "雷阵雨") {
                document.getElementById('icon').className = 'stormy1';
                document.getElementById('tou1').className = 'storm'
            }
            // $("#table_next").width($(".detail").width() + 86);
            for (var i = 1; i < data.data.forecast.length; i++) {
                var arr = data.data.forecast[i].date.split("日");
                var type = data.data.forecast[i].type;
                //document.getElementById("content" + i).innerText = arr[1];
                document.getElementById("content" + i).innerText = arr[1];
                document.getElementById("high" + i).innerText = "最" + todayWeather.high;
                document.getElementById("low" + i).innerText = "最" + todayWeather.low;
                // $("#content" + i).html(arr[1]);
                if (type == "晴") {
                    document.getElementById('svgDiv' + i).className = 'sunny';
                } else if (type == "多云") {
                    document.getElementById('svgDiv' + i).className = 'cloudy';
                } else if (type == "小雨" || todayWeather.type == "中雨" || todayWeather == "大雨") {
                    document.getElementById('svgDiv' + i).className = 'rainy';
                } else if (type == "雪") {
                    document.getElementById('svgDiv' + i).className = 'snowy';
                } else if (type == "雷阵雨") {
                    document.getElementById('svgDiv' + i).className = 'stormy';
                }
            }
        })
        .catch(function (error) {
            console.log(error);
        });

}
