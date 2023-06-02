# 編號：CANDY-010
# 程式語言：Ruby
# 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
# 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

def expandedForm(num) 
  arr = num.to_s.chars.reverse
  number_expand = arr.map.with_index{|e, i| 
    if e != '0'
      i == 0?(e):(10.pow(i).to_s + " x " + e)
    end
  }
  return number_expand.reverse.reject(&:nil?).join(' + ')
end

p expandedForm(8) # 印出 8
p expandedForm(25) # 印出 10 x 2 + 5
p expandedForm(148) # 印出 100 x 1 + 10 x 4 + 8
p expandedForm(1450) # 印出 1000 x 1 + 100 x 4 + 10 x 5
p expandedForm(60308) # 印出 10000 x 6 + 100 x 3 + 8
