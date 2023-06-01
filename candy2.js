// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {  
    let Firstchar = chars[0].charCodeAt(); //確定該陣列從哪個字母開始
    const misschar = []
    chars.forEach(x => {          
        if (x.charCodeAt() === Firstchar){
            Firstchar++;
        }else {
            misschar.push(String.fromCharCode(Firstchar));
            Firstchar+=2;
        }   
    });
    return misschar; 
}
console.log(missingChar(chars1)) // 印出 e
console.log(missingChar(chars2)) // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...