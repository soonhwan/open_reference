# 클래스(class)와 인스턴스

class Singer : 
    def sing(self):
        return "Lalala~"

taeji = Singer()
c1 = taeji.sing()
print(c1)

print('-------------------------')

def factory_movie(title):
    return 
        def get_title():
            return title

c2 = factory_movie("Matrix")
print(c2)
