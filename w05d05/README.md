# W05D05 - Mid-term Project Kickoff

### The Why of Midterms
* to reinforce everything the first 5 weeks have about
* experience working with a team
* a good checkpoint

### Pick a project

### User Stories
* user stories define how a user will interact with the app

As a ______, I can _____, because ______

As a logged in user, I can see a list of available maps, because I am interested in things in my area

As a non-logged in user, I cannot edit pins on a map, because they don't belong to me

As a logged-in user, I can fave a resource, because I want to view it later AND the heart icon turns red

planning/user-stories.md

### Nouns
* nouns become a table
* build out the ERD
* draw.io, online resources, pen and paper

planning/erd.png
planning/erd-stretch.png

### Routes
* BREAD endpoints for every resource
* REST

GET /users/new
GET /users/:id/edit

B GET   /pins
R GET   /pins/:id
E POST  /pins/:id
A POST  /pins
D POST  /pins/:id/delete

PUT - replaces a resource entirely
PATCH - updates a piece of resource

B GET     /dinocats
R GET     /dinocats/:id
E PATCH   /dinocats/:id
A POST    /dinocats
D DELETE  /dinocats/:id

### MVP
* minimum viable product
* minimum feature set that a user will find useful

* KV Minimum Viable Demo
* if you're not going to show it, DON'T BUILD IT

### Wireframes/Mockups
* lowest fidelity possible
* figma, draw.io, balsamiq, moqups, pen and paper

### User Login
* Don't do it

```js
// GET /login/5
app.get('/login/:id', (req, res) => {
  // set the encrypted cookie
  req.session.user_id = req.params.id;

  // plain-text cookie
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/home');
});
```

### Tech Choices
* Back End: Node, Express, Postgres
* Front End: HTML, CSS, JS, jQuery, tailwind, bootstrap, sass

### SPA vs Multi-page
* not mutually exclusive
* SPA - client-side rendering
* MPA - server-side rendering

### Please don't code on master/main

### Dividing up the workload
* Vertical - everyone working on a diff layer
* Horizontal - everyone working on the same layer (more merge conflicts)
* Pair Programming

### Communication
* this is the hardest part
* discord, slack, hangouts, zoom, instant messaging

Schedule
* Day 1 & 2: Fri, Sat === planning
* Day 3 - 6: Sun - Wed === grind
* Day 7: Thurs === polish rough edges, practice your demo
* Day 8: Demo day === React starts








