from flash import Flask

app = Flask(__name__)

@app.route('/')
def index():
		return "Test"

if __name__ == 'main':
	app.run(debug=True, host='0.0.0.0')