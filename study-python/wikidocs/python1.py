# while 문

num = 1
while num <= 100:
        print(num)
        num = num + 1

print('-------------------------')

# 비교연산

a = 1234 * 4
b = 13456 / 2

if a > b:
    print('a')
else:
    print('b')

print('-------------------------')

c = 15 * 5
d = 15 + 15 + 15 + 15 + 15

if c > d:
    print('c > d')
elif c == d:
    print('c == d')
else:
    print('c < d')

print('-------------------------')

# list, range

family = ['mother', 'father', 'gentleman', 'sexy lady']
for x in family:                    
    print('%s %s' % (x, len(x))) 

print('-------------------------')

print(list(range(2, 7)))
for i in range(4, 8):
    print(i)
