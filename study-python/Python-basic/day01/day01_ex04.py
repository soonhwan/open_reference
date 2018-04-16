'''
1. 문자열 연산 : 파이썬에서는 문자열 연산에 더하기 곱하기 가능
    - 문자열 더하기 : +
    - 문자열 반복 : *

2. 인덱싱과 슬라이싱
    - print(str1[3]) 3번째
    - print(str[3:]) 3번째부터 끝까지
    - print(str[:3]) 처음부터 3번째까지
    - print(str[-3]) 뒤에서 부터 3번째
'''

str1 = 'Hello python world'
print(str1[6])
print(str1[6:])
print(str1[:6])
print(str1[-5])

'''
3. 인덱싱을 이용해서 새로운 문자열 만들기 
    str2 = 'Hello world!'
    str2를 'Hello  Python world!' 으로 변경 하고 싶다면? 
'''

str2 = 'Hello world!'
idx = str2.index('world')
print(str2[:idx])
print(str2[idx:])

str2 = str2[:idx] + 'Python ' + str2[idx:]
print(str2)
print(str2[2:-3])

print('사랑해~'*50)
print('{:-^50}'.format('사랑해'))
print('{:->50}'.format('사랑해'))
print('{:-<50}'.format('사랑해'))

name = '홍길동'
age = 45
info = '성명:{0} | 나이:{1}'.format(name,age)
print(info)

mutiline = '''
여러행 문자열
우리나라는 {}이다
서기 {}년{}월{}일
'''.format('대한민국',2018,4,15)
print(mutiline)

# 파이썬에서는 문자열(string)과 문자(charator)의 구분이 없다.
# 문자열 문자 모두 '' 또는 ""로 표현.
aaa = 100
print(type(aaa)) # int
aaa = '대한민국'
print(type(aaa)) # str

import turtle
aaa = turtle.Turtle()
print(type(aaa)) # turtle.Turtle

'''
숫자형 연산
    - 사칙연산 : + - * /
    - 승 연산 :
    - 나머지 연산 : %
    - 소수점 자리 버림 연산 : //
    - 나누기연산 : / 
'''
print(2**16)
print(10/3)
print(10//3)

'''
특수문자 기호(이스케이프 코드)
\n \r \' \"
\000 : 널문자
\a : 비프음(알람, 경고음)
\t : 탭키 하나
\\ : 역슬래시
'''

'''
변환 문자열 사용(형식지정자)
%s : 문자열
%i : 정수
%d : 정수
%f : 실수
%o : 8진수
%x : 16진수
%0.5f :  소숫점 아래 5글자 표시 
        마지막 자리는 자동으로 반올림 한다.
'''
print('%0.5f' %2.5555555)
print('%10d' %100)
print('성명:%s, 나이:%d\n' %('이순신', 55))