// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
    // 實作寫在這裡
    const words = input.split(" "); // ["lorem", "ipsum", "sit", "amet"]
    const wordsScore = words.map(word  => {
        return Array.from(word).reduce((acc, cv) => acc + (cv.charCodeAt() - 96),0)
    })
    const maxScore = Math.max(...wordsScore)
    return words[wordsScore.indexOf(maxScore)]
  }
  
  console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
  console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
  console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there

//   思考邏輯為將input值轉為單字陣列在丟入map中利用from（），將單字陣列中字串分解為字母並依序丟入reduce中利用charCodeAt轉為number進行累加，即可得出個字串的分數
//   再利用Math.max找出最大值再回傳words該索引位置之單字
  