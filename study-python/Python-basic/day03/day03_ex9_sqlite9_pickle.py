import pickle

class Saram:
    def __init__(self,no,id,name,age):
        self.no = no
        self.id = id
        self.name = name
        self.age = age
    def getData(self):
        return str(self.no)+","+self.id+","+self.name+","+str(self.age)

s1 = Saram(1,'HONG','Gildong',23)
s2 = Saram(2,'KIM','Sunja',25)
s3 = Saram(3,'KANG','Malja',26)

lis = [s1,s2,s3]

# Saram 객체에 적당한 Data를 넣고 pickle을 이용해서 저장-로드 한다.
# pickle 모듈을 이용해서 lis 리스트를 파일 입/출력 하라.

with open('saram.picke', 'wb') as f:
    pickle.dump(lis, f)

with open('saram.picke', 'rb') as f:
    load_data = pickle.load(f)

print(load_data)
print(load_data[0].getData())

for saram in load_data:
    print(saram.getData())
