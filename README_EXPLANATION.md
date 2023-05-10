# How I looked at the issue & solved it.

First thing I did was visualize a sorting method as a flow of water going to 7x24 glasses of water. I should be able to retrieve the water for any glass at anytime & know how much is in each one at anytime.

So the idea was to do several things :

## Context & provider

- Creating Context & provider for getting & sorting posts.


## Sort function

- Creating function to extract the weekday & the time of day from the timeslot.

- Using nested objects in the PostListContext, a post happening at 1am on a wednesday would be pushed to PostList[wednesday][1], and so on . Also , a postCount field is incremented in each object representing an hour when a post is sorted.

- I also compute a total post count for later use

## Timetable component

- The Timetable is built with nested loops of html table tags . I used the keys to identify which square corresponds to which timeslot. That square has a diagram component.
- The event source from the upfluence route is also set & sends the data from this component.

## The Diagram Component

the diagram component takes a postCount prop for the specific timeslot. I then use a cross product formula based on the total Post count which was also computed & stored in the Data Provider, that way, the disk component's size is proportionnal to the total stored posts in the data Provider


## DISCLAMER

There is probably a bunch of different ways to optimize. The duplicates is my main issue, but that is not something I can operate on without massive computing that would normally be the backend's responsability. That being said, I eliminated the issue on duplicates that follow each other which has helped out massively.


This issue was also very challenging. Need to go over typing & potentially optimizing the sort function some more.

Here is a loom video of the first iteration of the interface, I'm getting into styling right now.

https://www.loom.com/share/68072c0471274abf82075233f27d486e



Here is after optimizations on style & display

https://www.loom.com/share/3e014f7e464f4ce79a0d2d67e127e075
