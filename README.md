# Food Access Map
Code for Pittsburgh w/ Pittsburgh Food Policy Council

## FAQ

**In simple English, how does all of this work?** 

The goal for this project is to create an app for mapping and locating food resources in Pittsburgh. The goal is to address food insecurity by allowing individuals to access the app and find what food resources are in their area.

 **What if I want to add a food source?**

Email steven.saylor@pitt.edu with the food source to be added

**What if I think information about a food source is inaccurate?** 

•	Email steven.saylor@pitt.edu 

**I’m new to this project, what can I do?** 

The Github has an issues page available at: https://github.com/CodeForPittsburgh/food-access-map/issues
Anybody can work on these issues, reach out to others working on the issues, and leave comments to ask questions/give an idea of progress.

**On what platform(s) is it set up?**

•	Front-end uses React Framework (JS & HTML) and Redux, which isn’t yet in use
•	Back-end is Django. 
•	Database is Postgres, but Django extracts all the database-specific stuff, so that shouldn’t matter
•	GIS stuff. Geographic Information Systems. 

**What coding skills are needed to help out with this/maintain this?**

•	HTML, CSS, JS
•	Python
•	A lot of the Data stuff is R

**If I wanted to run a test of this on my own computer, how would I do that? What would I need to do?**

Please see the "Four Steps for Setting Up The App To Test/Demo" section

•	In the server, something was thrown together, but it needs to be updated because it didn’t cover a lot of stuff
•	For the map, a lot of the boilerplate stuff was removed. 
•	Just point people to the Readme’s and put it in those readmes. 

Directions
React Boilerplate is simply a structure for the project that comes with a whole bunch of dev tools, many of which we haven’t used, many we probably won’t use, but are there if we need them. And their documentation is pretty good. 

The documentation for Boilerplate can be found here: 
[https://github.com/react-boilerplate/react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

## Four Steps for Setting Up The App To Test/Demo
Note: The npm package manager is required for this. Download and install npm at https://www.npmjs.com/

**1: clone the repo**
```
git clone https://github.com/CodeForPittsburgh/food-access-map
```
**2: move to the new directory**
```
cd food-access-map
```
**3: install the dependencies (this could take over ten minutes)**
```
npm install
```
**4: run the dev server**
```
npm run start 
```
•	“npm run start” will create a mini-server that will host the map and make it available for the web browser 
•	To view the current version of the map/app on the browser, you need to go to LocalHost:3000

## Design Mockups
Design mockups can be found in [docs/design](docs/design)
