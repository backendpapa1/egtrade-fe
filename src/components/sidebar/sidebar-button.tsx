import {Link, useLocation} from "react-router-dom";
import SidebarStyle from "./sidebar.style";


interface ISideButton {
    icon: any,
    label: string,
    path: string
}

const SidebarButton = (props: ISideButton) => {
    const sideStyle = new SidebarStyle();
    const location = useLocation()
    console.log(location.pathname)
    console.log(props.path,"dd")
    return (
        <div>
            <Link to={props.path}>
                <button style={location.pathname.toString() == props.path.toString()?  sideStyle.baseActivebutton().style : sideStyle.basebutton().style} className={location.pathname.toString() == props.path.toString() ?sideStyle.baseActivebutton().class:sideStyle.basebutton().class}>
                    <props.icon style={sideStyle.buttonIcon().style} className={sideStyle.buttonIcon().class} />
                    <p style={sideStyle.buttonText().style} className={sideStyle.buttonText().class}>{props.label}</p>
                </button>
            </Link>
        </div>
    )
}
export default SidebarButton;