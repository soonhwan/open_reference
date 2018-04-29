# 튜플 리스트의 내용을 한꺼번에 삽입
# 리스트를 이용해서 멀티 삽입한다.

import sqlite3

conn = sqlite3.connect('test.db')

dataList = [
    ('kim', 'gildong', 23),
    ('lee', 'gilja', 45),
    ('park', 'gilsun', 75),
    ('choi', 'sunja', 65)
]

sql = '''
insert into saram(id, name, age) values(?,?,?)
'''

c = conn.cursor()
c.executemany(sql, dataList)
conn.commit()
c.close()
conn.close()

