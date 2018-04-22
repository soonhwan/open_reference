#### 파일 입출력 하기
# 기본적인 텍스트 입출력
# (객체 형태의 입출력은 pickle 모듈 사용)
# f = open("파일경로", "모드") <---> f.close()
# - 모드 : r, w, a, b, x, t +
# w 모드는 파일이 없으면 생성 한다.
# 읽어 올때 사용하는 함수: read(), readLine(), readAll()
# 기록 할때 사용하는 함수: write()
# 추가 할때 사용하는 함수: append()

'''
f = open("io_test.txt", "w") #파일이 없으면 생성한다.
f.write("Hello world!")
f.close()
'''

pList = [
    {"name":"Hong","phone":"1111","addr":"서울"},
    {"name":"Hong2","phone":"2222","addr":"서울2"},
    {"name":"Hong3","phone":"3333","addr":"서울3"},
    {"name":"Hong4","phone":"4444","addr":"서울4"}
]

f = open("io_addr.txt","w")
for dict in pList:
    txt = "{}|{}|{}\n".format(dict["name"], dict["phone"], dict["addr"])
    f.write(txt)
f.close()

f = open("io_addr.txt","r")
# data = f.read()
# data = f.readline()
data = f.readlines()
print(data) # 리스트 형태로 반환
print("\n")
pList2 = []
for strAddr in data :
    # print(strAddr, end="")
    strAddr = strAddr[0:-1]
    lis = strAddr.split("|")
    dic = {}
    dic["name"] = lis[0]
    dic["phone"] = lis[1]
    dic["addr"] = lis[2]
    pList2.append(dic)
print(pList2)