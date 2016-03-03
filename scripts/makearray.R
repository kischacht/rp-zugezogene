dat <- read.csv("C:\\Users\\Kira\\OneDrive\\Projekte\\Zugezogene\\geburtsort_coded.csv",
          header = TRUE)
dat <- dat[,-c(2,6)]

#paste the first 4 rows with quotes
for(i in 1:nrow(dat)){
      cat("[", paste("'", dat[i,],"',", sep = ""), "], \n", sep = "",
          file = "C:\\Users\\Kira\\OneDrive\\Projekte\\Zugezogene\\geburtsort_array.txt",
          append = TRUE)
}
