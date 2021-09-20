import os
import json

def add_picks(picks):
  with open("picks.txt","a") as file:
    file.write("\n")
    file.write(json.dumps(picks))

