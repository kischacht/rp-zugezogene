load("C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\normalized.Rdata")

#basic scatterplot
scatter <- plot(grouped$norm ~ grouped$distance)
xx <- seq(0,12000, length=347)


#EXPONENTIELLE REGRESSION
expreg <- lm(log(grouped$norm) ~ grouped$distance)
summary(expreg)
#Multiple R-squared:  0.4012,	Adjusted R-squared:  0.3994 
#Residual standard error: 1.088
exp(predict(expreg, data.frame(x=xx)))
lines(xx, exp(predict(fite, data.frame(x=xx))), col="blue", lwd=2.5)

#NON LINEAR LEAST SQUARES
library(minpack.lm)

summary(nlsLM(norm ~ exp(b1*distance),data=grouped,
      start=list(b1=0.002)))

nlsreg <- nlsLM(norm ~ b0*exp(c - (b1*distance)),data=grouped,
                start=list(b0=0.001,b1=-0.002, c = 3))
summary(nlsreg) #residual sum-of-squares: 0.002924
coeffs <- coef(nlsreg)
lines(xx, coeffs[1]*exp(coeffs[3] - (coeffs[2]*xx)), col="orange", lwd=2.5)

#1/X CURVE
invreg2 <- nlsLM(norm ~ b0 + (b1/distance),data=grouped,
                start=list(b0 = 0.001, b1=0.2))
invreg3 <- nlsLM(norm ~ (b1/distance),data=grouped,
                 start=list(b1=0.2))
#w/o intercept: residual sum-of-squares: 0.003265
#w/ intercept: residual sum-of-squares: 0.002456
invreg <- lm(grouped$norm ~ I(1/grouped$distance))

plot(grouped$norm ~ grouped$distance)
b <- coefficients(invreg2)
lines(xx, b[1] +(b[2]/xx), col="green", lwd=2.5)
lines(xx, (coefficients(invreg3)/xx), col="blue", lwd=2.5)

lrtest(invreg2)

#LOCAL REGRESSION
loessval <- loess.smooth(grouped$distance, grouped$norm, span=1/20)
loessval$y[loessval$y < 0] <- 0.00000001
loessreg <- lm(log(loessval$y) ~ loessval$x)

plot(grouped$norm ~ grouped$distance)
lines(loessval$x, exp(predict(loessreg)), col = "yellow", lwd = 3)

#write best one to file
regvalues <- data.frame(x = xx, y = exp(predict(fite, data.frame(x=xx))))
write.csv(regvalues, "C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\regvalues.csv",
          row.names = FALSE)
