#basic scatterplot
plot(grouped$norm ~ grouped$distance)

#regressionslinie

reg <- lm(grouped$norm ~ grouped$distance)
coeffs <- cbind(p1 = c(0, unname(reg$coefficients[1])),
                p2 =c(max(grouped$distance),NA))
coeffs[2,2] <- reg$coefficients[1] + (max(grouped$distance) * reg$coefficients[2])
coeffs

summary(reg)
#Multiple R-squared:  0.09977,	Adjusted R-squared:  0.09716 
#keine gute regression!

abline(reg, col = "red")


#quadratische regression
quadreg <-lm(grouped$norm ~ ((grouped$distance)^2))
summary(quadreg)
#Multiple R-squared:  0.09977,	Adjusted R-squared:  0.09716 

#exponentielle reression

expreg <- lm(log(grouped$norm) ~ grouped$distance)
summary(expreg)
#Multiple R-squared:  0.4012,	Adjusted R-squared:  0.3994 


#Local Regression
loessval <- scatter.smooth(grouped$distance, grouped$norm, span=1/20, col = "red")
loessval$y[loessval$y < 0] <- 0.00000001

loessreg <- lm(log(loessval$y) ~ loessval$x)

plot(grouped$norm ~ grouped$distance)
lines(loessval$x, exp(predict(loessreg)), col = "red", lwd = 3)

regvalues <- data.frame(x = loessval$x, y = exp(predict(loessreg)))
write.csv(regvalues, "C:\\Users\\Kira\\OneDrive\\Projekte\\rp-zugezogene\\charts\\scatterplot\\data\\regvalues.csv",
          row.names = FALSE)
