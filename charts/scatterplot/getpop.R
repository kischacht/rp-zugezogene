library(rgdal)
library(raster)

datr <- raster("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\glp00ag15.asc")

check <- read.csv("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\opendata\\geburtsort_coded.csv")[,c(4,5,7,8)]

#1. long 2. lat
check$pops <- extract(datr, check[,4:3])

sorted <- plyr::arrange(check, pops)

sorted$duplicate <- duplicated(sorted$pops)

for(i in 1:nrow(sorted)){
      if(sorted$duplicate[i] == TRUE) sorted$duplicate[i-1] <- TRUE
}