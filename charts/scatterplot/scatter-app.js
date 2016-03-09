Number.prototype.format = function () {
    return this.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
};

$(function () {
$('#container').highcharts({
      chart: {
          type: 'scatter',
          zoomType: 'xy'
      },
      title: {
          text: 'Normierte Personenzahl vs Distanz zu Düsseldorf'
      },
      xAxis: {
          title: { text: "Entfernung von Düsseldorf" },
          min: 0,
          labels: {format:"{value} km"},
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true
      },
      yAxis: {
          title: {text: 'Anteil Düsseldorfer an der Bevölkerung'},
          min: 0,
          max: 0.022,
          endOnTick: false,
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
            '<em>' + this.point.countsum.toLocaleString("de-DE") + '</em> Düsseldorfer von ca. ' +
            '<em>' + (Math.round(this.point.pops/1000)*1000).toLocaleString("de-DE") + '</em> Einwohnern'
            },
            hideDelay: 100,
     },

      series: [
        {
          name: 'Herkunftsgebiete',
          color: "rgba(255,193,0,0.4)",
          data: scatterpoints
        },
        {
          name: 'Ausreißer',
          color: "rgba(255,129,100,0.4)",
          data: ausreisser,
          marker: {
            symbol: 'circle'
          }
        },
       {
          type: 'line',
          name: 'Trendlinie',
          color: "#42cac6",
          data: [[0, 0.003270702], [11426.41, -0.0009111365]],
          marker: {
            enabled: false
          },
          states: {
            hover: {
                  lineWidth: 0
            }
          },
          enableMouseTracking: false
       }
   ]
   });
});
