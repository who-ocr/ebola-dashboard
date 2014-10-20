---
---


var data = [
  {
    "epiweek":"2014-W01",
    "total":2,
    "probable":2,
    "suspected":0,
    "confirmed":0
  },
  {
    "epiweek":"2014-W02",
    "total":9,
    "probable":0,
    "suspected":1,
    "confirmed":8
  },
  {
    "epiweek":"2014-W04",
    "total":5,
    "probable":5,
    "suspected":0,
    "confirmed":0
  },
  {
    "epiweek":"2014-W05",
    "total":3,
    "probable":3,
    "suspected":0,
    "confirmed":0
  },
  {
    "epiweek":"2014-W06",
    "total":15,
    "probable":7,
    "suspected":0,
    "confirmed":8
  },
  {
    "epiweek":"2014-W07",
    "total":3,
    "probable":3,
    "suspected":0,
    "confirmed":0
  },
  {
    "epiweek":"2014-W08",
    "total":5,
    "probable":5,
    "suspected":0,
    "confirmed":0
  },
  {
    "epiweek":"2014-W09",
    "total":7,
    "probable":6,
    "suspected":0,
    "confirmed":1
  },
  {
    "epiweek":"2014-W10",
    "total":16,
    "probable":5,
    "suspected":0,
    "confirmed":11
  },
  {
    "epiweek":"2014-W11",
    "total":27,
    "probable":16,
    "suspected":0,
    "confirmed":11
  },
  {
    "epiweek":"2014-W12",
    "total":20,
    "probable":7,
    "suspected":2,
    "confirmed":11
  },
  {
    "epiweek":"2014-W13",
    "total":28,
    "probable":5,
    "suspected":0,
    "confirmed":23
  },
  {
    "epiweek":"2014-W14",
    "total":30,
    "probable":7,
    "suspected":0,
    "confirmed":23
  },
  {
    "epiweek":"2014-W15",
    "total":45,
    "probable":6,
    "suspected":2,
    "confirmed":37
  },
  {
    "epiweek":"2014-W16",
    "total":16,
    "probable":0,
    "suspected":0,
    "confirmed":16
  },
  {
    "epiweek":"2014-W17",
    "total":10,
    "probable":0,
    "suspected":0,
    "confirmed":10
  },
  {
    "epiweek":"2014-W18",
    "total":11,
    "probable":8,
    "suspected":0,
    "confirmed":3
  },
  {
    "epiweek":"2014-W19",
    "total":24,
    "probable":4,
    "suspected":1,
    "confirmed":19
  },
  {
    "epiweek":"2014-W20",
    "total":8,
    "probable":2,
    "suspected":0,
    "confirmed":6
  },
  {
    "epiweek":"2014-W21",
    "total":26,
    "probable":4,
    "suspected":0,
    "confirmed":22
  },
  {
    "epiweek":"2014-W22",
    "total":52,
    "probable":12,
    "suspected":1,
    "confirmed":39
  },
  {
    "epiweek":"2014-W23",
    "total":37,
    "probable":3,
    "suspected":2,
    "confirmed":32
  },
  {
    "epiweek":"2014-W24",
    "total":122,
    "probable":25,
    "suspected":6,
    "confirmed":91
  },
  {
    "epiweek":"2014-W25",
    "total":119,
    "probable":1,
    "suspected":7,
    "confirmed":111
  },
  {
    "epiweek":"2014-W26",
    "total":77,
    "probable":6,
    "suspected":2,
    "confirmed":69
  },
  {
    "epiweek":"2014-W27",
    "total":102,
    "probable":6,
    "suspected":5,
    "confirmed":91
  },
  {
    "epiweek":"2014-W28",
    "total":152,
    "probable":10,
    "suspected":10,
    "confirmed":132
  },
  {
    "epiweek":"2014-W29",
    "total":156,
    "probable":49,
    "suspected":24,
    "confirmed":83
  },
  {
    "epiweek":"2014-W30",
    "total":272,
    "probable":76,
    "suspected":27,
    "confirmed":169
  },
  {
    "epiweek":"2014-W31",
    "total":323,
    "probable":132,
    "suspected":55,
    "confirmed":136
  },
  {
    "epiweek":"2014-W32",
    "total":182,
    "probable":62,
    "suspected":7,
    "confirmed":113
  },
  {
    "epiweek":"2014-W33",
    "total":396,
    "probable":155,
    "suspected":35,
    "confirmed":206
  },
  {
    "epiweek":"2014-W34",
    "total":665,
    "probable":195,
    "suspected":128,
    "confirmed":342
  },
  {
    "epiweek":"2014-W35",
    "total":536,
    "probable":163,
    "suspected":43,
    "confirmed":330
  },
  {
    "epiweek":"2014-W36",
    "total":749,
    "probable":160,
    "suspected":81,
    "confirmed":508
  },
  {
    "epiweek":"2014-W37",
    "total":878,
    "probable":268,
    "suspected":186,
    "confirmed":424
  },
  {
    "epiweek":"2014-W38",
    "total":1005,
    "probable":233,
    "suspected":329,
    "confirmed":443
  },
  {
    "epiweek":"2014-W39",
    "total":842,
    "probable":202,
    "suspected":235,
    "confirmed":405
  },
  {
    "epiweek":"2014-W40",
    "total":951,
    "probable":159,
    "suspected":307,
    "confirmed":485
  },
  {
    "epiweek":"2014-W41",
    "total":1023,
    "probable":126,
    "suspected":322,
    "confirmed":575
  }
]
var probableArray = [];
var suspectedArray = [];
var confirmedArray = [];
var weeksArray = [];

$.each(data, function(index, value) {
     probableArray.push(value.probable);
     suspectedArray.push(value.suspected);
     confirmedArray.push(value.confirmed);
     weeksArray.push(value.epiweek.slice(-2));
});

console.log(probableArray);
console.log(suspectedArray);
console.log(confirmedArray);

$(function () {
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
            formatter: function () {
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

