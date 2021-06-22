// использование jQuery вместе с событиями

/*
$('button').on('click', () => { // по клику на кнопке выводит в alert "click"
    alert('click')
})


$('button').on('click', (event) => { // не понятно ???
    console.log(event) // по кл мыши в консоли должна была выводиться инфа
})

*/

// Пространство имен для события

    // Срабатывание нескольких событий после одного действия
/*
$('button').on('click.event1', (event) => { // по клику на кнопке выводит в alert "event 1" 
    alert('event 1')
})


$('button').on('click.event2', (event) => { // после OK выводит в alert "event 2
    alert('event 2')
})
*/
    // 

    $('#btn1').on('click.event1', (event) => { // по клику на кнопке Clikk Me выводит в alert "event 1" 
        alert('event 1')
    })
    
    
    $('#btn1').on('click.event2', (event) => { // после OK выводит в alert "event 2
        alert('event 2')
    }) 

    $('#btn2').on('click.event1', () => { // по клику на кнопке Trigger event1 срабатывает обработчик событий кнопки btn1 (выводит в alert "event 1" )
        $("#btn1").trigger('click.event1')
    })
    
    