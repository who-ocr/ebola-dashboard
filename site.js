---
---
$(document).ready(function() {

    var globalData = [{
        "confirmed": 0,
        "deaths": 2,
        "epiweek": "2014-W01",
        "probable": 2,
        "suspected": 0,
        "total": 2
    },
    {
        "confirmed": 8,
        "deaths": 6,
        "epiweek": "2014-W02",
        "probable": 0,
        "suspected": 1,
        "total": 9
    },
    {
    "confirmed": 10,
    "deaths": 30,
    "epiweek": "2014-W03",
    "probable": 13,
    "suspected": 22,
    "total": 45
    },
    {
        "confirmed": 0,
        "deaths": 5,
        "epiweek": "2014-W04",
        "probable": 5,
        "suspected": 0,
        "total": 5
    },
    {
        "confirmed": 0,
        "deaths": 3,
        "epiweek": "2014-W05",
        "probable": 3,
        "suspected": 0,
        "total": 3
    },
    {
        "confirmed": 8,
        "deaths": 12,
        "epiweek": "2014-W06",
        "probable": 7,
        "suspected": 0,
        "total": 15
    },
    {
        "confirmed": 0,
        "deaths": 3,
        "epiweek": "2014-W07",
        "probable": 3,
        "suspected": 0,
        "total": 3
    },
    {
        "confirmed": 0,
        "deaths": 5,
        "epiweek": "2014-W08",
        "probable": 5,
        "suspected": 0,
        "total": 5
    },
    {
        "confirmed": 1,
        "deaths": 7,
        "epiweek": "2014-W09",
        "probable": 6,
        "suspected": 0,
        "total": 7
    },
    {
        "confirmed": 11,
        "deaths": 13,
        "epiweek": "2014-W10",
        "probable": 5,
        "suspected": 0,
        "total": 16
    },
    {
        "confirmed": 11,
        "deaths": 22,
        "epiweek": "2014-W11",
        "probable": 16,
        "suspected": 0,
        "total": 27
    },
    {
        "confirmed": 11,
        "deaths": 16,
        "epiweek": "2014-W12",
        "probable": 7,
        "suspected": 2,
        "total": 20
    },
    {
        "confirmed": 23,
        "deaths": 19,
        "epiweek": "2014-W13",
        "probable": 5,
        "suspected": 0,
        "total": 28
    },
    {
        "confirmed": 23,
        "deaths": 22,
        "epiweek": "2014-W14",
        "probable": 7,
        "suspected": 0,
        "total": 30
    },
    {
        "confirmed": 37,
        "deaths": 30,
        "epiweek": "2014-W15",
        "probable": 6,
        "suspected": 2,
        "total": 45
    },
    {
        "confirmed": 16,
        "deaths": 9,
        "epiweek": "2014-W16",
        "probable": 0,
        "suspected": 0,
        "total": 16
    },
    {
        "confirmed": 10,
        "deaths": 6,
        "epiweek": "2014-W17",
        "probable": 0,
        "suspected": 0,
        "total": 10
    },
    {
        "confirmed": 3,
        "deaths": 11,
        "epiweek": "2014-W18",
        "probable": 8,
        "suspected": 0,
        "total": 11
    },
    {
        "confirmed": 19,
        "deaths": 21,
        "epiweek": "2014-W19",
        "probable": 4,
        "suspected": 1,
        "total": 24
    },
    {
        "confirmed": 6,
        "deaths": 5,
        "epiweek": "2014-W20",
        "probable": 2,
        "suspected": 0,
        "total": 8
    },
    {
        "confirmed": 22,
        "deaths": 17,
        "epiweek": "2014-W21",
        "probable": 4,
        "suspected": 0,
        "total": 26
    },
    {
        "confirmed": 39,
        "deaths": 35,
        "epiweek": "2014-W22",
        "probable": 12,
        "suspected": 1,
        "total": 52
    },
    {
        "confirmed": 32,
        "deaths": 22,
        "epiweek": "2014-W23",
        "probable": 3,
        "suspected": 2,
        "total": 37
    },
    {
        "confirmed": 91,
        "deaths": 96,
        "epiweek": "2014-W24",
        "probable": 25,
        "suspected": 6,
        "total": 122
    },
    {
        "confirmed": 111,
        "deaths": 68,
        "epiweek": "2014-W25",
        "probable": 1,
        "suspected": 7,
        "total": 119
    },
    {
        "confirmed": 69,
        "deaths": 52,
        "epiweek": "2014-W26",
        "probable": 6,
        "suspected": 2,
        "total": 77
    },
    {
        "confirmed": 91,
        "deaths": 41,
        "epiweek": "2014-W27",
        "probable": 6,
        "suspected": 5,
        "total": 102
    },
    {
        "confirmed": 132,
        "deaths": 62,
        "epiweek": "2014-W28",
        "probable": 10,
        "suspected": 10,
        "total": 152
    },
    {
        "confirmed": 83,
        "deaths": 104,
        "epiweek": "2014-W29",
        "probable": 49,
        "suspected": 24,
        "total": 156
    },
    {
        "confirmed": 169,
        "deaths": 140,
        "epiweek": "2014-W30",
        "probable": 76,
        "suspected": 27,
        "total": 272
    },
    {
        "confirmed": 136,
        "deaths": 232,
        "epiweek": "2014-W31",
        "probable": 132,
        "suspected": 55,
        "total": 323
    },
    {
        "confirmed": 113,
        "deaths": 89,
        "epiweek": "2014-W32",
        "probable": 62,
        "suspected": 7,
        "total": 182
    },
    {
        "confirmed": 206,
        "deaths": 299,
        "epiweek": "2014-W33",
        "probable": 155,
        "suspected": 35,
        "total": 396
    },
    {
        "confirmed": 342,
        "deaths": 586,
        "epiweek": "2014-W34",
        "probable": 195,
        "suspected": 128,
        "total": 665
    },
    {
        "confirmed": 330,
        "deaths": 370,
        "epiweek": "2014-W35",
        "probable": 163,
        "suspected": 43,
        "total": 536
    },
    {
        "confirmed": 508,
        "deaths": 541,
        "epiweek": "2014-W36",
        "probable": 160,
        "suspected": 81,
        "total": 749
    },
    {
        "confirmed": 424,
        "deaths": 487,
        "epiweek": "2014-W37",
        "probable": 268,
        "suspected": 186,
        "total": 878
    },
    {
        "confirmed": 443,
        "deaths": 202,
        "epiweek": "2014-W38",
        "probable": 233,
        "suspected": 329,
        "total": 1005
    },
    {
        "confirmed": 405,
        "deaths": 64,
        "epiweek": "2014-W39",
        "probable": 202,
        "suspected": 235,
        "total": 842
    },
    {
        "confirmed": 485,
        "deaths": 68,
        "epiweek": "2014-W40",
        "probable": 159,
        "suspected": 307,
        "total": 951
    },
    {
        "confirmed": 575,
        "deaths": 64,
        "epiweek": "2014-W41",
        "probable": 126,
        "suspected": 322,
        "total": 1023
    }];



var districtTotals = [{
    "centroid": [-10.3048348255, 8.69493972138],
    "district": "Gueckedou",
    "country": "Guinea",
    "total": 367,
    "recent": 12
}, {
    "centroid": [-12.7583542486, 8.73493804628],
    "district": "Port Loko",
    "country": "Sierra Leone",
    "total": 427,
    "recent": 149
}, {
    "centroid": [-13.2516184791, 8.46161143374],
    "district": "Freetown",
    "country": "Sierra Leone",
    "total": 748,
    "recent": 385
}, {
    "centroid": [-10.7177144281, 8.09228705936],
    "district": "Kailahun",
    "country": "Sierra Leone",
    "total": 585,
    "recent": 13
}, {
    "centroid": [-10.7215195765, 6.3137163044],
    "district": "Monrovia",
    "country": "Liberia",
    "total": 1785,
    "recent": 346
}, {
    "centroid": [-9.33932375244, 8.45053527378],
    "district": "Macenta",
    "country": "Guinea",
    "total": 533,
    "recent": 143
}, {
    "centroid": [-10.0272901436, 9.24280287002],
    "district": "Kissidougo",
    "country": "Liberia",
    "total": 10,
    "recent": 2
}, {
    "centroid": [-13.5614691474, 9.62757357497],
    "district": "Conakry",
    "country": "Guinea",
    "total": 229,
    "recent": 52
}, {
    "centroid": [-10.1012791495, 10.5819899535],
    "district": "Kouroussa",
    "country": "Liberia",
    "total": 4,
    "recent": 0
}, {
    "centroid": [-11.0627538709, 10.7299012426],
    "district": "Dabola",
    "country": "Guinea",
    "total": 5,
    "recent": 0
}, {
    "centroid": [-9.85031000872, 7.9952352352],
    "district": "Lofa",
    "country": "Liberia",
    "total": 814,
    "recent": 61
}, {
    "centroid": [-9.64366019073, 6.94376505628],
    "district": "Bong",
    "country": "Liberia",
    "total": 444,
    "recent": 130
}, {
    "centroid": [-10.7262027524, 11.6069674927],
    "district": "Dinguiraye",
    "country": "Guinea",
    "total": 1,
    "recent": 0
}, {
    "centroid": [-11.0499721228, 7.08098748329],
    "district": "Grand Cape Mount",
    "country": "Guinea",
    "total": 30,
    "recent": 13
}, {
    "centroid": [-10.2601725424, 6.52717365125],
    "district": "Margibi",
    "country": "Liberia",
    "total": 602,
    "recent": 76
}, {
    "centroid": [-11.5724206143, 7.32219946466],
    "district": "Pujehun",
    "country": "Liberia",
    "total": 27,
    "recent": 5
}, {
    "centroid": [-13.3591246619, 10.9192552488],
    "district": "Telimele",
    "country": "Liberia",
    "total": 26,
    "recent": 0
}, {
    "centroid": [-14.0545378494, 10.3704523359],
    "district": "Boffa",
    "country": "Guinea",
    "total": 24,
    "recent": 0
}, {
    "centroid": [-11.2257628471, 7.94214556432],
    "district": "Kenema",
    "country": "Sierra Leone",
    "total": 495,
    "recent": 36
}, {
    "centroid": [-11.750688035, 7.9935946161],
    "district": "Bo",
    "country": "Sierra Leone",
    "total": 160,
    "recent": 54
}, {
    "centroid": [-12.8268555724, 9.17121326335],
    "district": "Kambia",
    "country": "Liberia",
    "total": 28,
    "recent": 13
}, {
    "centroid": [-12.1955446453, 9.32328913639],
    "district": "Bombali",
    "country": "Sierra Leone",
    "total": 446,
    "recent": 208
}, {
    "centroid": [-8.76982674319, 6.81673414074],
    "district": "Nimba",
    "country": "Liberia",
    "total": 253,
    "recent": 10
}, {
    "centroid": [-9.81486443353, 6.22457715742],
    "district": "Grand Bassa",
    "country": "Liberia",
    "total": 137,
    "recent": 20
}, {
    "centroid": [-10.3101521433, 7.41827028131],
    "district": "Gbarpolu",
    "country": "Guinea",
    "total": 6,
    "recent": 4
}, {
    "centroid": [-10.8109821157, 6.73275035018],
    "district": "Bomi",
    "country": "Liberia",
    "total": 94,
    "recent": 14
}, {
    "centroid": [-10.9664252552, 8.69471402857],
    "district": "Kono",
    "country": "Sierra Leone",
    "total": 84,
    "recent": 25
}, {
    "centroid": [-12.2848428855, 7.50414610209],
    "district": "Bonthe",
    "country": "Sierra Leone",
    "total": 3,
    "recent": 0
}, {
    "centroid": [-12.4546600261, 8.08506816093],
    "district": "Moyamba",
    "country": "Sierra Leone",
    "total": 99,
    "recent": 32
}, {
    "centroid": [-9.4666501767, 11.6823785627],
    "district": "Siguiri",
    "country": "Liberia",
    "total": 6,
    "recent": 0
}, {
    "centroid": [-11.9021619466, 8.6944297019],
    "district": "Tonkolili",
    "country": "Sierra Leone",
    "total": 150,
    "recent": 66
}, {
    "centroid": [-13.0627260644, 9.41630127096],
    "district": "Forecariah",
    "country": "Guinea",
    "total": 17,
    "recent": 1
}, {
    "centroid": [-8.7967554244, 7.9546695681],
    "district": "N'Zerekore",
    "country": "Guniea",
    "total": 92,
    "recent": 53
}, {
    "centroid": [-9.375629418, 5.86101950752],
    "district": "Rivercess",
    "country": "Liberia",
    "total": 10,
    "recent": 0
}, {
    "centroid": [3.39823109352, 6.4615001567],
    "district": "Lagos Island",
    "country": "Liberia",
    "total": 16,
    "recent": 0
}, {
    "centroid": [-12.6356583491, 10.8964798332],
    "district": "Pita",
    "country": "Liberia",
    "total": 9,
    "recent": 1
}, {
    "centroid": [-9.10432690304, 7.53675677824],
    "district": "Yomou",
    "country": "Liberia",
    "total": 11,
    "recent": 0
}, {
    "centroid": [-13.4939931579, 10.1206853671],
    "district": "Dubreka",
    "country": "Guinea",
    "total": 22,
    "recent": 1
}, {
    "centroid": [-8.21471032562, 5.93345828909],
    "district": "Grand Gedeh",
    "country": "Guinea",
    "total": 3,
    "recent": 0
}, {
    "centroid": [-8.75941753954, 5.34595419259],
    "district": "Sinoe",
    "country": "Liberia",
    "total": 18,
    "recent": 8
}, {
    "centroid": [-7.80101899924, 5.27754359722],
    "district": "River Gee",
    "country": "Liberia",
    "total": 19,
    "recent": 2
}, {
    "centroid": [7.0216484586, 4.7776303994],
    "district": "Port-Harcourt",
    "country": "Liberia",
    "total": 4,
    "recent": 0
}, {
    "centroid": [17.4467, 14.6928],
    "district": "Dakar",
    "country": "Guinea",
    "total": 1,
    "recent": 0
}, {
    "centroid": [-9.10499016737, 9.26366627328],
    "district": "Kerouane",
    "country": "Liberia",
    "total": 45,
    "recent": 22
}, {
    "centroid": [-13.3159837156, 9.73536465349],
    "district": "Coyah",
    "country": "Guinea",
    "total": 40,
    "recent": 30
}, {
    "centroid": [-7.77007155359, 4.72127936981],
    "district": "Maryland",
    "country": "Guinea",
    "total": 8,
    "recent": 0
}, {
    "centroid": [-12.1402794081, 10.9131793497],
    "district": "Dalaba",
    "country": "Guinea",
    "total": 9,
    "recent": 3
}, {
    "centroid": [-12.7488142039, 10.0983904021],
    "district": "Kindia",
    "country": "Liberia",
    "total": 1,
    "recent": 0
}, {
    "centroid": [-8.19794186898, 4.79929196355],
    "district": "Grand Kru",
    "country": "Guinea",
    "total": 26,
    "recent": 10
}, {
    "centroid": [-8.33509894591, 8.89499658308],
    "district": "Beyla",
    "country": "Guinea",
    "total": 8,
    "recent": 6
}, {
    "centroid": [-8.32663691342, 7.99102302963],
    "district": "Lola",
    "country": "Liberia",
    "total": 11,
    "recent": 11
}, {
    "centroid": [-14.3617687695, 11.0893838793],
    "district": "Boke",
    "country": "Guinea",
    "total": 1,
    "recent": 1
}, {
    "centroid": [-11.8048918743, 10.4930688004],
    "district": "Mamou",
    "country": "Guinea",
    "total": 1,
    "recent": 1
}];

var probableArray = [];
var suspectedArray = [];
var confirmedArray = [];
var weeksArray = [];


$.each(globalData, function(index, value) {
  probableArray.push(value.probable);
  suspectedArray.push(value.suspected);
  confirmedArray.push(value.confirmed);
  weeksArray.push(value.epiweek.slice(-2));
});

   
function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }


    $(function() {
        $('#global-epi').highcharts({
            chart: {
                type: 'column',
                backgroundColor: '#eee',
                marginTop: 20,
                marginRight: 0,
                marginLeft: 70,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: weeksArray,
                tickInterval: 4,
                title: {
                    text: 'Epidemic week',
                    style: {
                        fontSize: '11px',
                        color: '#999'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Cases',
                    style: {
                        fontSize: '11px',
                        color: '#999'
                    }
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -800,
                verticalAlign: 'top',
                y: 0,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false,
                enabled: false
            },
            credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>Epidemic week ' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                series: {
                    pointPadding: 0,
                    groupPadding: 0,
                    borderWidth: 0,
                    shadow: false
                },
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Confirmed',
                data: confirmedArray,
                color: '#d86422'
            }, {
                name: 'Suspected',
                data: suspectedArray,
                color: '#E6925F',
            }, {
                name: 'Probable',
                data: probableArray,
                color: '#F0C1A5',
            }]
        });
    });

        
     // Update latest numbers
    var casesTotal = 0;
    var deathsTotal = 0;
    $.each(globalData, function(index, value) {
      casesTotal = casesTotal + value.total;
      deathsTotal = deathsTotal + value.deaths;
    });
    


    $('.summary-cases').empty().append(commaSeparateNumber(casesTotal));
    $('.summary-deaths').empty().append(commaSeparateNumber(deathsTotal));
    $('.summary-cases-recent').empty().append(commaSeparateNumber(globalData[globalData.length -1]['total']));
    
    

});