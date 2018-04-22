# 부모클래스 : 동물
# 부모클래스 속성 : 이름, 크기, 색상
# 부모클래스 기능 : 움직인다, 먹는다

# 자손클래스1 : 닭
# 자손클래스1 속성 : 이름
# 자손클래스1 기능 : 운다, 날다

# 자손클래스2 : 개
# 자손클래스2 속성 : 이름
# 자손클래스2 기능 : 소리낸다, 뛴다

class Animal:
    def __init__(self, name, size, color):
        self.name = name
        self.size = size
        self.color = color
    def move(self):
        print(self.name, "움직인다.")
    def eat(self):
        print(self.name, "먹는다.")

class Chicken(Animal):
    def __init__(self, name, size, color):
        super().__init__(name, size, color)
        self.name = name
    def show(self):
        self.sound()
        self.fly()
        self.move()
        self.eat()
    def sound(self):
        print(self.name, "운다.")
    def fly(self):
        print(self.name, "날다.")
    def move(self):
        super().move()
    def eat(self):
        super().eat()

class Dog(Animal):
    def __init__(self, name, size, color):
        super().__init__(name, size, color)
        self.name = name
    def show(self):
        self.bark()
        self.run()
        self.move()
        self.eat()
    def bark(self):
        print(self.name, "소리낸다.")
    def run(self):
        print(self.name, "뛴다.")
    def move(self):
        super().move()
    def eat(self):
        super().eat()

c = Chicken("치킨런", 10, "red")
c.show()

d = Dog("진도개", 20, "blue")
d.show()