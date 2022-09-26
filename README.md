# Fast_Fetch
Demonstration of an Optimized method of fetching large amount of data and rendering it.

index.html is hosted on port 3000 and it is the faster loading webpage. It is served by app.js
another_index.html is hosted on port 8000 and it is the slower loading page. It is served by another_app.js.

# How its done
The data is broken into chunks of 10,000 elements and it is rendered incerementaly.

# Note
Use fillDB script to fill the data base with data. To clearly see the result make sure to have at least 100,000 elements in the database.

# Things to be improved
The algorithm is not perfect and if a lot of get requests are made quickly then the data rendered might be incorrect. I am currently working on it.
