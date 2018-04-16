import turtle, random

color = ['red','green','blue','orange','pink','cyan']
t = turtle.Turtle()
# t.size = 3
t.speed(0)
t.pensize(3)

cnt = 0
length = 50;

while cnt < 100:
    t.pencolor(color[random.randrange(0,5)])
    t.forward(length)
    t.left(89)

    # print(length)
    length = length + 3
    cnt = cnt + 1  # cnt += 1

