---
layout: post
title: 'Light backscatter application'
author_github: RohitKhoja
date: 2018-10-20 19:30:00
image: '/assets/img/'
description: 'caculating fat content in milk using light backscatter application'
tags:
- light backscatter
- fat content in milk
- gerber method
- coagulating milk
categories:
- Diode
github_username: 'RohitKhoja'
---
# Measure of fat content in milk with LED and LDR

**India&#39;s milk production** is estimated to have increased by 6.6 per cent  during the last four year. Price of milk is based on the  quantity of FAT  present in milk . so we need machine which can  measures milk parameters like SNF (Solid but Not FAT), FAT, CLR, with less cost.

The important thing is that machine should be cheaper and only based on electricity .then it is very helpful for the remote area also.

**Coming to the point photometric based sensor or light backscatter application technique is able to fulfil the remote area condition(which was proposed by IJIRCCE).**

**How is it better then other method ?**

**first have a look on primary method -**

**1)Gerber method :**

 The specific gravity of fat is 0.9 and that of acid milk mixtures is 1.43. This situation promotes complete separation of fat when proper centrifugal force is applied.

Due to application of centrifugal force lighter substances (Butter fat) are thrown towards centre and rest of serum portion that is heavier is thrown towards the pheriphen.Addition of amyl alcohol helps for separation of fat from the milk acid mixture and also prevents the charging of fat and sugar by the H2SO4.

**Apparatus:**

- Milk sample bottle.

- 10 ml automatic tilt measure for H2SO4.

- 1 ml automatic tilt measurefor amyl

- 10.75 ml capacity milk pipette.

- Dairy floating thermometer.

**Procedure:**

1. Put the clean and dry butyrometer in a butyrometer stand (Camlab part no. 1162195) with open mouth upwards.

2. Run 10 ml of sulphuric acid with the tilt measure in the butyrometer.

3. Pipette out 10.75 ml of milk sample gently by the side of butyrometer, whose temperature is  about 15-21 degrees C.

4. Pour 1 ml. of amyl alcohol with tilt measure.

5. Stopper the butyrometer with the help of lock stopper using regulating pin/guiding pin.

6. The tube is well (mixed) shaken till mahogany red colour is obtained. Keep the butyrometer in hot water bath till it attains 15-21 degrees C and the butyrometer are placed in the centrifuge at 1100 ram for 4 minutes.

7. Take out the butyrometer in an upright position with the stopper end down wards.

8. Keep the butyrometer in hot water bath at (65 degrees C) for some time.

9. Note the reading. Reading should be taken from bottom of the fat column to lower border of meniscus on the scale.

**2) Soxhlet extraction principle :**

Generally this principal  is used in industries and it is also costly.

**Now let&#39;s discuss about light backscatter application and it&#39;s working-\&gt;**

**photometric based sensor or light backscatter application :**

In this application the scattering of a beam of light by the fat globules present in the homogenized milk is the principle of this application . The amount of light scattered by the milk sample is a measure of the fat content in the milk.

A high intensity LED is used as a light source. The light beam is made to pass through the sample solution contained in the test tube. A LDR is placed exactly on the opposite side of the test tube to detect the amount of light passing through the test tube un-scattered. To obtain maximum sensitivity the test tube is covered in wooden shield which has opening only for LED and LDR to pass through.

**METHOD:**

A sensor with two optical fibers, as shown in Figure 1, was used to monitor the coagulation step. An LED light source directs light into an optical fiber that terminates in the milk and an adjacent fiber separated by a distance r1 receives the light backscatter. The uniqueness of this light backscatter configuration is that the light must traverse through a finite distance of fluid (free of specular reflectance) and be backscattered by particulates to the receiving fiber. This configuration was used to measure the change in light backscatter during milk coagulation.

![Figure 1](/blog/assets/img/light-backscatter-application/1.jpg "Figure 1")

**Figure 1: Schematic of a single waveband backscatter sensor used for cutting time determination in cheese processing**.

Next figure shows the fiber optic measurement of intensities at two radial distances, r1 and r2, from the emitting fiber. The sensor employed three optical fibers: one that delivered light to the scattering media and two others that measured light intensity (I1 and I2) at spatially separated points r1 and r2, respectively (∼1 mm apart).

![Figure 2](/blog/assets/img/light-backscatter-application/2.jpg "Figure 2")

**Figure 2. Schematic of the optical fiber configuration tested for measuring composition showing a LED focused on a fiber and two receiving fibers at radial distance r1 and r2 focused onto detectors with outputs F1 and F2.**

A relatively simple empirical correlation between the distribution of backscattered light intensity and the particle concentration was utilized by adapting a widely used diffusion approximation equation presented by Bolt and ten Bosch [1]:

                         I(r) = I0 exp(- βCr) /r^m         equation(1);

where: I0 = apparent intensity at radial center line of emitting fiber

I(r) = Light intensity as a function of radial distance from the emitting fiber

β = specific backscatter light coefficient

C = concentration of particulates

m = exponent relating light diffusion in the radial direction

 r = radial distance of the receiving fiber (centerline to centerline), mm.

The backscatter light coefficient, β, is based on the ability of the sample to scatter light and depends on the optical and radiative properties of the particles in the sample. The value of m depends on whether the detector is placed in the intermediate area (m = ½) or the diffusion area (m = 2). The diffusion area is defined as the area in which sufficient multiple scatterings have taken place, so that the diffusion approximation is valid.

In the development of a sensor, the use of signal ratios has the advantage of normalizing the resulting response. This isolates the signal ratio from changes in light intensity and some changes to the physical system (optics, mechanical connections, etc.). For the fully developed diffusion area, the ratio of the intensities at two radial distances (r1 and r2) using Equation (1) reduces to the following equation:

                 I(r1)/I(r2) =   (r2/r1)^m  exp(K(r2-r1))     equation(2)

where r1 and r2 are radial distances for fiber 1 and fiber 2, respectively, and K is a constant for a specific fat content. This equation predicts an increasing signal ratio with increasing milk fat. Light scattering is dominant for high concentrations of fat and the widely used diffusion approximation is valid for this case.

A consistent light backscatter pattern (reflectance ratio – ratio of light backscatter signal to initial signal at time zero) was found and is shown in Figure 3. The reflectance ratio is initially relatively steady, traverses through a sigmoidal increase and then gradually increases at a decreasing rate. The first chemical reaction during the enzymatic coagulation of milk for cheese making is the reaction of chymosin and casein. This enzymatic reaction phase destabilizes the colloidal nature of casein micelle but does not significantly affect light backscatter. This reaction proceeds as a first order chemical reaction when the substrate concentration (casein) is in excess supply in relation to the enzyme concentration. The second phase is the aggregation phase of the destabilized casein micelle into flocks which grow and consume the entire casein particulate system. It is during this phase when larger particles are formed and the reflectance of light increases rapidly. The aggregation reaction follows a second order chemical reaction. The third phase is the gel forming phase which results from a micro consolidation of protein strands that result in stronger protein strands and an increasing space within the protein matrix. This phase follows a first order chemical reaction. These three chemical reactions overlap with the resulting reflectance profile as shown in Figure 3. The reflectance of milk at 880 nm typically increases 15% to 40% during coagulation providing a strong response signal.

The goal of signal analysis is the extraction of information which will allow accurate prediction of the cutting time from the profile. A successful cutting time prediction technology was developed by utilizing the strong correlation between two time events; tmax and tcut. The correlation, however, needed to be corrected for protein content to develop a precise prediction. The following cutting time prediction equation was determined to predict the cutting time with an approximate precision of ± 1 min:

             tcut = β tmax (protein correction)               Equation 3

![Figure 3](/blog/assets/img/light-backscatter-application/3.jpg "Figure 3")

**Figure 3. A typical light backscatter profile, R, for coagulating milk is shown with the first derivative, R&#39;, the second derivative, R&#39;&#39;, and the time-based parameter, tmax**

where β = a calibration constant (usually determined by the cheese maker) which typically varies from 1.3 to 2.5. Equation 3 requires only tmax. (a time-based parameter) and protein content to make a cutting time prediction. The time-based parameter, tmax to be an exact measurement proportional to the enzymatic reaction rate. The change in reflectance does represent product changes; however, numerous attempts at extracting consistent information from reflectance changes have proved fruitless. Figure 4 shows observed and predicted cutting time for a broad based test of conditions typically encountered in cheese making.

![Figure 4](/blog/assets/img/light-backscatter-application/4.jpg "Figure 4")

Figure 4. Measured and predicted cutting time using the cutting time prediction equation Eqn. 3

The light backscatter was measured during the culture of cottage cheese. A typical reflectance profile is shown in Figure 5.

A cutting time prediction equation was determined for cottage cheese culture using time-based parameters and a multiple linear regression. The profile is more complicated in that there are two maxima in the first derivative. The second noteworthy difference is that light backscatter increases 200% during the process providing a very strong signal.

![Figure 5](/blog/assets/img/light-backscatter-application/5.jpg "Figure 5")

**Figure 5. A typical light backscatter profile, R, for cottage cheese culture showing the first derivative, R&#39;, the second derivative, R&#39;&#39;, and the time-based parameters**.

The ratio of light intensity response, (I2/I1), measured with two detectors spaced at different radial distances was referred to as signal ratio and was found as predicted by Equation 2 to increase with fat content. The signal ratio for homogenized whipping cream diluted in water is shown in Fig. 6.

A single waveband backscatter with two detectors spaced at different radial distances that measures optical extinction has several applications in the dairy industry where an inexpensive sensor is required to monitor and control product composition. A light extinction sensor is a response-based sensor normalized by dividing two signals. Further testing to optimize light wavelengths and fiber spacing is required before a light extinction sensor can be developed with the accuracy and precision required by the dairy industry. From experience, it is known that the attenuation of light varies significantly between products. Thus the determination of optimum fiber spacing and wavelength is required for different products.

![Figure 6](/blog/assets/img/light-backscatter-application/6.jpg "Figure 6")

**Figure 6. Light backscatter signal ratio as a function of homogenized whipping cream (36% milk fat) at 25 C for light at 470 nm.**

**EXPERIMENTAL RESULTS :**

The  results of fat percentage present in 20 ml milk sample calculated using Gerber&#39;s method , dairy method and light backscatter method are as follows -

Method | Buffalo Milk | cow  
--- | --- | ---  
GERBER'S Method | 6.9% | 5.00%  
Dairy Machine | 6.85% | 4.90%  
Light backscatter | 7.00% | 4.95%

![Figure 7](/blog/assets/img/light-backscatter-application/7.jpg "Figure 7")

Circuit shown in image is simple and cheaper so this process is in favour of farmer and as well as dairy industry and as the results from all three methods are nearly same. So it is best in compare to other .

**References :**

1) [https://camblab.info/wp/index.php/total-fat-analysis-in-milk-using-the-gerber-method/](https://camblab.info/wp/index.php/total-fat-analysis-in-milk-using-the-gerber-method/)  
2) [https://mrclab.com/default.aspx](https://mrclab.com/default.aspx)  
3) [http://ijircce.com/](http://ijircce.com/)    