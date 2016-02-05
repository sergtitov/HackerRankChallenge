t = gets.strip.to_i
for a0 in (0..t-1)
    n,c,m = gets.strip.split(' ').map(&:to_i)
    w = (n/c)
    r = (n/c)
    while w >= m do
        r += w / m
        w = w / m + w % m
    end
    puts r
end

