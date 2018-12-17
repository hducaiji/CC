//GLOBAL

function addLoadEvent(func) { //func代表打算在页面加载完毕时添加执行的函数
    var oldonload = window.onload;
    if (typeof window.onload != 'function') { //如果处理函数还没绑定任何函数
        window.onload = func;
    } else {
        window.onload = function () { //如果处理函数已经绑定了一些函数，就追加
            oldonload();
            func();
        }
    }
}
// 创建一个与insertBefore对应的函数
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
//添加类名
function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className + " " + value;
        element.className = newClassName;
    }
}

//突出显示当前页面导航链接
function highlightPage() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementsByClassName) return false;
    
    var toplis = document.getElementsByClassName("top-li");
    if (toplis.length == 0) return false;
    
    var links = toplis[0].getElementsByTagName('a');
    var linkurl;
    for (var i = 0; i < links.length; i++) {
        linkurl = links[i].getAttribute("href");
        if (window.location.href.indexOf(linkurl) != -1) {
            links[i].className = "here";
            links[i].href = "#0";
//            var linktext = links[i].lastChild.nodeValue.toLowerCase();
//            document.body.setAttribute("id", linktext);
        }
    }
}
addLoadEvent(highlightPage);

//放置到导航上时改变cc标题
function changecc() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementsByClassName) return false;
    if (!document.getElementById) return false;
    
    var toplis = document.getElementsByClassName("top-li");
    if (toplis.length == 0) return false;
    var links = toplis[0].getElementsByTagName('a');
    
    var cctop = document.getElementById("top-cc");
    if (cctop.length == 0) return false;
    var cch1 = cctop.getElementsByTagName("a");
    if (cch1.length == 0 ) return false;
    
    var destination;
    for (var i = 0; i < links.length; i++) {
        links[i].onmouseover = function() {
            destination = this.getAttribute("href");
            if (destination.indexOf("artwork") != -1) {
                cch1[0].innerHTML = "CC's photo";
            }
            if (destination.indexOf("about") != -1) {
                cch1[0].innerHTML = "CC's info";
            }
        }
        links[i].onmouseout = function() {
            cch1[0].innerHTML = "CC.";
        }
    }
}
addLoadEvent(changecc);


































