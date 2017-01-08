
**Project Preview**
![1-home](https://cloud.githubusercontent.com/assets/11032490/20317763/48dd0e58-ab1c-11e6-8efd-ef3c1ae2aad2.png)


**Tag You're It**

Tag You're It is a search web application that enables a user to input a search query and view the top 25 recent post with that tag.

**Explanation of Features**

Picture (String) - CLICKABLE    : Response.data[i].images.low_resolution.url
Username (String)- CLICKABLE    : Response.data[i].caption.from.username 
Caption(String)                 : Response.data[i].caption.text
Likes(Integer)                  : Response.data[i].likes.count 
Tags(Array of String) CLICKABLE : Response.data[i].tags     

Search Tags 
- Default: Search with most recent
- Sear

**Technologies**
React.js
Node/Express
Instagram API

**Confines of Instagram API (11/15/2016)**
"Apps in sandbox are restricted to 10 users
Data is restricted to the 10 users and the 20 most recent media from each of those users
Reduced API rate limits"

**Installation** (1/7/2017)
Special Instagram clone necessary for free API calls. Please email me for details.
