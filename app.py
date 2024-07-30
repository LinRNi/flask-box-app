from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def calculate_parts(blocks):
    total_shelves = 0
    total_doors = 0
    total_columns = 0

    block_positions = set(tuple(block) for block in blocks)

    for block in blocks:
        x, y, z = block
        # 每個方塊初始需要的零件
        total_shelves += 2
        total_doors += 4
        total_columns += 4

        # 檢查垂直堆疊，共享層板
        if (x, y + 1, z) in block_positions:
            total_shelves -= 1
        if (x, y - 1, z) in block_positions:
            total_shelves -= 1

        # 檢查水平相鄰，共享門板和柱子
        if (x + 1, y, z) in block_positions:
            total_doors -= 1
            total_columns -= 2
        if (x - 1, y, z) in block_positions:
            total_doors -= 1
            total_columns -= 2
        if (x, y, z + 1) in block_positions:
            total_doors -= 1
        if (x, y, z - 1) in block_positions:
            total_doors -= 1

    return {
        "total_shelves": total_shelves,
        "total_doors": total_doors,
        "total_columns": total_columns
    }

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    blocks = request.json.get('blocks')
    parts = calculate_parts(blocks)
    return jsonify(parts)

if __name__ == '__main__':
    app.run(debug=True)
