//基礎
// for (let i = 1; i <= 10; i++){
//     console.log("*".repeat(i));
// }

//進階
//tree
let treeH = prompt("請輸入聖誕樹葉層數：");
let treeW = treeH * 2 - 1
for (let tree = 1, space = (treeW - 1) / 2; tree <= treeW; tree += 2){
    console.log(" ".repeat(space) + "*".repeat(tree));
    space -= 1;
}

// trunk
//初始為長寬為1x3,每多三層樹葉,樹幹寬度就+2"*",樹幹高小於三層=0
let trunkW = Math.trunc((treeH / 3)) * 2 - 1 //樹幹寬
let trunkS = (((treeW - 1) / 2) - ((Math.trunc((treeH / 3))) - 1))//樹幹空白
if (treeH >= 3){
    for (let i = 1; i <= 3; i++){
        console.log(" ".repeat(trunkS) + "*".repeat(trunkW) + " ".repeat(i));
    }
}
