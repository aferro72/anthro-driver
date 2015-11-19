# anthro-driver
*Anthro WebdriverIO POC*

This is a proof of concept for the end-to-end test automation using [WebdriverIO] on the Anthropologie website. 

## Getting Started

* You will need [node.js] and NPM installed on your machine.

* You will also need to install WebdriverIO and it's included test runner, WDIO. Head over to the [WebdriverIO Install Page] and follow the instructions there. Once done, follow the next step here.

* Clone this repo onto your machine

* Make sure you have selenium-webdriver-standalone running. If it's not running, run the below command in your terminal:

`java -jar /path/to/selenium-server-standalone-2.46.0.jar`

* If you haven't installed Chromedriver, install it now via NPM

`npm install -g chromedriver`

* Run the below command to run your tests specified in the wdio configuration file:

`wdio wdio.conf.anthro.us.js` 

(This is assuming you have changed your directory to the anthro-driver directory)


[WebdriverIO]: <http://webdriver.io/>
[WebdriverIO Install Page]: <http://webdriver.io/guide/getstarted/install.html>
[node.js]: <http://nodejs.org/>
