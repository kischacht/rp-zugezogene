load("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\normalized2.Rdata")
library(minpack.lm)

#basic scatterplot
scatter <- plot(check$norm ~ check$Distanz)
xx <- seq(0,12000, length=347)

#curve modelling to find starts
b1 = 8.8868; b0 = 0.5263
curve(b0/(x + b1), xlim = c(0,12000), ylim = c(0,0.1))
abline(v = 0, col = "purple")

#1/X CURVE
invreg <- nlsLM(norm ~ b0/(b1 + Distanz),data=check,
                 start=list(b0 = 12, b1=12))
summary(invreg)

b <- coefficients(invreg)
lines(xx, b[1]/(b[2]+xx), col="green", lwd=2.5)

#write to file
regx <- data.frame(x=seq(0,12000, length=30))
regy <- b[1]/(b[2]+regx)
regvalues <- data.frame(x = regx, y = regy)
write.csv(regvalues, "C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\regvalues.csv",
          row.names = FALSE)

