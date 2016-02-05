
# Enter your code here. Read input from STDIN. Print output to STDOUT
t = gets.to_i
for x in 1..t do
    a,b = gets.split(' ').map(&:to_i)
    puts Math.sqrt(b).to_i - Math.sqrt(a).ceil + 1
end
