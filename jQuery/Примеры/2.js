//document.getElementById('h1') .innerHTML = "Hello world, edited"

//$('#h1').html('Hello world, edited')

// Селекторы jQvery

console.log($("#h3")) // селектор id

console.log($("h1"))// селектор тега

console.log($(".header")) // селектор класса

console.log($(".header, #h3")) // селекторы класса и id, пишутся через ","

console.log($("input[name='input1']")) // селектор атрибутов с конкретным значением 

console.log($("input[name^='input']")) // селектор атрибутов с ^-выбирает все эл., у которых значение атрибута name начинается с input

console.log($("input[name$='1']")) // селектор атрибутов с ^-выбирает все эл., у которых значение атрибута name заканчивается на 1

console.log($("input[class~='class1']")) // селектор тега + значения атрибута класса

//Присваивание стилей 

$('div').attr('style', 'width: 150px; height: 150px; background: red') // по селектору тега добавляем атрибут

$('input').prop('disabled')

console.log($('input').prop('disabled')) // выдает в консоли false

// prop
// использование jQuery вместе с событиями
$('textarea').prop('disabled', true)

console.log($('textarea').prop('disabled', true)) // поле textarea становться не активным

// each

$('input').each((index, item) => { // получили доступ к input-ам 
   $(item).val(index) // помещаем в содержимое выбранных эл. их index
   console.log($(item).val()) // выводим в консоль значения
})



