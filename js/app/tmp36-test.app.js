//Создание объекта класса
let tmp = SensorManager.CreateDevice('11')[0];
// Запускаем опрос 
tmp.Start(300);

// Выводим в консоль значение если оно существенно обновилось

let interval = setInterval(() => {
    console.log(`TMP value is ${(tmp.Value).toFixed(1)}`);
}, 2000);