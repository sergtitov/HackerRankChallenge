#!/bin/ruby

t = gets.strip.to_i
for a0 in (0..t-1)
  R,C = gets.strip.split(' ').map(&:to_i)
  G = Array.new(R)
  for G_i in (0..R-1)
    G[G_i] = gets.strip.split('')
  end
  r,c = gets.strip.split(' ').map(&:to_i)
  P = Array.new(r)
  for P_i in (0..r-1)
    P[P_i] = gets.strip.split('')
  end
  was = false
  i = j = 0
  while i <= R-r && !was
    j = 0
    while j <= C-c && !was
      if (G[i][j] == P[0][0] && !was)
        was = true
        i1 = 0
        while i1 < r && was do
          j1 = 0
          while j1 < c && was do
            was = was && (G[i + i1][j + j1] == P[i1][j1])
            j1 += 1
          end
          i1 += 1
        end
      end
      j += 1
    end
    i += 1
  end
  if was
    puts "YES"
  else
    puts "NO"
  end
end

