import './styles.css'

export default function Menu() {
    return (
        <nav className='main-nav'>
            <ul className='main__menu'>
                <li>
                    <a href="#">
                        Produtos
                    </a>
                </li>
                <li>
                    <a href="#">
                        Serviços
                    </a>
                </li>
                <li>
                    <a href="#">
                        Nossa plataforma
                        </a>
                </li>
                <li>
                    <a href="#">
                        Preços
                    </a>
                </li>
                <li>
                    <a href="#">
                        Login
                    </a>
                </li>
                <li>
                    <button>
                        Teste agora
                    </button>
                </li>
            </ul>
        </nav>
    )
}