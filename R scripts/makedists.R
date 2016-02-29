library(xlsx)
library(sp)

data <- read.csv("C:\\Users\\Kira\\OneDrive\\Projekte\\Zugezogene\\geburtsort_latlong.csv",
                  encoding = "utf-8", header = TRUE, sep = ";", dec = ",")

geos <- as.matrix(data[, c("Long_Bing","Lat_Bing")])
dussel <- as.numeric(data[122, c("Long_Bing","Lat_Bing")])
dists <- spDistsN1(pts= geos, pt = dussel, longlat = TRUE)
data$Distanz.zu.Düsseldorf <- dists

write.xlsx(data, "C:\\Users\\Kira\\OneDrive\\Projekte\\Zugezogene\\geburtsort_coded.xlsx",
           row.names = FALSE)
write.csv(data, "C:\\Users\\Kira\\OneDrive\\Projekte\\Zugezogene\\geburtsort_coded.csv",
          sep = ",", row.names = FALSE)

