# frozen_string_literal: true

# fibonacci solved using iteration
def fibs(num)
  arr = []
  (0..num).each do |n|
    arr << (n < 2 ? n : arr[-1] + arr[-2])
  end
  arr
end

# fibonacci solved recursively
def fibs_rec(num)
  # return the number if it's less than 2 to avoid unnecessary calculations
  num < 2 ? num : fibs_rec(num - 1) + fibs_rec(num - 2)
end
