import PostStyle from "./post.style";
import PostList from "../../../components/post/post-list/post-list";
import {useState} from "react";

import NetworkHttp from "../../../services/network";
import EditorDialog from "../../../components/dialog/editor-dialog";

const posts = [
    {title:"Blog Testing 1: why you should blog",thumbnail: "https://images.unsplash.com/photo-1552819686-25b0c726045d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",short:"I used to write a column for Macworld magazine. People trying to butter me up would tell me they bought the magazine just to read my modest contribution",comment:5000, traffic:13022},
    {title:"Blog Testing 1: why you should blog",thumbnail: "https://images.unsplash.com/photo-1552819686-25b0c726045d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",short:"I used to write a column for Macworld magazine. People trying to butter me up would tell me they bought the magazine just to read my modest contribution",comment:5000, traffic:13022},
    {title:"Blog Testing 1: why you should blog",thumbnail: "https://images.unsplash.com/photo-1552819686-25b0c726045d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",short:"I used to write a column for Macworld magazine. People trying to butter me up would tell me they bought the magazine just to read my modest contribution",comment:5000, traffic:13022},
    {title:"Blog Testing 1: why you should blog",thumbnail: "https://images.unsplash.com/photo-1552819686-25b0c726045d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",short:"I used to write a column for Macworld magazine. People trying to butter me up would tell me they bought the magazine just to read my modest contribution",comment:5000, traffic:13022},
    {title:"Blog Testing 1: why you should blog",thumbnail: "https://images.unsplash.com/photo-1552819686-25b0c726045d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",short:"I used to write a column for Macworld magazine. People trying to butter me up would tell me they bought the magazine just to read my modest contribution",comment:5000, traffic:13022},
    {title:"Blog Testing 1: why you should blog",thumbnail: "https://images.unsplash.com/photo-1552819686-25b0c726045d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",short:"I used to write a column for Macworld magazine. People trying to butter me up would tell me they bought the magazine just to read my modest contribution",comment:5000, traffic:13022},
    {title:"Blog Testing 1: why you should blog",thumbnail: "https://images.unsplash.com/photo-1552819686-25b0c726045d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",short:"I used to write a column for Macworld magazine. People trying to butter me up would tell me they bought the magazine just to read my modest contribution",comment:5000, traffic:13022}
]
const Post = () => {
    const postStyle = new PostStyle();
    const network = new NetworkHttp();
    const [ open,set_open]  = useState(false);
    const [html,set_html ] = useState(null);
    const [title,set_title] = useState('');


    const AddPost = (data: any) => {
        const newdata = {
            html: data.html,
            title: data.title
        }
        network.post('http://localhost:5000/api/v1/posts/add-post',newdata)
            .then((datas: any) => {

                datas.then((success: any) => {
                    console.log(success,"suc")
                }).catch((err: any) => {
                    console.log(err,"err2")
                })
            }).catch((err) => {
                    console.log(err,"err")
        })
    }

    const handleClickOpen = () => {
        set_open(true);
    };

    const handleClose = () => {
        set_open(false);
    };


    return (
        <div  style={postStyle.postContainer().style} className={postStyle.postContainer().class}>
            <div style={postStyle.postHeader().style} className={postStyle.postHeader().class}>
                {/*    header*/}
                {/*hello*/}
                <EditorDialog addPost={AddPost} open={open} handleClose={handleClose} />
                <p style={{fontSize:'3vw'}}>Posts</p>
                <div style={{gap:'1vw',fontSize:"0.8vw"}} className={'text-white flex d-flex flex-row items-center justify-end'}>
                    <button onClick={() => {
                        handleClickOpen()
                    }} style={{height:'6vh',width:'8vw'}} className={'bg-blue-900'}>
                        Add New Post
                    </button>

                    <button style={{height:'6vh',width:'8vw'}} className={'bg-blue-900'}>
                        Filter
                    </button>
                </div>
            </div>

            <div style={postStyle.postContent().style} className={postStyle.postContent().class}>
                    <PostList posts={posts} />
            </div>
        </div>
    )
}
export default  Post;
