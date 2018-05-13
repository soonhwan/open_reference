import time
from SearchList import getSearchList

for cnt in range(999999):
    search_list = getSearchList('http://www.naver.com', 'div.ah_list span.ah_k')
    for i, element in enumerate(search_list):
        # if i == 5:
        #     break
        print(i+1, element.getText())

    time.sleep(10)
    print('{:-^50}'.format('10초 한번씩 검색'))
