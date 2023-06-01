// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) {
    return url.replace('#about', '')
    // urlNoAnchor = url.slice(0,(url.indexOf('#')))
    // return (url.indexOf('#') === -1? url : urlNoAnchor)
  }
  
  console.log(removeAnchor("5xruby.tw")) // 印出 5xruby.tw
  console.log(removeAnchor("5xruby.tw/#about")) // 印出 5xruby.tw/
  console.log(removeAnchor("5xruby.tw/courses/?page=1#about")) // 印出 5xruby.tw/courses/?page=1

//   利用slice第二個參數為結束之索引值但不會選取該位置，因此找出'#'之字符索引值並判斷該url是否有'#'，有則回傳urlNoAnhor，無則回傳元字串 
  