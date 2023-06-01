// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
    const singleNum = (num + '').split('')    
    const numberExpand = singleNum.reduce((acc,cv,cvIdx) => {
        const multiDigits = `${(10 ** (singleNum.length - cvIdx - 1))} x ${cv}`
        const singleDigits = `${cv}`

        if (cv !== '0' && cvIdx == 0){
            return acc + (cvIdx !== singleNum.length - 1 ? multiDigits : singleDigits)
        }else if (cv !== '0' && cvIdx !== 0){
            return acc + ' + ' + (cvIdx !== singleNum.length - 1 ? multiDigits : singleDigits) 
        }else return acc 
    },'');
  
    return numberExpand;
  }
  console.log(expandedForm(8)) // 印出 8
  console.log(expandedForm(25)) // 印出 10 x 2 + 5
  console.log(expandedForm(148)) // 印出 100 x 1 + 10 x 4 + 8
  console.log(expandedForm(1450)) // 印出 1000 x 1 + 100 x 4 + 10 x 5
  console.log(expandedForm(60308)) // 印出 10000 x 6 + 100 x 3 + 8

// 思考邏輯為
// 利用split將數字拆分成數字組陣列，將數字依序丟入reduce進行判斷組合：
// 1.先宣告十位數以上為10的次方+cv，個位數則為該cv，進行位數判斷
// 2.再利用以下判斷區分回傳值：
// a.該cv為陣列首位且不為0時,只回傳位數判斷後之'位數 x cv',
// b.該cv為陣列不是首位且不為0時,回傳位數判斷之' + 位數 x cv',
// c.最後如果cv為0則不進行累加