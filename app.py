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


"""

每次跑for -> 1.判斷邏輯太難處理, 2. 耗時
增加方塊時，先呼叫/block計算part數量，再呼叫/part取得數量

1. 建議把數量放在外面，每次加方塊的時候傳當下新增方塊的的x,y,z 和cubeArray
2. post/block -> 每次新增只計算當下要加多少part
3. get/part -> 取得總計parts
4. patch/rest_parts -> 再開一個api做歸零


"""

