# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

* [x] storing passwords as plain-text
* [x] cookies stored as plain-text
* [x] http vs https

https://localhost:8083/login

### Hashing
* 1 way process
* plain-text password => hashing algo => hash

'secret' + 'fjasdhgfjahsdjfha'

* plain-text password + salt => hashing algo => hash

### Encryption
* 2 way process

* plain-text cookie => encryption algo => encrypted cookie => browser
* encrypted cookie => decryption algo => plain-text cookie => lookup the user

cookies are set on the response object
we set plain-text cookies on `req.session`
before the response goes back, the middleware takes `req.session`, encrypts it, and calls `res.cookie('tiny', 'asjdfhlakhsdfhasd')`

* public key/private key

client ====> server

https://www.google.com/
https://www.google.com/

### REST
* REpresentational State Transfer
* the routes we use indicate the relationship of the underlying data
* naming convention
* RESTful

GET /retrieve-all-users
GET /get-all-messages-from-db

B GET   /dinocats
R GET   /dinocats/:id
E POST  /dinocats/:id
A POST  /dinocats
D POST  /dinocats/:id/delete

B GET     /dinocats
R GET     /dinocats/:id
E PATCH   /dinocats/:id
A POST    /dinocats
D DELETE  /dinocats/:id

POST /login
POST /register


HTML only understands GET, POST

PUT - completely replace a resource
PATCH - replace a piece of a resource
DELETE - deletes a resource

app.delete('/users', (req, res) => {});

these are pure semantics

div
header
nav
footers
aside
section

                       req.method = req.query._method =>
/urls?_method=PATCH => req.query._method              => app.patch()
client POST         => method-override middleware     => route handler

req.body
req.params
req.query


https://www.google.com/search?
q=javascript&
sxsrf=ALiCzsaX40arQrxIAl-2CERsprtdfzyoZA%3A1655406238699&
source=hp&
ei=nn6rYvy5KPTG0PEPi9SysAI&iflsig=AJiK0e8AAAAAYquMrpxi59kCMGodqrosHWSG3oJq4v2I&
ved=0ahUKEwj8gMLm1LL4AhV0IzQIHQuqDCYQ4dUDCAk&uact=5&
oq=javascript&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBOgYIswEQhQQ6CAguEIAEELEDOgsILhCxAxCDARDUAjoLCC4QgAQQsQMQgwE6CAguELEDEIMBOgUIABCABDoICAAQsQMQgwE6BQguEIAEOg0ILhCxAxDHARCjAhAKOggIABCABBCxAzoLCC4QgAQQxwEQrwE6CggAELEDEIMBEApQ8QNYlhJgrhNoA3AAeACAAVGIAcMFkgECMTKYAQCgAQGwAQE&sclient=gws-wiz