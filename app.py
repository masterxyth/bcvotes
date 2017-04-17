from flask import *
import pandas as pd
import csv
app = Flask(__name__)

@app.route("/") #Redirect link

def show_tables():
    data = pd.read_csv('standing-nominees.csv') #reading the CSV file #Removing column header name
    riding = pd.read_csv('riding.csv')
    riding = [tuple(x) for x in riding.to_records(index=False)]
    return render_template('index.html',riding=riding, #returning view.html file from templates, using the data returned as a table in html with Class Data
    titles = ['Candidates']) #Table Title

if __name__ == "__main__":
    app.run(debug=True)

candidate = pd.read_csv('candidate.csv')
riding = pd.read_csv('riding.csv')
riding = [tuple(x) for x in riding.to_records(index=False)]
candidate = [tuple(x) for x in candidate.to_records(index=False)]

riding
