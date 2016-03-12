$(function () {
Highcharts.setOptions({
    lang: {
        zoomoutButtonTitle: "Herauszoomen",
        zoominButtonTitle: "Hineinzoomen",
        resetZoom: "Zoom zurücksetzen",
        resetZoomTitle: "Zoom zurücksetzen",

    }
});
$('#container').highcharts({
      chart: {
          type: 'scatter',
          zoomType: 'xy',
          resetZoomButton: {
                relativeTo: 'chart',
                position: {
                      align: 'right',
                      x: -240,
                      y: 65,
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
      },
      navigation: {
         buttonOptions: {
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
      exporting: {
         buttons: {
             contextButton: {
                  enabled: false
             },
            zoomoutButton: {
                  text: '-',
                  _titleKey: 'zoomoutButtonTitle',
                  align: 'right',
                  x: -200,
                  y: 55,
                  onclick: function(){
                        var ch = this;
                        var extremes = ch.yAxis[0].getExtremes();
                      ch.yAxis[0].setExtremes(0, (extremes.max*2));
                      extremes = ch.yAxis[0].getExtremes();
                }
             },
             zoominButton: {
                  text: '+',
                  _titleKey: 'zoominButtonTitle',
                  align: 'right',
                  x: -180,
                  y: 55,
                  onclick: function(){
                        var ch = this;
                        var extremes = ch.yAxis[0].getExtremes();
                      ch.yAxis[0].setExtremes(0, (extremes.max/2));
                      extremes = ch.yAxis[0].getExtremes();
                }
             }
         }
      },
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
                formatter: function () {
                     return (this.value*100).toLocaleString("de-DE") + ' %';
                }
          },
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          y: 50,
          floating: true,
          backgroundColor: '#FFFFFF',
          borderWidth: 0.5,
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
            '<p><b>' + this.point.ort + '</b></p>' +
            '<em>' + Math.round(this.point.x).toLocaleString("de-DE") + '</em> km entfernt<br>' +
            '<em>' + this.point.count.toLocaleString("de-DE") + '</em> Düsseldorfer bei ca. ' +
            '<em>' + (Math.round(this.point.pop/1000)*1000).toLocaleString("de-DE") + '</em> Einwohnern'
            },
     },
      series: [
        {
          name: 'Orte in Deutschland',
          color: "rgba(255,193,0,0.5)",
          data: deutsch,
          marker: {
           symbol: 'circle'
          }
        },
        {
          name: 'International',
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
