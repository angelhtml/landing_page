import headerStyle from '../moonlight/header.module.css'

function Header(){
    return(
        <div className={headerStyle.header}>
            <div className={headerStyle.links}>
                <a href='#'>Collection</a>
                <a href='#'>Sign up</a>
                <a href='#'>About us</a>
            </div>
        </div>
    )
}
export default Header;