var btn = document.getElementById("btn"),
    uls = document.getElementById("uls"),
    txt = document.getElementById("txt");
btn.onclick = function(){
    var lis = document.getElementsByTagName("li");
    var oLi = document.createElement("li");
    uls.appendChild(oLi);
    oLi.innerHTML = txt.value+"<a href='javascript:;'> 删除</a>";
    var oA = document.getElementsByTagName("a");
    for(var i=0;i<oA.length;i++){
        oA[i].onclick = function(){
            uls.removeChild(this.parentNode);
        }
    }
}