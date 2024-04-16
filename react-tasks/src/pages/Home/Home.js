import { Link } from "react-router-dom";


function Home() {
    return <>
        <h1>react tasks</h1>

        <p><Link to={'/task31'}>Перейти к задаче 31</Link></p>
        <p><Link to={'/task32'}>Перейти к задаче 32</Link></p>
        <p><Link to={'/task33'}>Перейти к задаче 33</Link></p>
        <p><Link to={'/task34'}>Перейти к задаче 34</Link></p>
        <p><Link to={'/task35'}>Перейти к задаче 35</Link></p>
        <p><Link to={'/task36'}>Перейти к задаче 36</Link></p>
        <p><Link to={'/task37'}>Перейти к задаче 37</Link></p>
        <p><Link to={'/task38'}>Перейти к задаче 38</Link></p>

    </>
}

export default Home