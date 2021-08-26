from flask import render_template
from flask import Flask
from flask import request
from lxml import etree

# f=open('./db.xml')
# xml=etree.parse(f)
# root=xml.getroot()
# f.close()


app = Flask(__name__)
app = Flask(__name__, static_folder="templates/static")

@app.route('/')
def index():



    return render_template ('index.html' )



app.run(host='0.0.0.0',port=5558)
