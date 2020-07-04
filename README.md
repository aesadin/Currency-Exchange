# _Currency Exchange_

#### _Offering the most current exchange rates_

#### By _**Allison Sadin**_

## Description

_This application takes a user's input and returns a value. The input is a dollar amount in USD, the user then selects which currency they would like to exchange for and the application returns the user's dollar amount for the selected currency._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|Create async function to call the exchange rate API.|||
|Create function that displays each input exchange rate, based on the API call function.|USD: 1|EUR: .8877|
|Create function that takes USD currency and multiplies it by the given exchange rate of the inputted currency to return the amount of money in the requested currency.|USD: 400 * EUR exchange rate: .8877|355.08|


#### Requirements
* _GitBash or a preferred computer terminal_
* _node.js (visit: https://nodejs.org/en/ for instructions on downloading)
* _Web browser_
* _VScode_

#### Open by downloading:
1. Download the repository onto your computer
2. Drag and drop index.html in to your web browser from gh-pages:  https://aesadin.github.io/Currency-Exchange/

#### Install
* _Navigate to the github repository at: https://github.com/aesadin/Currency-Exchange.git
* _Click the green clone or download button and copy the ".git" link_
* _On your homescreen open up your preferred terminal - GitBash recommended - and clone the file to your desktop. If you are using GitBash use command $ git clone {.git link}_
* _If you are using VScode then navivigate using cd {filename} and use the command $ code . to open this cloned file into VScode._
* #### Before installing:
  * Create a .gitignore file using the $ touch command and add your .env to the git .gitignore file.
  * Naviagate to https://www.exchangerate-api.com/ and create an account.
  * Copy and paste the API key provided to you into your .env file. 
* _Navigate your terminal into the root directory of the project and run the command $ npm install_
* _After installation is finished, execute the command $ npm run build_
* _Finally, run $ npm run start to view the program_


## Known Bugs

Code does not currently work to give user output.

## Support and contact details

_Contact me at aesadin@gmail.com_

## Technologies Used

* HTML
* Bootstrap version 4.5.0
* Javascript
* JQuery version 3.5.1
* CSS
* Git
* node.js/npm

### License

*GPL license distribution*

Copyright (c) 2020 **_Allison Sadin_**