import Responsive from "./services/Responsive";


class AppStyle extends Responsive {
    constructor() {
       super();
    }

    baseContainer(){
        return {
            style: {
                height:"90vh"
            },
            class: "flex d-flex flex-row "
        }
    }

    baseLeftContainer(){
        return {
            style: {
                width:"17%",
                height:'100%',
                padding:'1.5vw 0vw'
            },
            class: "bg-blue-800"
}
    }


    baseRightContainer(){
        return {
            style: {
                background:"#F7F7F7",
                padding:"1.5vw"
            },
            class:"flex-1"
        }
    }

}

export default AppStyle;