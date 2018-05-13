import requests
from bs4 import BeautifulSoup

def getSearchList(url, selector):
    response = requests.get(url)
    assert response.status_code is 200
    dom = BeautifulSoup(response.content, 'html.parser')
    return dom.select(selector)
