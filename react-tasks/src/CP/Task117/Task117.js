
function Task117() {

    function Polindrom(e) {
        if (e.key === 'Enter') {
            console.log(e.target.value === e.target.value.split('').reverse().join('') ? true : false);
        }
    }
    return <>
        <p>3. По нажатию на enter в input onKeyDown выявлять является ли введенное слово
            палиндромом. Результат проверки отобразить в консоль</p>

        <input type="text" onKeyDown={Polindrom} />
    </>
}
export default Task117