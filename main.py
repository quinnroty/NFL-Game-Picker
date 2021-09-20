import bottle
import json
import other

@bottle.route("/")
def htmlContent():
  return bottle.static_file("webPage.html",root="")

@bottle.route("/AllPicks")
def allpicks():
  return bottle.static_file("picks.txt",root="")


@bottle.post('/send')
def picks():
  content = bottle.request.body.read()
  #print(content)
  content.decode()
  readycontent = json.loads(content)
  other.add_picks(readycontent)

bottle.run(host="0.0.0.0", port=8080, debug=True)