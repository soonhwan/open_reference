from SearchList import getSearchList

search_list = getSearchList('http://news.naver.com/', '.main_component')

# print(search_list)
# BeautifulSoup로 HTML 분석하기
# https://appear.github.io/2017/11/29/Python/python-12/

for word in search_list:
    com_header = word.findAll('h4')
    print(com_header)



