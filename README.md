# JQuery Server Calculator

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

The goal of this assignment was to create a calculator with the following details:

* Two inputs
* Some kind of operator selector
    ** I chose to learn how to use a dropdown selector instead of individual buttons.
* A button to return the total
* A button to clear the inputs
* A historical list of calculations


Functionality

When the total button is clicked, the server must perform the calculation and return a total. This calculation must be done without using the eval() method. 

I decided the best way to accept the data ( input values and operator) was as an object with strings as the values. I used a switch expression to calculate the total based on the operator selected from the dropdown. The total was then added to the current object which I then pushed to a server side array of objects and stored temporarily.

A get request was used to update the DOM, creating a list of all of the calculation data stored in the server side object array. 



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
