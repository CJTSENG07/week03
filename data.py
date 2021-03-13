import urllib.request as request
import json
import re
src="https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json"
with request.urlopen(src) as response:
    data=json.load(response)
list=data["result"]["results"]
with open("data.txt","w",encoding="utf-8") as file:
    for view in list:  
#         print(view["file"].rstrip("http"))
#        fjpg="".join(view["file"].split("jpg")[0])
        jpg=view["file"].split("http")[::]
        fjpg="".join(jpg[1])
        file.write(view["stitle"]+','+view["longitude"]+','+view["latitude"]+','+"http"+fjpg+"\n")
        