import sqlite3

conn = sqlite3.connect('test.db')
sql = '''
insert into saram(id, name, age) values('kwon','gildong',36)
'''
c = conn.cursor()
c.execute(sql) # 실행
conn.commit() # 명령어를 실행을 적용한다.
c.close()
conn.close()


