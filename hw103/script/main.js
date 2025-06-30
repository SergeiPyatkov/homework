const user = {
    Name: 'Сегрей',
    Surname: 'Пятков',
    Age: 20,
    Paul: 'Мужской',
}
console.log('Имя:', user.Name);
console.log('Фамилия:', user.Surname);
console.log('Возраст:', user.Age, 'лет');
console.log('Пол:', user.Paul);

//Кпц, как-то вообще нелегко далось, если чеcтно..

const users = [
    {
        name: 'Alex',
        age: 20,
        isAdmin: true,
    },

    {
        name: 'Oleg',
        age: 51,
        isAdmin: false,
    },

    {
        name: 'Bob',
        age: 32,
        isAdmin: true,
    },

    {
        name: 'Olga',
        age: 41,
        isAdmin: false,
    },

]

let notAdmin = 0;
for (let i = 0; i < users.length; i++) {
    console.log(`Привет, ${users[i].name}!`); {
        if (!users[i].isAdmin) {
            notAdmin++;
        }
    }
}

console.log(`Обычных пользователей: ${notAdmin}`);

