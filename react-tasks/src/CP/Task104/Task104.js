import img from '../Task104/assets/flowers.webp'

function Task104() {
    // const arr = ['hgjkh', 'gvbjk@nbhvjk', 'hg@h', 'gvkhjnl'].map((el)=><div><p>{el}</p><img src={img} /></div>);
    const arr = ['hgjkh', 'gvbjk@nbhvjk', 'hg@h', 'gvkhjnl']
    return <>

        <p>4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
            массива, а также картинку. Каждая итерация будет возвращать</p>

        <div>
            {arr.map((el)=><div><p>{el}</p><img src={img} /></div>)}
        </div>
    </>
}

export default Task104
