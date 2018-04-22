# 함수 선언
# 두개의 숫자를 인자로 받아서 더 큰수를 반환한다.
def maximun(x, y):
    if x > y:
        return x
    else:
        return y

# 선언 한 함수 사용
a = int(input("정수1 입력>>> "))
b = int(input("정수2 입력>>> "))
c = int(input("정수3 입력>>> "))
res = maximun(a, maximun(b, c))
print("{}, {}, {}중에 제일 큰 수는 {}이다.".format(a, b, c, res))