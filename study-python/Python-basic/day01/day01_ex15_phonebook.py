# 함수를 이용한 주소록 프로그램
'''
----------------------------------------
#### 주소록 ####
----------------------------------------
1.입력 2.출력 3.검색 4.수정 5.삭제 6.종료
선택:
----------------------------------------
#### 입력기능 ####
성명입력:
전화번호:
주소:

#### 출력기능 ####
  순서 |  성명   |  전화번호  |  주소
  1   | 홍길동  |  010      |   서울시

#### 검색기능 ####

#### 수정기능 ####

#### 삭제기능 ####

'''
pList = []
def resultMsg(str):
    return print("{:~^20}".format(str))

def setTitle(str):
    return print("{:#^10}".format(str))

def makePerson():
    dict = {}
    dict["name"] = input("성명>>> ")
    dict["phone"] = input("전화>>> ")
    dict["addr"] = input("주소>>> ")
    return dict

def menu():
    print("1.입력 2.출력 3.검색 4.수정 5.삭제 6.종료")
    no = int(input("선택>>> "))
    return no

def inputData():
    setTitle(" 입력기능 ")
    pList.append(makePerson())
    resultMsg(" 주소 입력 완료! ")

def outData(list):
    setTitle(" 출력기능 ")
    print("{:^3}{:^10}{:^15}{:^20}".format("번호", "성명", "전화", "주소"))
    print("-" * 50)
    for i, p in enumerate(list):
        print("{:^3}{:^10}{:^15}{:^20}".format(i + 1, p["name"], p["phone"], p["addr"]))

def searchData():
    setTitle(" 검색기능 ")
    keyword = input("검색어 입력>>> ")
    list = []
    for i in pList:
        for k, v in i.items():
            if v.find(keyword) > -1:
                # print(k, v)
                list.append(i)
                break
    outData(list)
    resultMsg(" 검색 완료! ")

def modifyData():
    setTitle(" 수정기능 ")
    outData(pList)
    modNum = int(input("수정 번호>>> "))
    name = input("성명>>> ")
    phone = input("전화>>> ")
    addr = input("주소>>> ")
    pList[modNum-1]["name"] = name
    pList[modNum-1]["phone"] = phone
    pList[modNum-1]["addr"] = addr
    outData(pList)
    resultMsg(" 수정 완료! ")

def deleteData():
    setTitle(" 삭제기능 ")
    outData(pList)
    delNum = int(input("삭제 번호>>> "))
    del pList[delNum-1]
    outData(pList)
    resultMsg(" 삭제 완료! ")

def finish():
    resultMsg(" 프로그램 종료 - 굿바이 ")

def main():
    print("{:-^50}".format(" [주소록 프로그램] "))
    while True:
        print("\n"+"-"*50)
        no = menu()
        # no를 기준으로 분기한다.
        print("-"*50)
        if no == 1:
            inputData()
        elif no == 2:
            outData(pList)
        elif no == 3:
            searchData()
        elif no == 4:
            modifyData()
        elif no == 5:
            deleteData()
        elif no == 6:
            finish()
            break
        else:
            print("해당사항 없음")

if __name__ == "__main__":
    main()
