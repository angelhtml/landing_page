import headerStyle from '../moonlight/header.module.css'

function Header(){
    return(
        <div className={headerStyle.header}>
            <div className={headerStyle.links}>
                <a href='#aboutme'>About me</a>
                <a href='#projects'>Projects</a>
            </div>
        </div>
    )
}
export default Header;