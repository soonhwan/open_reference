# 리스트의 선언
typeList = []
print(type(typeList)) # list

# 리스트의 요소는 타입이 같을 필요가 없다.
lis = list()
lis.append("홍길동")
lis.append("김길동")
lis.append(100)
lis.append(200)
lis.append(3.14)
print(lis)

print(lis.index(200))
'''
index 없는 요소를 검색하면 Error! 발생
print(lis.index(2000))
'''

liadd = ["홍길동", 23]
liadd += ["aaa","bbb"]
liadd.append(["c","d"]) # 중첩리스트
print(liadd)

# 리스트의 내용 정렬 - sort
lisort = [7,5,85,95,4,1,12,2]
lisort.sort()
print(lisort)
lisort.reverse()
print(lisort)

# 요소 삽입
liinsert = [1,2,3,4,5]
liinsert.insert(2,1000) # 2번지에 1000삽입 후 뒤로 밀어준다.
print(liinsert)

# 요소 제거하기
lidel = [1,2,3,4,5]
del lidel[2]
print(lidel)

# 같은 요소값을 한꺼번에 제거
lidelall = list("1122333333445566")
print(lidelall.count("3"))
for i in range(lidelall.count("3")) :
    lidelall.remove("3")
print(lidelall)

lidelall2 = list("1122333333445566")
while "3" in lidelall2:
    lidelall2.remove("3")
print(lidelall2)

def removeAll(list, el):
    while el in list:
        list.remove(el)
    return list

lidelalltemp = removeAll(lidelall2, "4");
print(lidelalltemp)