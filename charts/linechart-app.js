(function($){
$(function () {
Highcharts.setOptions({
    lang: {
        resetZoom: "Zoom zurücksetzen",
        resetZoomTitle: "Zoom zurücksetzen",
    }
});
      var chart = new Highcharts.Chart({
      "dom": "chart27386fea26c5",
      "width": 800,
      "height": 400,
      credits: {
            "href": null,
            "text": null
      },
      chart: {
            zoomType: "x",
            renderTo: "chart27386fea26c5",
            resetZoomButton: {
                  relativeTo: 'chart',
                  position: {
                        align: 'right',
                        x: -100,
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
          }
      },
      exporting: {enabled: false},
      title: {text: "Entfernung und Anzahl der Zugezogenen"},
      yAxis: [
        {
         title: { text: "Entfernung von Düsseldorf" },
         min: 0,
         labels: {
               formatter: function () {
                    return this.value.toLocaleString("de-DE") + ' km';
               }
         },
        },
        {
         title: { text: "Anzahl Zugezogene" },
         labels: {
               formatter: function () {
                    return this.value.toLocaleString("de-DE");
               }
         },
        "opposite": true,
        min: 0
      }],
      xAxis: [{
            categories: ["Buenos Aires, Argentinien","Lima, Peru","Sao Paulo, Brasilien","Saigon, Vietnam","Rio de Janeiro, Brasilien","Taipei, Taiwan","Mexiko-Stadt, Mexiko","Chiba, Japan","Kanagawa, Japan","Tokio, Japan","Saitama, Japan","Aichi, Japan","Osaka, Japan","Hong Kong, China","Hyogo, Japan","Kyoto, Japan","Fukuoka, Japan","Guangdong, China","Bangkok, Thailand","Bogota, Kolumbien","Zhejiang, China","Shanghai, China","Hunan, China","Jiangsu, China","Seoul, Korea, Republik","Hubei, China","Shandong, China","Henan, China","Liaoning, China","Jaffna, Sri Lanka","Caracas, Venezuela","Beijing, China","Sichuan, China","Kinshasa, Kongo, Dem.Republik (Zaire)","New York, Vereinigte Staaten","Kabul, Afghanistan","Almaty (Alma-Ata), Kasachstan","Accra, Ghana","Kumasi, Ghana","Benin City, Nigeria","Lagos, Nigeria","Asmara, Eritrea","Taschkent, Usbekistan","Herat, Afghanistan","Pawlodar, Kasachstan","Karaganda, Kasachstan","Schiras, Iran","Meschhed, Iran","Omsk, Russische Föderation","Isfahan, Iran","Ahvaz, Iran","Teheran, Iran","Bagdad, Irak","Tscheljabinsk, Russische Föderation","Baku, Aserbaidschan","Mosul, Irak","Daraa, Syrien","Hasaka, Syrien","Kairo, Ägypten","Damaskus, Syrien","Tiflis, Georgien","Homs, Syrien","Beirut, Libanon","Tripoli, Libanon","Aleppo, Syrien","Ordu, Türkei","Kayseri, Türkei","Avanos, Türkei","Aksaray, Türkei","Kirsehir, Türkei","Ankara, Türkei","Casablanca, Marokko","Rabat, Marokko","Kenitra, Marokko","Simferopol, Ukraine","Izmir, Türkei","Fes, Marokko","Moskau, Russische Föderation","Charkow, Ukraine","Istanbul, Türkei","Dnepropetrowsk, Ukraine","Beni Touzine, Marokko","Tanger, Marokko","Midar, Marokko","Athen, Griechenland","Ben Taieb, Marokko","Temsamane, Marokko","Beni Oulichek, Marokko","Oujda, Marokko","Beni Sidel, Marokko","Nador, Marokko","Lissabon, Portugal","Odessa, Ukraine","Warna, Bulgarien","Komotini, Griechenland","Constanta, Rumänien","Xanthi, Griechenland","Leningrad, Russische Föderation","St. Petersburg, Russische Föderation","Drama, Griechenland","Stara Sagora, Bulgarien","Thessaloniki, Griechenland","Serres, Griechenland","Plowdiw, Bulgarien","Ioannina, Griechenland","Kiew, Ukraine","Chisinau, Moldawien","Bukarest, Rumänien","Tunis, Tunesien","Sofia, Bulgarien","Iasi, Rumänien","Bacau, Rumänien","Partinico, Italien","Palermo, Italien","Kumanovo, Mazedonien","Skopje, Mazedonien","Tetovo, Mazedonien","Ferizaj, Kosovo","Prizren, Kosovo","Madrid, Spanien","Pristina, Kosovo","Minsk, Weißrussland","Riga, Lettland","Neapel, Italien","Belgrad, Serbien","Timisoara, Rumänien","Sabac, Serbien","Sarajevo, Bosnien und Herzegowina","Tuzla, Bosnien und Herzegowina","Barcelona, Spanien","Zenica, Bosnien und Herzegowina","Rom, Italien","Split, Kroatien","Elk (Lyck), Polen","Königsberg, Russische Föderation","Warszawa (Warschau), Polen","Budapest, Ungarn","Olsztyn (Allenstein), Polen","Kraków (Krakau), Polen","Dublin, Irland","Elblag (Elbing), Polen","Zagreb, Kroatien","Lodz, Polen","Katowice (Kattowitz), Polen","Gdansk  (Danzig), Polen","Siemianowice Slaskie (Laurahütte), Polen","Chorzów (Königshütte), Polen","Bytom (Beuthen), Polen","Tarnowskie Góry (Tarnowitz), Polen","Zabrze (Hindenburg), Polen","Gliwice (Gleiwitz), Polen","Rybnik, Polen","Pyskowice (Peiskretscham), Polen","Racibórz (Ratibor), Polen","Strzelce Opolskie (Groß Strehlitz), Polen","Bydgoszcz (Bromberg), Polen","Opole (Oppeln), Polen","Wien, Österreich","Wroclaw (Breslau), Polen","Poznan (Posen), Polen","Swidnica, Polen","Mailand, Italien","Szczecin (Stettin), Polen","Görlitz, Sachsen","Prag, Tschechische Republik","Frankfurt an der Oder, Brandenburg","Greifswald, Mecklenburg-Vorpommern","Stralsund, Mecklenburg-Vorpommern","Bautzen, Sachsen","Cottbus, Brandenburg","Hoyerswerda, Sachsen","Neubrandenburg, Mecklenburg-Vorpommern","Eberswalde, Brandenburg","München, Bayern","Dresden, Sachsen","Schwerin, Brandenburg","Rostock, Mecklenburg-Vorpommern","London, Vereinigtes Königreich","Berlin, Berlin","Meißen, Sachsen","Freiberg, Sachsen","Potsdam, Brandenburg","Regensburg, Bayern","Zürich, Schweiz","Flensburg , Schleswig-Holstein","Augsburg, Bayern","Chemnitz, Sachsen","Konstanz, Baden-Württemberg","Brandenburg an der Havel, Brandenburg","Eutin , Schleswig-Holstein","Schleswig , Schleswig-Holstein","Wittenberg, Sachsen-Anhalt","Kiel, Schleswig-Holstein","Paris, Frankreich","Zwickau, Sachsen","Altenburg , Thüringen","Lübeck, Schleswig-Holstein","Rendsburg , Schleswig-Holstein","Monheim (Bayern), Bayern","Leipzig, Sachsen","Ulm, Baden-Württemberg","Plauen, Sachsen","Dessau, Sachsen-Anhalt","Neumünster , Schleswig-Holstein","Stendal, Sachsen-Anhalt","Gera , Thüringen","Villingen-Schwenningen, Baden-Württemberg","Bayreuth, Bayern","Freiburg, Baden-Württemberg","Köthen, Sachsen-Anhalt","Merseburg, Sachsen-Anhalt","Halle (Saale), Sachsen-Anhalt","Nürnberg, Bayern","Itzehoe , Schleswig-Holstein","Erlangen, Bayern","Magdeburg, Sachsen-Anhalt","Bernburg, Sachsen-Anhalt","Reutlingen, Baden-Württemberg","Tübingen, Baden-Württemberg","Hamburg, Hamburg","Jena , Thüringen","Rheinhausen, Baden-Württemberg","Lüneburg, Niedersachsen","Bamberg, Bayern","Uelzen, Niedersachsen","Stade Hanse, Niedersachsen","Stuttgart, Baden-Württemberg","Cuxhaven, Niedersachsen","Helmstedt, Niedersachsen","Coburg, Bayern","Ludwigsburg, Baden-Württemberg","Wolfsburg, Niedersachsen","Halberstadt, Sachsen-Anhalt","Erfurt , Thüringen","Stolberg, Sachsen-Anhalt","Pforzheim, Baden-Württemberg","Heilbronn, Baden-Württemberg","Baden-Baden, Baden-Württemberg","Wernigerode, Sachsen-Anhalt","Bremerhaven, Bremen","Braunschweig, Niedersachsen","Nordhausen , Thüringen","Wolfenbüttel, Niedersachsen","Schweinfurt, Bayern","Gotha , Thüringen","Celle, Niedersachsen","Würzburg, Bayern","Wilhelmshaven, Niedersachsen","Karlsruhe, Baden-Württemberg","Peine, Niedersachsen","Salzgitter, Niedersachsen","Goslar, Niedersachsen","Bad Kissingen, Bayern","Aurich, Niedersachsen","Bremen, Bremen","Hildesheim, Niedersachsen","Heidelberg, Baden-Württemberg","Speyer , Rheinland-Pfalz","Emden, Niedersachsen","Hannover, Niedersachsen","Delmenhorst, Niedersachsen","Oldenburg, Niedersachsen","Northeim, Niedersachsen","Leer (Ostfriesland), Niedersachsen","Gronau (Leine), Niedersachsen","Mannheim, Baden-Württemberg","Ludwigshafen am Rhein , Rheinland-Pfalz","Husum, Niedersachsen","Göttingen, Niedersachsen","Saarbrücken, Saarland","Fulda, Hessen","Aschaffenburg, Bayern","Papenburg, Niedersachsen","Worms , Rheinland-Pfalz","Kaiserslautern , Rheinland-Pfalz","Bad Hersfeld, Hessen","Hameln, Niedersachsen","Darmstadt, Hessen","Cloppenburg, Niedersachsen","Vechta, Niedersachsen","Holzminden, Niedersachsen","Hanau, Hessen","Bad Pyrmont, Niedersachsen","Minden , Nordrhein-Westfalen","Höxter , Nordrhein-Westfalen","Kassel, Hessen","Offenbach am Main, Hessen","Frankfurt am Main, Hessen","Amsterdam, Niederlande","Bad Oeynhausen, Nordrhein-Westfalen","Lübbecke , Nordrhein-Westfalen","Lemgo , Nordrhein-Westfalen","Brüssel, Belgien","Bad Kreuznach , Rheinland-Pfalz","Mainz , Rheinland-Pfalz","Bad Homburg von der Höhe, Hessen","Haselünne, Niedersachsen","Bad Soden am Taunus, Hessen","Meppen, Niedersachsen","Warburg, Nordrhein-Westfalen","Detmold , Nordrhein-Westfalen","Bünde , Nordrhein-Westfalen","Herford, Nordrhein-Westfalen","Wiesbaden, Hessen","Trier , Rheinland-Pfalz","Bielefeld , Nordrhein-Westfalen","Lingen (Ems), Niedersachsen","Gießen, Hessen","Osnabrück, Niedersachsen","Paderborn , Nordrhein-Westfalen","Marburg, Hessen","Weimar an der Lahn, Hessen","Mettingen, Nordrhein-Westfalen","Georgsmarienhütte, Niedersachsen","Nordhorn, Niedersachsen","Salzkotten , Nordrhein-Westfalen","Gütersloh , Nordrhein-Westfalen","Wittlich , Rheinland-Pfalz","Ibbenbüren , Nordrhein-Westfalen","Geseke , Nordrhein-Westfalen","Rheine , Nordrhein-Westfalen","Rheda-Wiedenbrück , Nordrhein-Westfalen","Brilon , Nordrhein-Westfalen","Lippstadt, Nordrhein-Westfalen","Emsdetten , Nordrhein-Westfalen","Oelde , Nordrhein-Westfalen","Warendorf , Nordrhein-Westfalen","Prüm , Rheinland-Pfalz","Greven , Nordrhein-Westfalen","Gronau (Westfalen), Nordrhein-Westfalen","Warstein , Nordrhein-Westfalen","Gerolstein , Rheinland-Pfalz","Steinfurt , Nordrhein-Westfalen","Koblenz , Rheinland-Pfalz","Beckum , Nordrhein-Westfalen","Meschede, Nordrhein-Westfalen","Mayen , Rheinland-Pfalz","Münster , Nordrhein-Westfalen","Soest , Nordrhein-Westfalen","Neuwied , Rheinland-Pfalz","Andernach , Rheinland-Pfalz","Ahaus, Nordrhein-Westfalen","Ahlen, Nordrhein-Westfalen","Siegen , Nordrhein-Westfalen","Arnsberg, Nordrhein-Westfalen","Lennestadt, Nordrhein-Westfalen","Kirchen (Sieg), Rheinland-Pfalz","Stadtlohn , Nordrhein-Westfalen","Hamm , Nordrhein-Westfalen","Coesfeld , Nordrhein-Westfalen","Borken , Nordrhein-Westfalen","Wickede Ruhr, Nordrhein-Westfalen","Attendorn, Nordrhein-Westfalen","Lüdinghausen , Nordrhein-Westfalen","Werne , Nordrhein-Westfalen","Bad Neuenahr-Ahrweiler , Rheinland-Pfalz","Olpe , Nordrhein-Westfalen","Emmerich am Rhein , Nordrhein-Westfalen","Dülmen , Nordrhein-Westfalen","Kleve , Nordrhein-Westfalen","Plettenberg , Nordrhein-Westfalen","Menden (Sauerland), Nordrhein-Westfalen","Kamen , Nordrhein-Westfalen","Unna , Nordrhein-Westfalen","Hemer , Nordrhein-Westfalen","Waldbröl , Nordrhein-Westfalen","Rhede , Nordrhein-Westfalen","Werdohl , Nordrhein-Westfalen","Aachen, Nordrhein-Westfalen","Lünen , Nordrhein-Westfalen","Bocholt , Nordrhein-Westfalen","Iserlohn , Nordrhein-Westfalen","Goch , Nordrhein-Westfalen","Haltern am See , Nordrhein-Westfalen","Datteln , Nordrhein-Westfalen","Bardenberg, Nordrhein-Westfalen","Euskirchen , Nordrhein-Westfalen","Schwerte , Nordrhein-Westfalen","Gummersbach , Nordrhein-Westfalen","Bonn , Nordrhein-Westfalen","Dortmund , Nordrhein-Westfalen","Eschweiler, Nordrhein-Westfalen","Lüdenscheid , Nordrhein-Westfalen","Kevelaer , Nordrhein-Westfalen","Siegburg , Nordrhein-Westfalen","Recklinghausen , Nordrhein-Westfalen","Geilenkirchen , Nordrhein-Westfalen","Xanten , Nordrhein-Westfalen","Marl , Nordrhein-Westfalen","Troisdorf , Nordrhein-Westfalen","Castrop-Rauxel , Nordrhein-Westfalen","Herten , Nordrhein-Westfalen","Engelskirchen, Nordrhein-Westfalen","Dorsten , Nordrhein-Westfalen","Wesel , Nordrhein-Westfalen","Hagen, Nordrhein-Westfalen","Herdecke , Nordrhein-Westfalen","Düren , Nordrhein-Westfalen","Heinsberg , Nordrhein-Westfalen","Herne , Nordrhein-Westfalen","Witten , Nordrhein-Westfalen","Geldern , Nordrhein-Westfalen","Wipperfürth, Nordrhein-Westfalen","Linnich , Nordrhein-Westfalen","Brühl , Nordrhein-Westfalen","Issum, Nordrhein-Westfalen","Jülich , Nordrhein-Westfalen","Gladbeck , Nordrhein-Westfalen","Bochum , Nordrhein-Westfalen","Gelsenkirchen , Nordrhein-Westfalen","Gevelsberg , Nordrhein-Westfalen","Radevormwald, Nordrhein-Westfalen","Hückeswagen, Nordrhein-Westfalen","Rheinberg , Nordrhein-Westfalen","Dinslaken , Nordrhein-Westfalen","Schwelm , Nordrhein-Westfalen","Nettetal , Nordrhein-Westfalen","Erkelenz, Nordrhein-Westfalen","Bottrop , Nordrhein-Westfalen","Kamp-Lintfort , Nordrhein-Westfalen","Bergisch Gladbach , Nordrhein-Westfalen","Frechen , Nordrhein-Westfalen","Hattingen , Nordrhein-Westfalen","Köln , Nordrhein-Westfalen","Wermelskirchen , Nordrhein-Westfalen","Kempen , Nordrhein-Westfalen","Bergheim , Nordrhein-Westfalen","Essen , Nordrhein-Westfalen","Remscheid , Nordrhein-Westfalen","Wuppertal , Nordrhein-Westfalen","Oberhausen , Nordrhein-Westfalen","Viersen , Nordrhein-Westfalen","Moers , Nordrhein-Westfalen","Mülheim an der Ruhr , Nordrhein-Westfalen","Leverkusen , Nordrhein-Westfalen","Duisburg , Nordrhein-Westfalen","Mönchengladbach , Nordrhein-Westfalen","Tönisvorst , Nordrhein-Westfalen","Velbert , Nordrhein-Westfalen","Solingen , Nordrhein-Westfalen","Wülfrath , Nordrhein-Westfalen","Krefeld , Nordrhein-Westfalen","Grevenbroich , Nordrhein-Westfalen","Korschenbroich , Nordrhein-Westfalen","Haan , Nordrhein-Westfalen","Langenfeld (Rheinland), Nordrhein-Westfalen","Willich , Nordrhein-Westfalen","Dormagen , Nordrhein-Westfalen","Hilden , Nordrhein-Westfalen","Mettmann , Nordrhein-Westfalen","Ratingen , Nordrhein-Westfalen","Erkrath, Nordrhein-Westfalen","Neuss , Nordrhein-Westfalen","Meerbusch , Nordrhein-Westfalen"],
            labels: {"enabled": false},
            tickLength: 0,
            lineColor: 'transparent',
            crosshair: true
      }],
      legend: {
            layout: 'vertical',
            align: 'left',
            x: 200,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
      },
      tooltip: {
            shared: true,
            useHTML: true,
            //headerFormat: '<b style="font-size:14px">{point.key}</b><br>',
            formatter: function() {
                var s = '<b>'+ this.x +'</b>';
                $.each(this.points, function(i, point) {
                    s += '<br/><span style="color:'+ point.series.color +'">\u25CF</span> ' + point.series.name + ': ' +
                    (Math.round(this.point.y/10)*10).toLocaleString("de-DE") + this.series.tooltipOptions.valueSuffix;
                });

                return s;
            },
      },

      series: [
      {
      name: "Entfernung",
      type: "spline",
      color: "#42cac6",
      data:[11426.4105,10608.84951,9778.844099,9760.731703,9540.317328,9434.006502,9412.087952,9382.995847,9356.459497,9344.146412,9319.314063,9301.531908,9255.673577,9237.123214,9200.272175,9189.00499,9120.067377,9110.308755,9082.559129,9001.261547,8997.207858,8874.322697,8624.130429,8601.248784,8580.280949,8367.071606,8238.758702,8192.308443,8033.466716,8006.619819,7961.685238,7826.221209,7805.169554,6211.581117,6030.255628,5242.666616,5176.571027,5093.665542,4990.038901,4970.395138,4949.590188,4900.092724,4790.899181,4771.651347,4650.765031,4547.270675,4463.237302,4453.353091,4308.610573,4168.137179,4068.017943,3925.465665,3623.60071,3582.066781,3499.192882,3312.590478,3153.036809,3142.638271,3100.780471,3090.919423,3063.636778,3016.642092,3009.602849,2986.278089,2925.462266,2635.524438,2630.279481,2589.739064,2562.262705,2497.756745,2370.608761,2280.355471,2203.180142,2170.411793,2136.957436,2134.176811,2131.124347,2089.507811,2075.611055,2040.98987,2040.903116,1992.116336,1989.761329,1986.60608,1984.187997,1974.317154,1973.211637,1969.600777,1965.753958,1954.425445,1942.812443,1863.420233,1824.797898,1821.946546,1814.782222,1808.638006,1782.566298,1753.695223,1753.695223,1737.919775,1731.285365,1709.936676,1709.239586,1698.229376,1685.751964,1667.901864,1666.820944,1624.670498,1623.064955,1575.362577,1573.84657,1557.11124,1544.815529,1543.4853,1519.246428,1514.581237,1488.238055,1468.388252,1457.56368,1446.302089,1445.570149,1431.524344,1295.83539,1287.530586,1241.326102,1226.101115,1199.485271,1196.753974,1157.536956,1148.859376,1142.27792,1122.673194,1122.321377,1095.4087,998.9353983,988.1448101,985.1057171,973.7085833,945.1334318,918.244798,913.0009685,904.9132434,882.4969942,870.6528359,870.0305463,867.9790163,863.8866647,861.7709601,854.5139652,850.2836204,844.476653,839.8671009,839.6088727,818.1577987,814.2599648,797.7638509,786.5841711,768.1529877,717.6946209,706.4006417,682.07207,664.9214892,584.2302131,573.7847614,556.0095022,550.7534804,549.713313,547.609523,534.731525,529.3657332,520.9201467,513.3949516,511.2312723,489.411443,487.6428491,485.4218934,482.2837847,481.7261149,476.9283607,469.5561505,461.8626576,451.4151898,450.397446,445.9674427,437.6657017,436.5638867,434.1667047,430.2429327,416.4389623,415.5385722,413.9229371,413.7047252,413.1260786,411.7978881,402.8081702,397.4341096,396.2163661,394.3730955,393.646554,391.5917323,388.6720594,387.7953638,385.5236366,384.6742312,381.7628776,376.0510292,372.8539348,368.2049293,365.873534,365.6651738,364.1758689,362.6815671,362.6240195,361.9587931,352.1318876,350.6658121,350.5144174,349.0975437,341.2503298,339.8463742,339.0131211,338.9569405,336.0963209,327.6006982,324.8810839,322.1448465,321.7563452,319.8035361,312.7231691,312.1408436,310.8170184,308.090056,304.6609965,299.1891194,293.5261598,292.7970386,290.2129486,289.2574377,288.2390159,286.0804593,283.8013836,282.1540404,281.8163813,276.9083855,276.7452619,275.6613111,274.079854,272.6511461,271.3400063,269.2591264,267.1495812,264.9443379,258.6105092,255.0525756,249.0572251,245.1079705,243.0183878,242.2681113,241.4619281,241.4353101,239.9957872,235.3461406,230.0234452,229.6657373,229.6113939,227.8620814,226.5538915,226.4935276,222.9743012,221.1222599,216.8774269,214.2816863,211.1884099,209.2120155,208.9885983,208.9120841,203.4287226,201.2763454,200.5258988,198.1651677,197.3714432,193.1970998,192.8469639,191.3504326,190.9974375,188.2441752,187.9206156,182.2981758,180.943119,180.0437099,176.9037405,173.2790823,173.2481822,172.8465332,171.6360187,169.9908995,169.6583528,169.1455426,167.893524,166.8767605,166.5398613,165.8319821,164.1292916,162.9730524,162.412597,153.2395216,151.1572289,151.1175413,148.660178,148.2389978,147.6803262,146.4680147,140.6486033,140.0795219,138.2192108,137.7272492,137.6098479,137.1739635,134.8146174,128.8340996,128.2899477,126.4220181,126.335222,120.5972,118.9607937,117.2560391,116.2609823,114.7465557,114.6261192,112.277925,111.8858699,111.3353755,110.9564639,110.8856445,107.0757947,105.789554,103.1677354,101.5314489,100.9732666,99.08810547,98.65650235,98.57030971,96.96744125,93.3432644,91.8597679,91.50405,90.13846802,86.59693,85.9448106,83.83789601,83.14288894,81.24849305,79.30358956,78.43773242,78.00632661,77.99793388,77.94851178,77.92882522,77.88119383,77.80663899,77.22983903,75.48083031,74.40558558,72.74889375,72.42828027,69.59008813,69.24754251,68.72065271,68.50793002,68.33265555,68.16038975,67.54665509,65.67721069,65.10534099,63.57550458,62.61859053,62.03234969,58.8467101,58.6120678,58.39153324,58.11536494,56.79426692,56.61867705,55.41692884,55.04755385,54.24094808,53.79553565,53.64265148,53.48629667,53.02591311,52.69773674,52.40128081,51.72857542,51.43583515,50.60704023,50.39339292,50.38679246,50.28817509,50.15491097,47.51902174,46.49816849,45.96468674,44.92530901,44.41159283,43.78200442,43.29431331,42.97093629,42.6411577,42.45372062,41.30593577,40.61454429,40.02769397,39.67578049,38.97748078,38.41720934,37.57609963,36.23707889,35.74181984,35.35436336,35.13151052,34.97398642,34.61969177,34.22016689,33.48213905,32.77731491,30.97139532,30.96197327,30.93159183,30.74040344,30.01549327,28.75323522,27.85497268,27.06147112,25.05706363,24.87548206,24.00818273,23.4047223,22.80349437,22.74938502,22.25587166,20.87372085,19.88396286,18.90720785,18.60427385,17.97793516,16.76291705,16.58716416,13.90450597,13.49276484,13.40149301,9.364837819,8.532021022,7.569349323,7.177230637],
      tooltip: {
            valueSuffix: " km"
      }
      },
      {
      name: "Anzahl",
      type: "spline",
      color: "#ffc100",
      data:[142,139,111,142,105,112,169,168,267,956,158,212,382,145,171,131,124,178,136,124,207,379,125,248,744,202,193,112,171,134,103,125,145,167,179,586,176,621,447,105,127,136,236,121,158,341,168,100,241,121,136,2613,352,145,218,113,105,134,180,573,241,100,190,177,503,160,106,170,263,182,293,295,169,178,147,149,126,1240,351,557,387,181,132,157,440,102,117,227,264,173,792,115,381,127,215,129,103,255,615,155,102,547,274,149,100,608,128,709,265,362,105,145,133,220,420,1310,226,129,191,437,160,183,327,264,1084,163,125,246,160,316,106,173,103,222,470,259,325,615,127,121,129,386,210,678,641,129,349,655,196,100,416,105,104,324,220,341,472,433,1370,157,211,104,502,230,173,180,144,134,104,210,105,117,101,1673,1073,206,410,351,5692,105,114,303,166,100,271,252,540,120,208,105,122,174,735,503,213,113,458,129,308,1243,215,110,267,180,142,236,131,102,607,103,120,600,505,104,184,717,111,131,270,2775,286,123,188,130,108,138,1097,148,115,125,113,146,120,511,112,212,208,110,102,320,685,115,130,142,123,297,488,326,611,102,185,150,138,131,1278,401,617,136,119,1551,151,572,118,168,140,464,212,110,645,472,220,157,124,116,166,119,217,332,137,143,123,182,104,384,274,732,259,1621,148,188,121,195,103,166,524,112,105,101,140,144,425,145,396,559,661,1378,221,361,670,888,407,162,104,227,383,128,395,118,236,103,443,232,249,403,146,119,224,119,139,158,141,116,249,629,211,249,129,2434,388,336,107,194,232,950,533,175,144,147,907,320,275,158,158,118,146,113,200,396,149,558,107,243,124,406,161,175,109,115,2082,266,536,514,366,204,250,315,209,193,240,2296,2415,192,568,231,257,859,150,112,426,301,301,337,151,337,951,1389,523,585,266,831,454,480,179,100,130,109,209,314,1856,1857,105,127,103,179,775,405,239,354,629,285,1205,190,265,5031,196,361,122,5658,1001,4181,1934,1243,910,1269,1380,8294,3365,270,1193,2125,180,2617,681,119,1407,1341,467,608,6367,1645,3736,277,5462,1212],
      yAxis: 1,
      tooltip: {
      valueSuffix: " Zugezogene"
      }
      }
      ],
      id: "chart27386fea26c5",
      });
    });
})(jQuery);
