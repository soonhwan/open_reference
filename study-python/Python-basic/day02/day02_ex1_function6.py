'''
람다 표현식
알론조 처치(1930년대)의 람다 대수 표현식
LISP 언어지원
파이썬 초기에는 람다표현식을 지원했다.
'''

# 리스트에 정렬 할 내용을 담는다.
fruits = ["갑오징어","꼴두기","복","명태","바다거북이"]

#글자의 개수를 반환하는 함수
def name_length(x):
    return len(x)

fruits.sort() # 기본 가나다 순
print(fruits)

fruits.sort(key = name_length)
print(fruits)

# 람다표현깃으로 사용
fruits2 = ["갑오징어","꼴두기","복","명태","바다거북이"]
fruits2.sort(key = lambda x:len(x))
print(fruits2)


