$(function () {
$('#container').highcharts({
      chart: {
          type: 'scatter',
          zoomType: 'xy',
          resetZoomButton: {
                theme: {
                    fill: 'white',
                    stroke: 'silver',
                    r: 0,
                    states: {
                        hover: {
                            fill: "#42cac6",
                            style: {
                                color: 'white'
                            }
                        }
                    }
                }
            }
      },
      exporting: {enabled: false},
      credits: {
        "href": null,
        "text": null
        },
      title: {
          text: 'Anteil Düsseldorfer vs. Entfernung zu Düsseldorf'
      },
      xAxis: {
          title: { text: "Entfernung von Düsseldorf" },
          min: 0,
          labels: {
                formatter: function () {
                     return this.value.toLocaleString("de-DE") + ' km';
                }
          },
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true
      },
      yAxis: {
          title: {text: 'Anteil Düsseldorfer an der Bevölkerung'},
          min: 0,
          endOnTick: false,
          labels: {
                format: '{value}'
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -100,
          y: 70,
          floating: true,
          backgroundColor: '#FFFFFF',
          borderWidth: 1
      },
      plotOptions: {
          scatter: {
              marker: {
                  radius: 5,
                  states: {
                      hover: {
                          enabled: true,
                          lineColor: 'rgb(100,100,100)'
                      }
                  }
              },
          }
      },

      tooltip: {
            useHTML: true,
            formatter: function() { return ' ' +
            '<p>Orte in diesem Gebiet: <br>' +
            '<b>' + this.point.ort + '</b></p>' +
            '<em>' + Math.round(this.point.x).toLocaleString("de-DE") + '</em> km entfernt<br>' +
            '<em>' + this.point.count.toLocaleString("de-DE") + '</em> Düsseldorfer von ca. ' +
            '<em>' + (Math.round(this.point.pop/1000)*1000).toLocaleString("de-DE") + '</em> Einwohnern'
            },
            hideDelay: 100,
     },

      series: [
        {
          name: 'Gebiete in Deutschland',
          color: "rgba(255,193,0,0.5)",
          data: deutsch,
          marker: {
           symbol: 'circle'
          }
        },
        {
          name: 'Internationale Gebiete',
          color: "rgba(66, 202, 198,0.8)",
          data: nondeutsch
        }
   ]
   });
   
   $('#button').click(function () {
   var chart = $('#container').highcharts(),
        yAxis = chart.yAxis[0];

   yAxis.options.startOnTick = false;
   yAxis.options.endOnTick = false;

   chart.yAxis[0].setExtremes(0, 0.022);
});
      $('#button2').click(function () {
      var chart = $('#container').highcharts(),
           yAxis = chart.yAxis[0];

      yAxis.options.startOnTick = false;
      yAxis.options.endOnTick = false;

      chart.yAxis[0].setExtremes(0, 0.25);
});
});
