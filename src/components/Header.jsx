import { defaults } from "autoprefixer"

const Header = (props) => {

    return (
        <header>
            <h1 className="font-bold text-x1 text-blue-400">PAGI {props.title}</h1>
        </header>

    )
}
export default Header