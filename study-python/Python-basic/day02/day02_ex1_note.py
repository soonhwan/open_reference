# 함수
'''
- 함수는 명령어들의 묶음(집합)이다.
- 하나의 함수는 하나의 기능에 집중하는것이 좋다.
- 함수나 클래스는 모듈형태로 저장된다.
- 식별자: 변수명, 함수명, 클래스명 등
- 함수는 식별자와 매개변수 몸체로 이루어 진다.

def 함수명(매개변수, 매개변수...):
    함수의 몸체(콜론(:) 이하 탭키 들여쓰기)
    여기에 하는 일들을 묶어둔다.
    return 반환값

- 함수는 선언부와 호출부가 있다.
- 함수를 호출하면 몸체 부분이 실행된다.
- 함수를 호출할때는 함수명 호출 ex)함수명(인자값)
- 필요에 따라 매개변수와 반환값을 사용 가능
'''


'''
(연습문제1)
두개의 숫자를 입력 받아서 합을 반환하는 함수를 선언하고 사용
세개의 숫자를 입력 받아 세 수의 합을 반환 하도록 사용 해 본다.
print("{} + {} + {}의 합은 {}이다.".format(a,b,c,s1))
'''
def sum(a, b):
    return a + b

a = int(input("정수1 입력>>> "))
b = int(input("정수2 입력>>> "))
c = int(input("정수3 입력>>> "))
s1 = sum(a,sum(b,c))


'''
(연습문제2)
두개의 숫자를 입력 받아서 작은수를 반환하는 함수를 선언하고 사용.
세개를 받아서 세수중 가장 작은수를 반환하도록 사용해 본다.
'''
def minnum(a, b):
    if a < b:
        return a
    else:
        return b
a2 = int(input("정수1 입력>>> "))
b2 = int(input("정수2 입력>>> "))
c2 = int(input("정수3 입력>>> "))
s2 = minnum(a2, minnum(b2, c2))
print("{}, {}, {}중에 제일 작은수는 {}이다.".format(a2,b2,c2,s2))


'''
(연습문제3)
무작위 개수의 숫자를 전달 받아서 총합을 반환하는 함수 addTotal
'''
def addTotal(*args):
    total = 0
    for arg in args:
        total = total + arg
    return total

print(addTotal(1,2,3,4,5,6,7,8,9,10))

def printInfo(*args):
    print(type(args)) # tuple
    print(len(args))
    for arg in args:
        print(arg)

printInfo("홍길동", "서울시", 45)


'''
딕셔너리 형식으로 매개변수 전달
매개변수 ** 표시를 한다.
def 함수(**dictArgs):
    처리

{"a1:"홍길동", "a2":"은평구", "a3":"45"}
함수(a1="홍길동", a2="은평구", a3=45)

(예제4)
딕셔너리 형식의 매개변수 선언
'''
def printDict(**dictArgs):
    print(dictArgs)
    print(dictArgs.keys())
    print(dictArgs.items())

printDict(a1="홍길동", a2="은평구", a3=45)

