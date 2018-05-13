# pip3 install bs4
# pip3 install requests

'''
 웹 크롤링
 - 웹 크롤링을 하려면 HTML, CSS 에 대한 지식이 동반 되어야 한다.
 - CSS 셀렉터, 자바스크립트 DOM의 이해가 필요하다.
 - CSS DOM 셀렉터, jQuery DOM 셀렉터
    클래스 선택 : 점(.)으로 시작 ex) .class_name
    아이디 선택자 : 샵(#)으로 시작 ex) #id_name
    속성 선택자 : 대괄호([])을 이용 ex) a[alt=name]
- 정규 표현식 import re 임포트 가능하다.
'''

import requests
from bs4 import BeautifulSoup

# request.get()을 이용해서 response 객체를 얻어온다.
# 요청 : request
# 응답 : response

response = requests.get('http://www.naver.com')
assert response.status_code is 200

# print(response)
# response에 받아온 정보의 내용을
# BeautifulSoup를 이용해서 DOM으로 변환 (DOM = HTML 형식)
# 다시 말해서 BeautifulSoup 객체가 DOM인 것이다.

# print(dom)
dom = BeautifulSoup(response.content, 'html.parser')
# DOM 형식을 변환 - 실제 HTMl 문서 형식처럼 바뀐다.

search_list = dom.select('div.ah_list span.ah_k')
# print(search_list)

for word in search_list:
    print(word.getText())