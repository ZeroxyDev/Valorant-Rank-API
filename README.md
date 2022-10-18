# Valorant Rank API
Fetch your Valorant rank dynamically with this API.

# StreamElements/NightBot Usage
The code below is an example of use, simply change the username, # and region.


Only mmr:
`$(urlfetch https://localhost/mmr/valorant/name/tag/region)`

Only last match rr:
`$(urlfetch https://localhost/lastgame/valorant/name/tag/region)`

All:
`$(urlfetch https://localhost/all/valorant/name/tag/region)`

Change language:

add /es to the end

ex: `$(urlfetch https://localhost/all/valorant/name/tag/region/es)`

Replace the username, tag (#) and region.
