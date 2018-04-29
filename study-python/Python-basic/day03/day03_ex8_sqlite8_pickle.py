import pickle

person1 = {
    'name':'홍길순',
    'height':170,
    'weight':60
}

person2 = {
    'name':'홍길동',
    'height':200,
    'weight':95
}

people = [person1, person2]

# f = open('people.picke', 'wb')
# pickle.dump(people, f)
# f.close()

# with as 문은 작업이 끝나면 자동으로 파일을 닫는다.
# with as 문을 사용하면 close()가 필요없다.
with open('people.picke', 'wb') as f:
    pickle.dump(people, f)

with open('people.picke', 'rb') as f:
    load_data = pickle.load(f)

print('name:', load_data[0]["name"])
print('height:', load_data[0]["height"])
print('weight:', load_data[0]["weight"])

