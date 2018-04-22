# 부모클래스 선언
class People:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def getInfo(self):
        # 튜플형태로 리턴 가능
        return self.name, self.age

class Student(People):
    def __init__(self, school, name, age):
        super().__init__(name, age)
        self.school = school
    def showInfo(self):
        # print(super().getInfo())
        print("%s, %s" %super().getInfo(), end=", ")
        print(self.school)

# 자손의 객체를 선언하면 부모객체도 사용가능.
student = Student("KOSMO대학교", "홍길동", 23)
student.showInfo()
