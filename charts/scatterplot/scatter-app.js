$(function () {
$('#container').highcharts({
      chart: {
          type: 'scatter',
          zoomType: 'xy',
          resetZoomButton: {
                position: {
                      align: 'left',
                      x: 90,
                      y: 13
                },
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
          },
          events: {
                load: function() {
                    var ch = this;
                    var extremes = ch.yAxis[0].getExtremes();
                    zoominButton = ch.renderer.button('+', null, null, function(){
                        ch.yAxis[0].setExtremes(0, (extremes.max/2));
                        extremes = ch.yAxis[0].getExtremes();
                    }, {
                        zIndex: 20
                    }).add().align({
                        align: 'left',
                        x: 120,
                        y: 65
                    }, false, null);

                    zoomoutButton = ch.renderer.button('-', null, null, function(){
                       ch.yAxis[0].setExtremes(0, (extremes.max*2));
                       extremes = ch.yAxis[0].getExtremes();
                    }, {
                       zIndex: 20
                    }).attr({
                        id: 'resetZoom',
                        fill: 'white',
                        stroke:'silver',
                        r: 0,
                    }).add().align({
                       align: 'left',
                       x: 140,
                       y: 65
                 }, false, null);
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
          max: 12000,
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
          x: 0,
          y: 50,
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
       },
       {
          name: 'Ausreißer',
          data: ausreisser,
          enableMouseTracking: false,
          marker: {
              radius: 8,
              lineColor: "rgba(255,65,0,0.6)",
              fillColor: 'transparent',
              lineWidth: 1,
              symbol: 'circle'
          }
       },
       {
          type: 'spline',
          name: 'Trendlinie',
          color: "rgba(255,65,0,0.6)",
          data: trend,
          enableMouseTracking: false,
          marker: {
                enabled: false
            }
       }
   ]
   });

});
