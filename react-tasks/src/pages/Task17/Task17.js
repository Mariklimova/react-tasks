function Task17() {
    function inpCheck(event) {
        if (event.key === 'Enter') {
            event.target.value === event.target.value.split('').reverse().join('')
                ? console.log(true) : console.log(false);
                
            event.target.value = '';
        }


    };



    return <div>
        <p>3. По нажатию на enter в input onKeyDown выявлять является ли введенное слово
            палиндромом. Результат проверки отобразить в консоль</p>

        <input type='text' onKeyDown={inpCheck} />
    </div>
}

export default Task17