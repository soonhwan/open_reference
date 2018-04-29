# select 문을 이용해서 가져온 결과는 fetch 한다.

import sqlite3

conn = sqlite3.connect('test.db')
sql = '''
select * from saram order by no desc
'''

c = conn.cursor()
c.execute(sql)

# execute() 하고 나면 c에 결과가 담긴다.
# c.fetchone() 또는 c.fetchmany() 를 이용해서 사용

#print(c.fetchone())

# for saram in c.fetchall():
#    print(saram)

for saram in c.fetchmany(3):
    print(saram)

conn.commit()
c.close()
conn.close()