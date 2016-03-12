check <- read.csv("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\opendata\\geburtsort_coded.csv")
#Düsseldorf entfernen
dussel <- check[which(check$Geburtsort == "Düsseldorf "),]
check <- check[-which(check$Geburtsort == "Düsseldorf "),]
#Populationsdaten
popraw <- read.csv("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\wolfram.csv",
                   header = F, na.strings = "Missing[NotAvailable]")
popraw <- as.character(t(popraw))
popraw <- gsub("people", "", popraw)
check$pop <- as.numeric(popraw)

#correct 33 missing values
missingpops <- c(Taipeh = 2619000, MexikoStadt = 8851000,
                 Kanagawa = 9072000, Aichi = 7263000,
                 Hyogo = 5572000, Guangdong = 104300000,
                 Zhejiang = 51800000, Hunan = 64060000,
                 Jiangsu = 77250000, Hubei = 57200000, 
                 Shandong = 95790000, Henan = 94020000,
                 Liaoning = 43190000, Sichuan = 81850000,
                 Pawlodar = 307880, Schiras = 1461000,
                 Meschhed = 2766000, Teheran = 8154000,
                 Tscheljabinsk = 1150000, Daraa = 97969,
                 Hasaka = 175000, Dnepropetrowsk = 987629,
                 BeniTouzine = NA, Temsamane = 14937,
                 BeniOulichek = NA, BeniSidel = NA,
                 Warna = 334763, StaraSagora = 137649,
                 Plowdiw = 338657, Stade = 45772, Homburg = 51691,
                 Bardenberg = 5873, Lipp = 2307)
check[is.na(check$pop),"pop"] <- missingpops

#check outliers
#pnts <- as.matrix(check[check$Geburtsort == "Lippstadt", c("Long_Bing","Lat_Bing")])
#spDistsN1(pts= pnts, pt = as.numeric(dussel[c("Long_Bing","Lat_Bing")]), longlat = TRUE)

check[check$Geburtsort == "Lennestadt", "pop"] <- 27170
check[check$Geburtsort == "Stadtlohn ", "pop"] <- 20631
check[check$Geburtsort == "Lippstadt", "pop"] <- 66952
check[check$Geburtsort == "Strzelce Opolskie (Groß Strehlitz)", "pop"] <- 31219
check[check$Geburtsort == "Nador", "pop"] <- 161726

#add norm
check$norm <- check$Anzahl / check$pop

write.csv(check, "C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\normalized2.csv",
          row.names = FALSE)
save(check, file = "C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\normalized2.Rdata")
#deutsche gebiete
bl <-c("Baden-Württemberg","Bayern","Berlin","Brandenburg",
       "Bremen","Hamburg","Hessen","Mecklenburg-Vorpommern",
       "Niedersachsen","Nordrhein-Westfalen","Rheinland-Pfalz",
       "Saarland","Sachsen","Sachsen-Anhalt","Schleswig-Holstein",
       "Thüringen")
str <- paste(bl, collapse ="|")
write.csv(check[!grepl(str, check$Geburtsort_Land),],
          "C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\nongerman2.csv",
          row.names = FALSE)
write.csv(check[grepl(str, check$Geburtsort_Land),],
          "C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\german2.csv",
          row.names = FALSE)
