'''
if문은 조건 분기문이다.
if문과 if~else문과 if~elif문이 있다.
if문의 형식

if 조건:
    조건이 참이면 실행

if 조건1:
    조건1이 참이면 실행
elif 조건2:
    조건2가 참이면 실행
elif 조건n:
    조건n 참이면 실행
else:
    모든 조건에 해당 없을때 실행
'''

# 숫자를 입력받아서 음수인지? 양수인지 출력한다.
# input()은 문자열을 반환한다.
# 정수로 형변환 하기위해 int()함수 필요.
number = 0
while True:
    number = int(input("정수입력>>> "))
    print("입력받은 정수는 {}이다".format(number))

    if number == 999:
        break

    if number > 0:
        print("양수!")
    elif number < 0:
        print("음수!")
    else:
        print("0!")