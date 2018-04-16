# 문자열

x = 'banana'
print(x[0])
print(x[2:4])
print(x[:3])
print(x[3:])
c1 = 'n' + x[1:]
print(c1)

print('-------------------------')

# 목록

prime = [2,3,7,11]
prime.append(5)
print(prime)

prime.sort()
print(prime)

del prime[4]
print(prime)

prime[0] = 1
print(prime)

orders = ['potato', ['pizza', 'Coke', 'salad'], 'hamburger']
print(orders[1][2])

characters = []
sentence = 'Be happy!'
for char in sentence:
    characters.append(char)
print(characters)

print('-------------------------')

from functools import reduce
import operator
chulsu = [90, 85, 70]
younghee = [88, 79, 92]
yong = [100, 100, 100]
minsu = [90, 60, 70]
students = [chulsu, younghee, yong, minsu]
for scores in students:
    total = reduce(operator.add, scores)
    average = total / len(scores)
    print(scores, total, average)

print('-------------------------')

# 튜플(tuple)

a = 10
b = 20
temp = a
a = b
b = temp
print(a, b)

c = 10
d = 20
c, d = d, c
print(c, d)

def magu_print(x, y, *rest):
    print(x, y, rest)

magu_print(1,2,3,5,6,7,9,10)

t = ('a', 'b', 'c')  # 괄호를 써도 되고 안 써도 됩니다
empty = () # 원소가 없는 튜플을 만들 때는 괄호를
one = 5, # 원소를 하나만 가진 튜플을 만들 땐 원소 뒤에 콤마를
print(empty, one)

p = (1,2,3)
q = p[:1] + (5,) + p[2:]
print(q)

r = p[:1], 5, p[2:]
print(r)

# 튜플을 리스트로, 리스트를 튜플로
s = (1,2,3)
g = list(s)
print(g)
g2 = tuple(g)
print(g2)

print('-------------------------')

# 사전(dict)
# 해싱 기법을 이용하기 때문에 자료가 순서대로 저장되지 않는다

dic = {}
dic['dictionary'] = '1. A reference book containing an ...'
dic['python'] = 'Any of various nonvenomous snakes of the ...'
print(dic['dictionary'])

smalldic = {'dictionary':'reference', 'python':'snake'}
print(smalldic['python'])
del smalldic['python']
print(smalldic)

print('-------------------------')

# 사전을 리스트로

family = {'boy': 'choi', 'girl': 'kim', 'baby': 'choi'}
print(family)
f_key = family.keys() # 사전 family의 key들을 새로운 리스트에 담는다.
print(f_key)  
f_val = family.values()  # 사전 family의 값들을 새로운 리스트에 담는다.
print(f_val)  
