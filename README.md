![anthro-driver](http://i.imgur.com/tNPpjCx.png)
# anthro-driver
*Anthro WebdriverIO POC*

This is a proof of concept for the end-to-end test automation using [WebdriverIO] on the Anthropologie website. 

## Getting Started

Clone this repo onto your machine

* You will need [node.js] and NPM installed and [Java JDK]

* Mac users: if you have just installed node for the first time, run the below command to update your permissions when installing global packages:
`sudo chown -R $(whoami) /usr/local/lib/node_modules`

* You will also need to install [WebdriverIO], wdio, and selenium standalone server

Run the below command to install these packages:

`npm install -g webdriverio && npm install selenium-standalone@latest -g`

`npm install -g jasmine`

`selenium-standalone install`

* Make sure you have selenium-webdriver-standalone running. To do this, run the below command in your terminal:

`selenium-standalone start`

* If you haven't installed Chromedriver, install it now via NPM

`npm install -g chromedriver`

* Mac users: run this command after installing chromedriver
`chmod 755 /usr/local/lib/node_modules/selenium-standalone/.selenium/chromedriver/2.20-x64-chromedriver`

* Run the below command to run your tests specified in the wdio configuration file:

`wdio wdio.conf.anthro.us.js` 

(This is assuming you have changed your directory to the anthro-driver directory)

Finally, to start creating and writing tests, create your own branch and begin!
`git checkout -b 'MYNAME-FEATURE'`

[WebdriverIO]: <http://webdriver.io/>
[WebdriverIO Install Page]: <http://webdriver.io/guide/getstarted/install.html>
[node.js]: <http://nodejs.org/>
[Java JDK]: <http://www.oracle.com/technetwork/java/javase/downloads/index.html>
