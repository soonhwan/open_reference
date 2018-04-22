# 클래스와 메소드를 활용한 주소록 프로그램

class Meun:
    def __init__(self, menuList):
        self.menuList = menuList
    def showMenu(self):
        for no, item in enumerate(self.menuList):
            print("{}.{}".format(no+1, item), end=" ")
    def choiceMenu(self):
        no = int(input("Choice>>> "))
        return no
    def play(self):
        self.showMenu()
        print()
        return self.choiceMenu()

class People:
    def __init__(self, name, phone):
        self.name = name
        self.phone = phone
    def showData(self):
        print("{}\t{}".format(self.name, self.phone))

addrList = []
def inputDate():
    print("#### 입력 기능 ####")
def outputDate():
    print("#### 출력 기능 ####")
def finish():
    print("#### 프로그램 종료 ####")
    exit(0)
def save():
    print("#### 저장 기능 ####")

def main():
    print("#### 주소록 프로그램 ####")
    menuList = ["입력", "출력", "종료", "저장"]
    factory = [inputDate, outputDate, finish, save]
    menu = Meun(menuList)
    while True:
        no = menu.play()
        if no in range(1, len(menuList)+1):
            # print("no가 정상 값이다.")
            factory[no-1]()
        else:
            print("no가 적합하지 않다.")


if __name__ == "__main__":
    main()