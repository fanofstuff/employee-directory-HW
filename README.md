# Unit 19 React Homework: Employee Directory

This program is intended to serve as a proof of concept, really - by embracing the dynamic, separated page-structure of React, we can effectively leverage all of the flexibility of Handlebars with the power of Javascript, all in the same document. While the data structure is currently somewhat limiting given the tools that we've been given, I'm cautiously optimistic about using these functions in the future. 

## Intended Usage

According to the user story that came bundled with this project, the intent of this program is to provide an employer or manager with quick access to some non-sensitive information about their employees. In particular, the user requested the ability to sort information and to filter employees to better keep track of their information (which would be particularly useful if this contained, say, 2500 entries rather than the current 25; note that the API accepts calls of up to 5k entries!). Currently, the user can sort name from A to Z by clicking on the Name header on the table, and can filter results by email address - notably, these can be combined! 

## Features

- Display employee information dynamically from an API through an Axios call
- Sort by Name, A to Z!
- Filter results by email address via the search bar
- Clear the search by using the Clear button that only shows up upon successful filter

## Link to Published Page

(https://github.com/fanofstuff/employee-directory-HW)

## How to Use

Currently, this has not been deployed. As such, in order to view and make use of this, you will need to: 
1. Download the application or clone it to your machine. 
2. Run "npm install" (without the quotes) within your cloned repo. 
3. Run "npm start" to start the application. 
4. Manipulate the auto-opened page by: 
     A. Searching with the search bar
     B. Clicking the Name header
     C. Otherwise scrolling through the presented information. 

## Credits

© 2019 fanofstuff
