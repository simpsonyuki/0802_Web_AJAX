var content = document.getElementById("content");

var xhr = new XMLHttpRequest();   //跟後端伺服器要資料的物件指令

xhr.open("GET", "./data.txt", "true");     //開啟物件("取得", "檔案路徑", "要非同步處理")
                                          //這裡最後面的布林值預設就已經是"true"了,所以也可以不用寫
xhr.send();                       //傳送

// 當資料載入完成後執行
xhr.onload = () => {
    content.innerText = xhr.responseText;
}
// AJAX 技術為: 後台資料儲存前台資料會自動更新, 且網頁不需要重新整理



// JSON
var product = document.getElementById("product");
var price = document.getElementById("price");

var xhrJson = new XMLHttpRequest();

xhrJson.open("GET" , "./data.json");
xhrJson.send();

xhrJson.onload = () => {
    //將取得的資料轉換為 "JSON格式"
    var json = JSON.parse(xhrJson.responseText);

    product.innerText = json["product"];
    price.innerText = json["price"];
}