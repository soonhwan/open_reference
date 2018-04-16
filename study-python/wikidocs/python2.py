# 함수

def hap(a,b):
    print(a+b)

def gop(a,b):
    print(a+b)

def hap_gop(a, b):
    hap(a,b)
    gop(a, b)

print('-------------------------')

# 재귀함수

def countdown(n):
    if n == 0:
        print('Blastoff!')
    else:
        print(n)
        countdown(n-1)

countdown(3)

print('-------------------------')

def multi(a):
    i = 1
    while i <= 9:
        print(a, ' * ', i, ' = ', a * i)
        i = i + 1

multi(3)

print('-------------------------')

# 전역변수

x = 10
def printx():
    global e  # 전역변수
    e = 9
    print(x, e)

printx()

print('-------------------------')

# return

def rt(x):
    a = 3
    b = 5
    y = a * x + b
    return print(y)

rt(10)

print('-------------------------')

print(1 + 1 == 2)
print(1 + 1 == 3)

print('-------------------------')

# Lambda 형식

def ld(x, y):
    v = x + y
    return print(v)
ld(10,20)

c = (lambda x,y: x + y)(1,2)
print(c)

print('-------------------------')

# map(함수, 리스트)

c2 = list(map(lambda x: x ** 2, range(5)))
print(c2)

print('-------------------------')

# reduce(함수, 순서형 자료)

from functools import reduce
c3 = reduce(lambda x,y: x+y,[0,1,2,3,4])
c4 = reduce(lambda x,y: y+x,'abcde')
print(c3)
print(c4)

print('-------------------------')

# filter(함수, 리스트)
c5 = list(filter(lambda x: x < 5, range(10)))
print(c5)
c6 = list(filter(lambda x: x % 2, range(10)))
print(c6)
