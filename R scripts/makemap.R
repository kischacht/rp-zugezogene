library(leaflet)
library(xlsx)

dat <- read.csv("C:\\Users\\Kira\\OneDrive\\Projekte\\Zugezogene\\geburtsort_coded.csv",
                 encoding = "utf-8", header = TRUE, sep = ";", dec = ",")[c(1,2,5,7,8,9)]
names(dat)[3:6] <- c("count", "lat", "long", "dusseldist") 

leaflet(dat[-122,]) %>%
      addProviderTiles("CartoDB.Positron",
                       options = providerTileOptions(zoom = 8)) %>%
      addCircles(lng = ~long, lat = ~lat, radius = ~sqrt(count) * 100,
                 color = "#FF9100", fillOpacity = 0.2)
?addControl
?addCircles
