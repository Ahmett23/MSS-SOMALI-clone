
import Style from "./header.module.scss"

const Header = () => {
  return (
    <div >
        <header className={Style.Header}>
            <ul>
                <li><a className={Style.logo} href="#">MSS-SOMALI</a></li>
                <li><a href="#">All Competitors</a></li>
            </ul>
        </header>

    </div>
  )
}

export default Header