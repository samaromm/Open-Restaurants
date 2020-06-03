
# Fooday&night
A simple single-page website where the user can choose date/time, click find, and get a list of restaurants that're working on that time

[Live demo](https://foodayndnight.netlify.app/)

![screen record](https://i.ibb.co/BGtp02S/20200603-034624.gif)

## About
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A csv file contains a list of restaurants and their working hours/days is located in the project directory. App.js reads the csv content, store it as an array of objects (with headers name, hours), and send the array to containers/MainPage.

containers/MainPage gets the date object from the user using the package React-DateTime-Picker, convert the date to day and time information ***We're converting HH:MM format into minutes for easy calculations***, and sends these info, as well as the csv array, as props to component/FindOpenRestaurant. 

component/FindOpenRestaurant contains the main algorithm:
 - we're mapping through each objects in the csv array.
 - spliting, removing -/spaces, and changing from am/pm format to minutes.
 - creating a list with each week day as key and the array [openHours, closeHours] is its' value.
 - and lastly comparing the time the user entered to the open/close hours, if open<=value<=close show the restaurant name.
 /***Notice that in order for the algorithm to work correctly we need to check first if close>open, if not we need to add a day to the closing hours (Thu-Fri 5 pm - 1:30 am)***/

component/ShowRestaurants is only used for displaying the restaurants' names in gui, if no restaurant is opened at that hour it will display "nothing to see here"

```text
Working on the algorithm alone took like 8 or so hours, the challenging part was thinking of how to analyze the contents of csv file, but writing the code itself didn't take much time, if we're not counting the GUI.
GUI took longer time because of searching for design ideas, and for the perfect date picker package.
```
 
## Scripts
To run the app locally
```text
npm install
```
```text
npm start
```

## Packages
```text
bootstrap
```
```text
d3 (for reading the data from the csv file)
```
```text
react-uuid (for generating random key ids to list's items)
```
```text
react-datetime-picker
```



