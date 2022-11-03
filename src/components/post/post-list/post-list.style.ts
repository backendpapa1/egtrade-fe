import Responsive from "../../../services/Responsive";


class PostListStyle  extends Responsive {
    constructor() {
        super();

    }

    postListContainer(){
        return {
            style: {
                height:"100%",
                borderRadius:'0.8vw'
            },
            class: "bg-white shadow shadow-md"
        }
    }
    postListHeader(){
        return {
            style: {
                height:'7%',
                fontSize:'0.7vw',
                padding:'1.3vw'
            },
            class:"flex font-semibold flex-row d-flex items-center border-b border-gray-100"
        }
    }

    postListContent(){
        return {
            style: {
                height:'10vh',
                fontSize:'0.9vw',
                padding:'1.3vw',
                gap:'0.5vw',

            },
            class:"flex font-light flex-row d-flex items-center border-b border-gray-100"
        }
    }

    postHeaderOne(){
        return {
            style: {

            },
            class:"flex-1"
        }
    }
    postHeaderTwo(){
        return {
            style: {
                width:'30%'
            },
            class:""
        }
    }
    postHeaderThree(){
        return {
            style: {
                width:'15%'
            },
            class:"text"
        }
    }
}

export default PostListStyle;