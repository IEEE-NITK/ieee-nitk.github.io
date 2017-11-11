---
layout: post
title: "Using Machine Learning for Investing in the Stock Market"
author_github: suraj44
date: 2017-11-20 00:00:30
image: '/assets/img/'
description: 'An introduction to Machine Learning and how it can be applied to the stock market'
tags:
- Machine Learning
- Stock Market
- Support Vector Machine
categories:
- CompSoc
github_username: 'suraj44'
---

> Arthur Lee Samuel, the man who coined the term "machine learning" defined it as the field of
study that gives computers the ability to learn without being explicitly programmed. 

A good analogy to how it actually works would be teaching a child to play chess by locking him in a room with nothing but the rules of the game and a record of say, a hundred games (and of course, food and water). After a period of five days, the child would walk out of the room as a pretty good chess player. In our analogy, the child is the 'machine', the record of chess games would be the data (which the child is 'learning' from) and the rules of the game would be the algorithm.

![overview](https://i.imgur.com/VG0it3w.png)

Now, let's talk about how this can be applied to predicting the likelihood of a stock doing well.


## 1. The Algorithm
We'll be using a *Support Vector Machine* (SVM) in this example. SVMs are based on the idea of finding a hyperplane that best divides a dataset into two classes, as shown in the image below. How do we find the right hyperplane? The distance between the hyperplane and the nearest data point from either set is known as the margin. The goal is to choose a hyperplane with the greatest possible margin between the hyperplane and any point within the training set, giving a greater chance of new data being classified correctly. However, if there isn't a clear margin between the support vectors like there is in the image below, things get tricky. To overcome this problem, we would use a kernel which would transform our support vectors to a different coordinate system which would make the classification problem easier. 

![SVM](http://blog.aylien.com/wp-content/uploads/2016/06/tumblr_inline_o9aa8dYRkB1u37g00_540.png) ![Margins](http://blog.aylien.com/wp-content/uploads/2016/06/tumblr_inline_o9aa9nH3WQ1u37g00_540.png) ![UseOfAKernel](http://blog.aylien.com/wp-content/uploads/2016/06/tumblr_inline_o9aabehtqP1u37g00_540.png)

## 2. The Tools
There are a few challenges to our problem. Firstly, the stock market is closed on weekends and hence, there are no open/close prices for any stocks on those days which hampers our dataset. Hence, we would need to interpolate the data on these days to better our prediction. Secondly, the stock market is highly fluctuating and hence, we would need to use a technique called smoothing. Here's an example of how data looks before and after applying smoothing: 

![Smoothing](https://i.imgur.com/tJSnvVq.png)
The most important tool needed however for machine learning is the dataset itself. A good resource for data on the stock market is [Quandl](https://www.quandl.com/product/WIKIP/WIKI/PRICES-Quandl-End-Of-Day-Stocks-Info). [*Here's*](https://raw.githubusercontent.com/michaelgu95/machine-learning-stocks/master/YAHOO-INDEX_GSPC.csv) a dataset of ten years' data on SMP 500 Companies in the US and thirty five features to learn on. The SVM algorithm will try seeing if there is any correlation between these parameters and stock price.  We will be using the Python framework Scikit-learn which allows us to use Machine Learning tools almost as a black box, without having explicit knowledge on how these algorithms work.


## 3. The Prestige
Here's some code on preprocessing the dataset from Quandl that would transform the data into a form recognisable to the SVM:




    def key_Stats(gather=["Total Debt/Equity",'Trailing P/E','Price/Sales','Price/Book','Profit Margin', 'Parameters that we wil learn on']):
	    L = []
	    statspath = path + '/_KeyStats'
	    stock_list = [x[0] for x in os.walk(statspath)]
     	
	    sp500 = pd.DataFrame.from_csv("YAHOO-INDEX_GSPC.csv")
	    ticker_list = []
     	
	    for each_dir in stock_list[1:]:
     		each_file = os.listdir(each_dir)
     		
     		ticker = each_dir.split("/")[6]
     		ticker_list.append(ticker)
     		starting_stock_value = False
     		starting_sp500_value = False
     		if len(each_file)>0:
     			for file in each_file:
     				date_stamp = datetime.strptime(file,'%Y%m%d%H%M%S.html')
     				unix_time = time.mktime(date_stamp.timetuple())
     				full_file_path = each_dir + '/' + file 
     				source = open(full_file_path, 'r').read()
				    value_list = []
				    for each_data in gather:
					    #Preprocessing for determining stock price
				
				    try:
					    stock_price = float(source.split('</small><big><b>')[1].split('</b></big>')[0])
				    if not(starting_stock_value):
					    starting_stock_value = stock_price
				    if not(starting_sp500_value):
					    starting_sp500_value= sp500_value

				    stock_p_change = (stock_price - starting_stock_value)/ starting_stock_value *100
				    sp500_p_change = (sp500_value - starting_sp500_value)/starting_sp500_value * 100

				    difference = (stock_p_change - sp500_p_change)
				    if difference > 0:
					    status = "outperform"
				    else:
					    status = "underperform"
				    if value_list.count("N/A")>0:
					    pass
				    else:
					    d  = {...} #Dictionary of parameters for the stock being traversed 
					    L.append(d) #Adding to the list 
				
 	


At this point, we would apply the smoothing technique on the data. The final step is just feeding the data to the algorithm and letting it work it's magic!


    def analysis():
        # Fit the SVC (exclude the last column).
        X_train, y_train = build_data_set()
        clf = svm.SVC(kernel="rbf", C=8, gamma=0.3)
        clf.fit(X_train[:-1], y_train[:-1])

        # Now we get the actual data from which we want to generate predictions.
        data = pd.DataFrame.from_csv("YAHOO-INDEX_GSPC.csv")
        data = data.replace("N/A", 0).replace("NaN", 0)

        X_test = preprocessing.scale(np.array(data[FEATURES].values))
        Z = data["Ticker"].values.tolist()
        invest_list = []

        # If our SVM predicts outperformance, append that stock to an invest_list.
        for i in range(len(X_test)):
            p = clf.predict(X_test[i])[0]
            if p:
                invest_list.append(Z[i])

        return invest_list

We're comparing the performance of each stock represented by  `stock_p_change` against how the market collectively is doing which is represented by `sp500_p_change`. If it outperforms the market, we would consider it as a stock that's doing well and assign it the parameter `outperform`. This is equivalent to a person 'winning' a game of chess as used in the analogy above and is what the SVM uses in its classification. 
We're done! `invest_list` would represent which stocks are likely to do well as predicted by our SVM. With about 150 lines of code, we've managed to get a prediction accuracy of 63%.

### Room for Improvement
The stock market isn't as dependant on its history as it on current events and how companies are doing in real life. One way to increase our prediction accuracy would be to parse the headlines of newspaper articles relating to the companies we're interested in and use that as data in addition to the other parameters. Scikit learn really is meant for beginners just getting started on machine learning. The next step would be to move to a framework like [TensorFlow](https://www.tensorflow.org/) and either write your own code for applying a machine learning algorithm on your dataset or to use the built in functions of the framework which do offer better results.

### Resources
To get started on Machine Learning, I would highly recommend watching the MIT [OCW](https://www.youtube.com/watch?v=TjZBTDzGeGg&list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi) lectures. Along with this material, getting started on small [projects](https://elitedatascience.com/machine-learning-projects-for-beginners) in Python is the only way to get the sense of achievement needed to stay driven. Happy learning!

