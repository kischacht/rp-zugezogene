library(rgdal)
library(raster)

#rasterdaten einlesen
datr <- raster("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\glp00ag15.asc")

#csv einlesen
check <- read.csv("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\opendata\\geburtsort_coded.csv")

#werteaus rasterdaten extrahieren
#1. long 2. lat
check$pops <- extract(datr, check[,6:5])

#datensatz auf dopplungen in den rasterzellen prüfen.
#(nur für den sanity check)
sorted <- plyr::arrange(check, pops)
sorted$duplicate <- duplicated(sorted$pops)
for(i in 1:nrow(sorted)){
      if(sorted$duplicate[i] == TRUE) sorted$duplicate[i-1] <- TRUE
}

#distanzen mitteln, personenzahlen addieren
grouped <- plyr::ddply(check, "pops", plyr::summarise,
                       distance = mean(Distanz),
                       countsum = sum(Anzahl))

#orte pro zelle aneinanderreihen
grouped$orte <- aggregate(Geburtsort_Land~pops,paste, collapse=" | ",
                    data=check)[2]
