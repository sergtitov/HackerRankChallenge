#!/bin/ruby

t = gets.strip.to_i
for a0 in (0..t-1)
    n = gets.strip
    ni = n.to_i
    puts n.split('').map(&:to_i).select {|x| x > 0}.inject(0) {|r, x| r += 1 if ni % x == 0; r}
end

