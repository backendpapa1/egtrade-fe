import Responsive from "../../services/Responsive";


class SidebarStyle extends Responsive {
    constructor() {
        super();
    }

    sideBarContainer(){
        return {
            style: {
                height:'100%'
            },
            class:"relative"
        }
    }

    baseContent(){
        return {
            style: {
                bottom:'0',
                width:"100%",
                padding:"1.5vw"
            },
            class: "absolute"
        }

    }

    basebutton(){
        return {
            style: {
                height:'7vh',
                gap:'1vw',
                paddingLeft:'10%',
                width:'100%',
                margin:"1vh 0vh"
            },
            class: "flex d-flex flex-row items-center border-l-4 border-transparent"
        }
    }

    baseActivebutton(){
        return {
            style: {
                height:'7vh',
                gap:'1vw',
                paddingLeft:'10%',
                background: `rgba(255,255,255,0.1)`,
                width:'100%',
                margin:"1vh 0vh"
            },
            class: "flex d-flex flex-row items-center border-l-4 border-white"
        }
    }

    buttonIcon(){
        return {
            style: {
                fontSize:"1.4vw"
            },
            class:"text-white"
        }
    }

    buttonText(){
        return {
            style: {
                fontSize:"1vw"
            },
            class:"text-white"
        }
    }
}

export default SidebarStyle;