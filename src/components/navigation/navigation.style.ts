import Responsive from "../../services/Responsive";


class NavigationStyle extends Responsive{
    constructor() {
        super();

    }


    navigationContainer(){
        return {
            style: {
                height:'10vh',
                width:"100%",
                padding:"0vh 4vw"
            },
            class: "bg-blue-900 flex d-flex flex-row items-center justify-between"
        }
    }

    navigationLeftContainer(){
        return {
            style: {
                gap:'3vw'
            },
            class: "flex d-flex flex-row items-center"
        }
    }

    navigationLeftLogo(){
        return {
            style: {
                gap:'0.5vw'
            },
            class: "flex d-flex flex-row items-center"
        }
    }

    redditIcon(){
        return {
            style:{
                fontSize:'2vw'
            },
            class:"text-white"
        }
    }
    redditText(){
        return {
            style:{
                fontSize:'2vw'
            },
            class:"text-white font-semibold"
        }
    }

    redditInnerText(){
        return {
            style: {
                fontSize:'1.3vw',
            },
            class: "font-light"
        }
    }

    searchInputContainer(){
        return {
            style: {
                height:'6vh',
                width:'25vw',
            },
            class: "relative"
        }
    }

    searchInput(){
        return {
            style: {
                height:"100%",
                width:"100%",
                borderRadius:'0.5vw',
                padding:"0vw 1.5vw",
                paddingLeft:'3vw',
                fontSize:"1vw"
            },
            class: "bg-white outline-none"
        }
    }

    searchIcon(){
        return {
            style: {
                fontSize:"1.4vw",
            },
            class: "text-gray-700"
        }
    }
    button(){
        return {
            style: {
                height:'100%',
                width:"3vw",
                top: 0,
                left:0
            },
            class: "absolute outline-none flex d-flex flex-row items-center justify-center"
        }
    }



//    right navigation

    navigationRightContainer(){
        return {
            style: {
               gap:"1.3vw"
            },
            class: "flex d-flex flex-row items-center"
        }
    }

    profileSummary(){
        return {
            style: {
               gap:"0.8vw"
            },
            class: "flex d-flex flex-row items-center"
        }
    }

    profilePhoto(){
        return {
            style: {
                backgroundSize:'cover',
                height:'7vh',
                width:"7vh",
                borderRadius: "0.2vw"
            },
            class: ""
        }
    }


    profileTextOne(){
        return {
            style: {
                fontSize:'1.2vw'
            },
            class: "text-white"
        }
    }

    profileTextTwo(){
        return {
            style: {
                fontSize:'0.9vw'
            },
            class: "text-white leading-none"
        }
    }

    menuIcon(){
        return {
            style:{
                fontSize:"1.4vw"
            },
            class: "text-white outline-none"
        }
    }



}
export default NavigationStyle;