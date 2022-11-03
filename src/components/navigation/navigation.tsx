import NavigationStyle from "./navigation.style";
import Icons from "../../assets/icons";
import {Resource} from "../../assets/resource";


const Navigation = () => {
    const navStyle = new NavigationStyle();
    const resource = new Resource();
    const icon = new Icons();
    return (
        <div>
            {/*container*/}
            <div style={navStyle.navigationContainer().style}  className={navStyle.navigationContainer().class}>
                <div style={navStyle.navigationLeftContainer().style} className={navStyle.navigationLeftContainer().class}>
                    <div style={navStyle.navigationLeftLogo().style} className={navStyle.navigationLeftLogo().class}  >
                        <icon.reddit style={navStyle.redditIcon().style} className={navStyle.redditIcon().class}  />
                        <p style={navStyle.redditText().style} className={navStyle.redditText().class}>reddit<span style={navStyle.redditInnerText().style} className={navStyle.redditInnerText().class}>blog</span></p>
                    </div>
                   <div style={navStyle.searchInputContainer().style} className={navStyle.searchInputContainer().class}>
                       <input placeholder={'Search...'} style={navStyle.searchInput().style} className={navStyle.searchInput().class} type="text"/>
                            <button style={navStyle.button().style} className={navStyle.button().class}>
                                <icon.search style={navStyle.searchIcon().style} className={navStyle.searchIcon().class} />
                            </button>
                   </div>
                </div>
                <div style={navStyle.navigationRightContainer().style} className={navStyle.navigationRightContainer().class}>

                    <div style={navStyle.profileSummary().style} className={navStyle.profileSummary().class} >
                       <div style={{...navStyle.profilePhoto().style}} className={navStyle.profilePhoto().class}>
                           <img style={{...navStyle.profilePhoto().style}} className={navStyle.profilePhoto().class} src={'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60'} alt=""/>
                       </div>
                        <div>
                            <p style={navStyle.profileTextOne().style} className={navStyle.profileTextOne().class}>Luke Asota</p>
                            <p style={navStyle.profileTextTwo().style} className={navStyle.profileTextTwo().class}>Ass. Editor </p>
                        </div>
                    </div>

                    <button style={navStyle.menuIcon().style} className={navStyle.menuIcon().class}>
                        <icon.menuDown   />

                    </button>
                {/*    icon menu*/}
                {/*    right side*/}
                </div>
            </div>
        </div>
    )
}

export default Navigation;