#!/bin/ruby

n = gets.strip.to_i
arr = gets.strip.split(' ').map(&:to_i).sort
l = arr.size
while l > 0 do 
    puts l
    min = arr[0]
    arr = arr.select{|x| x > min}
    l = arr.size
end

