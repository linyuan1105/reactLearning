function FancyBorder(props){
    return(
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    )
}
function WelcomeDialog(){
    return(
        <FancyBorder>
            <h1 className="Dialog-tile">
                欢迎
            </h1>
            <p className="Dialog-message">
                谢谢
            </p>
        </FancyBorder>
    )
}


function SplitPane(props) {
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                左边{props.left}
            </div>
            <div className="SplitPane-right">
                右边{props.right}
            </div>
        </div>
    )
}
function Contacts() {
    return(
        <div>
            Contacts
        </div>
    )
}
function Chat() {
    return(
        <div>
            Chat
        </div>
    )
}
function App() {
    return(
        <SplitPane left={<Contacts />} right={<Chat />}></SplitPane>
    )
}
export{
    WelcomeDialog,
    App
}