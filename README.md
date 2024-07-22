# Flask Box App

這是一個使用Flask框架構建的三維互動網頁應用程序。用戶可以在網頁端自由拼接方塊，並計算所需的零件數量。

## 文件結構

flask-box-app/
│
├── app.py
├── .gitignore
├── README.md
└── templates/
└── index.html


### `app.py`

這是主要的後端文件，包含以下功能：
- 初始化Flask應用
- 定義計算所需零件數量的函數 `calculate_parts`
- 定義兩個路由：
  - `/`：加載主頁面
  - `/calculate`：接收POST請求，計算零件數量並返回結果

### `templates/index.html`

這是主要的前端文件，包含以下功能：
- 使用Three.js庫實現三維互動界面
- 用戶可以通過點擊新增或刪除方塊
- 更新方塊數量和所需零件數量的統計信息

### `.gitignore`

這個文件包含要忽略的文件和目錄，例如虛擬環境目錄和Python編譯文件。

## 使用說明

### 環境設置

1. 安裝Python 3.x
2. 創建虛擬環境並激活它
   ```bash
   python -m venv venv
   source venv/bin/activate   # 對於Windows，運行 `venv\Scripts\activate`
3.安裝所需依賴
  pip install flask

運行應用
在激活虛擬環境後，運行以下命令啟動Flask應用：
  python app.py
  打開瀏覽器，訪問 http://127.0.0.1:5000/ 以查看應用。
