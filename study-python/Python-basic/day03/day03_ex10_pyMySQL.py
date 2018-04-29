import pymysql

conn = pymysql.connect(
    user='comstudy21',
    passwd='comstudy21',
    host='localhost',
    db='comstudy21',
    charset='utf8'
)

print(conn)

sql = '''
    insert into saram(id,name,age) values(%s,%s,%s)
'''%('KIM2','GILSOON',34)

'''
try:
    c = conn.cursor()
    c.execute(sql)
    conn.commit()
except:
    conn.rollback()
'''

c = conn.cursor()
c.execute(sql)
conn.commit()
c.close()
conn.close()