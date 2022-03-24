import descriptionStyle from './description.module.css'
import { List } from '@mantine/core';

export function Description(){
    return(
        <div>
            <div className={descriptionStyle.descriptioncontainer}>
            <div className={descriptionStyle.descriptionbox1}><h1>What`s Node Js?</h1><p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser</p></div>
            <div className={descriptionStyle.descriptionbox2}><h1>What`s React Js?</h1><p>React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components</p></div>
            </div>

            <center>
            <h1 className={descriptionStyle.nexttitle}>Why Next Js?</h1>
            </center>
            <List className={descriptionStyle.list}>
            <List.Item>Improved development process = cost and time benefit to our clients</List.Item>
            <List.Item>Improved performance = faster applications</List.Item>
            <List.Item>Improved SEO = more indexable, SEO friendly applications</List.Item>
            </List>
            
        </div>
    )
}