# 매개변수의 갯수 정해지지 않은 함수 선언
# 매개변수 선언시 *을 붙인다.
# 튜플 형식으로 매개변수가 전달 된다.
def maxinum2(*args):
    max = 0
    for arg in args:
        if arg > max:
            max = arg
    return max

print(maxinum2(3,5,6,3,3,5,63))