# sh*t I wanna eat
Keighley McFarland and Noriko Takizawa | Ironhack project 2
##An app to keep track of restaurants you like or want to try

Link to the app: https://sht-i-wanna-eat.herokuapp.com/

###how did we make it?
- Yelp API: for restaurant search and restaurant data
- Google maps: used to display saved restaurants on a map
- Browser geolocation: used to locate the user and give location-based search results
- Mobile interface: because it is intended for users to access primarily while on the go, focus was put on mobile

###challenges
- Google Places API vs. Yelp: we wanted to use only google products to integrate the search function and map display, but the Places API did not provide us the data types we needed about restaurants (e.g. price range, cuisine type). So we switched to the Yelp API, which had all the data we needed and was easy to use.
- Interface and formatting: we wanted to integrate a swipe function, but did not manage to implement it in the 4 days we had to build the app
- Problems with the map: the map disappeared on the search page without giving us an error. As a quick fix, we got rid of the map on the search page, as it was not necessary for the search functionality, and moved the search bar to the middle of the page

###possible future features
- fixing the map display problem on the search page
- Sharing: users should be able to send their lists or individual restaurants to friends, or make collaborative lists
- Add more filters: allow users to filter by price range, location, etc. Allow users to add their own tags (e.g. "date night", "business lunch") and filter using those.
- Improved log-in: email confirmation, investigate potential necessary data protection steps
- Desktop interface


