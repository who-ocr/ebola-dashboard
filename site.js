---
---
$(document).ready(function() {
    mapData.then(function(data) {

        districtTotals = data.districtTotals;
        globalData = data.globalData;

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


 })
});