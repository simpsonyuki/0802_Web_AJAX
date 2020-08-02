var content = document.getElementById("content");

var xhr = new XMLHttpRequest();   //跟後端伺服器要資料的物件指令

xhr.open("GET", "./ajax.js", "true");     //開啟物件("取得", "檔案路徑", "要非同步處理")
                                          //這裡最後面的布林值預設就已經是"true"了,所以也可以不用寫
xhr.send();                       //傳送

xhr.onload = () => {
    content.innerText = xhr.responseText;
}