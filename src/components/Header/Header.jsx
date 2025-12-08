import reactImg from '../../assets/react-core-concepts.png';
const ReactDescriptions = ['Fundamental', 'Crucial', 'Core']
import './Header.css';

function genRandomInt(num) {
    return Math.floor(Math.random() * (num + 1))
}

function Header() {
    const description = ReactDescriptions[genRandomInt(2)]

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

export default Header;