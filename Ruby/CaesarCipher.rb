#!/bin/ruby

n = gets.strip.to_i
s = gets.strip
k = gets.strip.to_i

puts s.split('').inject('') {|r, x|
    xord = x.ord
    if (xord >= 97 && xord <= 122)
        r += ((((xord + k) - 97) % 26) + 97).chr
    elsif (xord >= 65 && xord <= 90)
        r += ((((xord + k) - 65) % 26) + 65).chr
    else
        r+=x
    end
    r
  }

