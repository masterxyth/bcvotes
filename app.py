from flask import *
import pandas as pd

app = Flask(__name__)

@app.route("/") #Redirect link

def show_tables():
    data = pd.read_csv('standing-nominees.CSV') #reading the CSV file
    data.set_index(['candidate_id'], inplace=True) # Setting the first column as the index
    data.index.name=None #Removing column header name
    return render_template('index.html',tables=[data.to_html(classes='data')], #returning view.html file from templates, using the data returned as a table in html with Class Data
    titles = ['Candidates']) #Table Title

if __name__ == "__main__":
    app.run(debug=True)
