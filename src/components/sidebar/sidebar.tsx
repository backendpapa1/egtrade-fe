import SidebarButton from "./sidebar-button";
import Icons from "../../assets/icons";
import SidebarStyle from "./sidebar.style";
import {Resource} from "../../assets/resource";


const Sidebar = () => {
    const icon = new Icons();
    const sideStyle = new SidebarStyle();
    const resource = new Resource();
    return (
        <div style={sideStyle.sideBarContainer().style} className={sideStyle.sideBarContainer().class} >
                <SidebarButton icon={icon.home} label={'Home'} path={'/'} />
                <SidebarButton icon={icon.post} label={'Post'} path={'/posts'} />
                <SidebarButton icon={icon.admin} label={'Admin'} path={'/admins'} />
                <SidebarButton icon={icon.stat} label={'Stats'} path={'/stats'} />
                <SidebarButton icon={icon.email} label={'Marketing & Emails'} path={'/marketing'} />


            <div style={sideStyle.baseContent().style} className={sideStyle.baseContent().class}>
                <img  src={resource.logo} alt=""/>
            </div>
        </div>
    )
}

export default Sidebar;