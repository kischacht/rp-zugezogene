install.packages("devtools")
require(devtools)
install_github('ramnathv/rCharts', force = TRUE)
library("rCharts")
dat <- read.csv("C:\\Users\\Kira\\SkyDrive\\Projekte\\Zugezogene\\data\\geburtsort_coded.csv",
                encoding = "utf-8", header = TRUE)[,-c(2,6)]
names(dat) <- c("land", "ort", "landort", "count", "lat", "long", "dist") 
View(dat)

sorted <- plyr::arrange(dat, -dist)
sorted$count[nrow(sorted)] <- 0
sorted$landort <- factor(sorted$landort, levels = unique(sorted$landort))
sorted$landort <- as.character(sorted$landort)
#sorted <- transform(sorted, landort = as.character(landort))

h <- Highcharts$new()
h$xAxis(categories = sorted$landort, labels=list(enabled=FALSE))
h$yAxis(list(list(title = list(text = 'Entfernung von Düsseldorf')),
             list(title = list(text = 'Anzahl Zugezogene'), opposite = TRUE)
             )
        )
h$series(name = 'Entfernung', type = 'spline', color = '#4572A7',
         data = round(sorted$dist),
         tooltip = list(valueSuffix = " km"))
h$series(name = 'Anzahl', type = 'spline', color = '#89A54E',
         data = sorted$count,
         yAxis = 1,
         tooltip = list(valueSuffix = " Zugezogene"))
h$tooltip(shared = TRUE)

h
h$save('myplot.html')
