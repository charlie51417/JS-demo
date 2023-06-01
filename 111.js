function expandedForm(num) {
    const numChar = (num + '').split('')    
   
    const numberExpand = numChar.reduce((acc,cv,cvIdx) => {
       const multiDigits = `${(10 ** (numChar.length - cvIdx - 1))} x ${cv}`
       const singleDigits = `${cv}`
       if (cv !== '0'){ 
      return acc + (cvIdx !== numChar.length - 1 ? multiDigits : singleDigits) + (cvIdx !== numChar.length - 1 ? ' + ' : '');
       }else return acc 
    },'');
  
    return numberExpand;
  }
  console.log(expandedForm(8)) // 印出 8
  console.log(expandedForm(25)) // 印出 10 x 2 + 5
  console.log(expandedForm(148)) // 印出 100 x 1 + 10 x 4 + 8
  console.log(expandedForm(1450)) // 印出 1000 x 1 + 100 x 4 + 10 x 5
  console.log(expandedForm(60308)) // 印出 10000 x 6 + 100 x 3 + 8