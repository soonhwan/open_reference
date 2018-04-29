import sqlite3

conn = sqlite3.connect('test.db')
sql = '''
insert into saram(id, name, age) values(?,?,?)
'''
data = ('kim1','길동',23)

c = conn.cursor()
c.execute(sql, data)
conn.commit()
c.close()
conn.close()

