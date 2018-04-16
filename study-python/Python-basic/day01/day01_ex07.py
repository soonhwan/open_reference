import random

# 실수 값으로 난수 발생
num = random.random()
print(num)

# 정수값으로 난수 발생 = 범위 지정 필수
num2 = random.randint(1, 10)
print(num2)

import turtle
t = turtle.Turtle()
t.shape("turtle")
t.speed(3)

# while 문은 무한반복이므로 증감식을 써준다.
# for문은 유한반복이므로 범위까지 돈다.
# range(start, end, step)
for i in range(1,100,2):
    length = random.randint(20,60)
    angle = random.randint(-180,180)
    t.forward(length)
    t.left(angle)
    print("i = >", i)



