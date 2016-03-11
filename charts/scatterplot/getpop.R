library(raster)

#rasterdaten einlesen
datr <- raster("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\popcount_25km\\glp00g15.asc")
#quelle: http://sedac.ciesin.columbia.edu/data/set/gpw-v3-population-count

#csv einlesen
check <- read.csv("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\opendata\\geburtsort_coded.csv")

#Düsseldorf entfernen
check <- check[-which(check$Geburtsort == "Düsseldorf "),]

#werte aus rasterdaten extrahieren
#1. long 2. lat
check$pops <- extract(datr, check[,6:5])

#datensatz auf dopplungen in den rasterzellen prüfen.
#(nur für den sanity check)
sorted <- plyr::arrange(check, pops)
sorted$duplicate <- duplicated(sorted$pops)
for(i in 1:nrow(sorted)){
      if(sorted$duplicate[i] == TRUE) sorted$duplicate[i-1] <- TRUE
}

#Ausreißer korrigieren
#81850000	7805.169554	145	Sichuan, China	0.000001772	
check[check$Geburtsort == "Sichuan", "pops"] <- 81850000
check[check$Geburtsort == "Homs", "pops"] <- 200000
check[check$Geburtsort == "Aleppo", "pops"] <- 2302000
check[check$Geburtsort == "Damaskus", "pops"]  <- 1711000
check[check$Geburtsort == "Nador", "pops"]  <- 200001
check[check$Geburtsort == "Skopje", "pops"]  <- 536271
check[check$Geburtsort == "Kirsehir", "pops"] <- 221876
check[check$Geburtsort == "Mosul", "pops"] <- 664221
check[check$Geburtsort == "Olsztyn (Allenstein)", "pops"] <- 175482
check[check$Geburtsort == "Kyoto", "pops"] <- 1474000
check[check$Geburtsort == "Aksaray", "pops"] <- 195990

#distanzen mitteln, personenzahlen addieren
grouped <- plyr::ddply(check, "pops", plyr::summarise,
                       distance = mean(Distanz),
                       countsum = sum(Anzahl))

#orte pro zelle aneinanderreihen
grouped$orte <- aggregate(Geburtsort_Land~pops,paste, collapse="<br>",
                    data=check)$Geburtsort_Land

#normieren: 
grouped$norm <- grouped$countsum / grouped$pops

write.csv(grouped, "C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\normalized.csv",
          row.names = FALSE)
save(grouped, file = "C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\normalized.Rdata")

#deutsche gebiete
bl <-c("Baden-Württemberg","Bayern","Berlin","Brandenburg",
       "Bremen","Hamburg","Hessen","Mecklenburg-Vorpommern",
       "Niedersachsen","Nordrhein-Westfalen","Rheinland-Pfalz",
       "Saarland","Sachsen","Sachsen-Anhalt","Schleswig-Holstein",
       "Thüringen")
str <- paste(bl, collapse ="|")
write.csv(grouped[!grepl(str, grouped$orte),],
          "C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\nongerman.csv",
          row.names = FALSE)
write.csv(grouped[grepl(str, grouped$orte),],
          "C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\german.csv",
          row.names = FALSE)
