$(function () {
$('#container').highcharts({
      chart: {
          type: 'scatter',
          zoomType: 'xy'
      },
      exporting: {enabled: false},
      credits: {
        "href": 'http://sedac.ciesin.columbia.edu/data/set/gpw-v3-population-count',
        "text": 'Quelle Populationsdaten: SEDAC'
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
          max: 0.018,
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
            '<b>' + this.point.orte + '</b></p>' +
            '<em>' + Math.round(this.point.x).toLocaleString("de-DE") + '</em> km entfernt<br>' +
            '<em>' + this.point.countsum.toLocaleString("de-DE") + '</em> Düsseldorfer sind hier geboren'
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
});
