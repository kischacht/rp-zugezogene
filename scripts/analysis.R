load("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\normalized2.Rdata")
#check <- read.csv("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\normalized2.csv")
german <- read.csv("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\german2.csv")
nongerman <- read.csv("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\nongerman2.csv")

alle <- sum(check$Anzahl) #210360
dussel <- 226079 #check[check$Geburtsort == "Düsseldorf ", "Anzahl"]
alle + dussel #436439
619651 - (alle + dussel) #183212 fehlen in dem Datensatz. Das entspricht:
1-((alle + dussel) / 619651) #29,6%
dussel/(alle + dussel) #0.5180082 anteil der gebürtigen düsseldorfer
sum(german$Anzahl) + dussel #388497 aus deutschland einschl düsseldorf
sum(german$Anzahl) #162418 aus deutschland
sum(nongerman$Anzahl) #47942 international
sum(german$Anzahl)/alle #0.7720955 der zugezogenen kommen aus deutschland
1- (sum(german$Anzahl)/alle)
sum(check[check$Geburtsland == "Marokko" & check$norm > 0.005 & !is.na(check$norm),"Anzahl"])
