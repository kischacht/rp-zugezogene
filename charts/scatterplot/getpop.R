library(raster)

#rasterdaten einlesen
datr <- raster("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\glp00ag15.asc")

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

#Sichuan-Provinz korrigieren
#81850000	7805.169554	145	Sichuan, China	0.000001772	
check[check$Geburtsort == "Sichuan", "pops"] <- 81850000

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


#regressionslinie
reg <- lm(grouped$norm ~ grouped$distance)
coeffs <- cbind(p1 = c(0, unname(reg$coefficients[1])),
                p2 =c(max(grouped$distance),NA))
coeffs[2,2] <- reg$coefficients[1] + (max(grouped$distance) * reg$coefficients[2])
coeffs
