# 編號：CANDY-007
# 程式語言：Ruby
# 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

def findSomeDifferent(numbers)
  odd_or_even = numbers.map{ |n| n % 2 }
  different_number = odd_or_even.find_index{ |x| odd_or_even.count(x) == 1 }
  return numbers[different_number]
end
p findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36]) # 印出 11
p findSomeDifferent([160, 3, 1719, 19, 11, 13, -21]) # 印出 160