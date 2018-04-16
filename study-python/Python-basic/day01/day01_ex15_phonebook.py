# phonebook list
pList = []

while True:
    select = int(input("1.입력 2.출력 3.검색 4.수정 5.삭제 6.종료\n선택: "))
    if select == 1:
        print("{:-^50}".format(" 입력기능 "))
        people = {}
        people["name"] = input("성명>>> ")
        people["phone"] = input("전화>>> ")
        people["addr"] = input("주소>>> ")
        pList.append(people)
        print("주소 입력 완료!")
    elif select == 2:
        print("{:-^50}".format(" 출력기능 "))
        print("{:^3}{:^10}{:^15}{:^20}".format("번호","성명","전화","주소"))
        print("-"*50)
        for i,p in enumerate(pList):
            # print("%-10s%-20s")
            print("{:^3}{:^10}{:^15}{:^20}".format(i+1, p["name"],p["phone"],p["addr"]))
    elif select == 3:
        print("{:-^50}".format(" 검색기능 "))
    elif select == 4:
        print("{:-^50}".format(" 수정기능 "))
    elif select == 5:
        print("{:-^50}".format(" 삭제기능 "))
    elif select == 6:
        print("{:-^50}".format(" 프로그램 종료 - 굿바이 "))
        break
    else:
        print("선택 사항 없습니다.")

