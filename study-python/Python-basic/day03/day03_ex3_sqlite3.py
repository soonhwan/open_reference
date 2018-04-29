import sqlite3

conn = sqlite3.connect('test.db')
sql = '''
delete from saram where id='hong'
'''
c = conn.cursor()
c.execute(sql)
conn.commit()
c.close()
conn.close()

