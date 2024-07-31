from flask import Flask, render_template, request, jsonify
from calc import CalculatePart

app = Flask(__name__)
Calc = CalculatePart()

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/block', methods=['POST'])
def add_block():
    data = request.get_json()
    block = data.get('position')
    print(block)

    Calc.add_block(block)
    return "Block added successfully", 200

@app.route('/part', methods=['GET'])
def get_parts():
    parts = Calc.get_parts()
    return jsonify(parts)

@app.route('/reset_parts', methods=['PATCH'])
def reset_part():
    Calc.reset_parts()
    return "Reset successfully", 200

if __name__ == '__main__':
    app.run(debug=True)



