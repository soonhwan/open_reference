# sqlite3 설치 방법
# https://blog.naver.com/phh8029/221151882779

import sqlite3

# sqlite3 db connection
# sqlite3 에는 password가 없다.

# cmd에서 sqlite3 test.db 명령과 동일한 효과
# 현재 작업 디렉토리에 test.db 파일이 없다면 자동생성.
conn = sqlite3.connect('test.db')
# print(conn)

# conn.cursor()
# sqlite3 DBMS에 sql 명령어를 실행하기 위해서
# 커서를 얻어온다.
# if not exists 만약에 존재하지 않으면 만들어라
sql = '''
create table if not exists saram(
    no integer primary key,
    id varchar(20),
    name varchar(20),
    age integer
)
'''
c = conn.cursor()
c.execute(sql)
c.close()
conn.close()
# 컴퓨터에서는 먼저 만들어진 객체를 나중에 close() 한다.
# 생성된것을 확인하려면 현재 작업폴더에서 sqlite3 실행.

