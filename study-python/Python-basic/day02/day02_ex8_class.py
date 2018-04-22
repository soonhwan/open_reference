# 클래스 선언하기
# 메소드 : 클래스 내부에서 선언하는 함수
# 함수 : 클래스 밖에서 독립적으로 선언
class People:
    def __init__(self, name, phone, addr):
        self.name = name
        self.phone = phone
        self.addr = addr

    def show_info(self):
        print("name:{}, phone:{}, addr:{}".format(self.name, self.phone, self.addr))


p1 = People("ksh", "1111", "kkk")
# print("name:{}, phone:{}, addr:{}".format(p1.name, p1.phone, p1.addr))
p1.show_info()

print("-"*50)

# 클래스 실습1
# 클래스명 : 세탁기
# 속성 : 용량, 색상, 가격, 메이커
# 기능 : 빨래한다. 탈수한다. 세탁기정보 보기

def outSideFn():
    print("가루 세제 투입!")
    print("outSideFn을 호출!")

class Washer:
    def __init__(self, size, color, price, maker):
        self.size = size
        self.color = color
        self.price = price
        self.maker = maker
    def run(self):
        outSideFn()
        print(self.size, "용량을 빨래한다")
        self.dry()
    def dry(self):
        print(self.maker, "세탁기가 탈수한다")
    def show_info(self):
        print("용량 %s" %self.size)
        print("색상 %s" %self.color)
        print("가격 %s" %self.price)
        print("메이커 %s" %self.maker)
        # print("용량:{}, 색상:{}, 가격:{}, 메이커:{}".format(self.size, self.color, self.price, self.maker))

w1 = Washer(100, "회색", 2000, "삼숭")
w1.run()
w1.show_info()

