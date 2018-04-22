'''
디폴트 매개변수
매개변가 값이 없으면 기본값을 사용하는 매개변수
def 함수(a="no-name", b="주소없음", c=0)
일부 매개변수만 기본값을 사용한다.
기본 매개변수 뒤에는 일반 매개변수가 올수 없다.
def 함수2(a,b,c=0,d="Hello")
함수2("홍길동","은평구")

def ex5(a,b,c=0,d="Hello"):
    print(a,b,c)
ex5(1,2,3)

아무 일도 하지 않는 함수
def myfunc():
    pass
myfunc()
'''

def myfunc():
    '''
    이함수는 어쩌고 저쩌고
    아무 일도 하지 않습니다.
    '''
    pass
myfunc()
help(myfunc) # 주석을 보여준다
myfunc.__doc__ # 문서 설명을 보여준다. 아무일도 안한다.

# pass의 기능
# 아무일도 없을때 그냥 넘어가라는 의미

if True:
    # pass

print("아무일 없다.")