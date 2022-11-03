import Responsive from "../../../services/Responsive";


class PostStyle extends Responsive {
    constructor() {
        super();
    }

    postContainer() {
        return {
            style: {
                height:'100%'
            },
            class:'flex flex-col d-flex '
        }
    }

    postHeader(){
        return {
            style: {
                height:'20%',
            },
            class:" "
        }
    }

    postContent(){
        return {
            style: {

            },
            class:"flex-1 relative overflow-hidden"
        }
    }

}

export default PostStyle;