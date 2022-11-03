import PostListStyle from "./post-list.style";
import postListStyle from "./post-list.style";
import Icons from "../../../assets/icons";


const PostList = (props: any) => {
    const postListstyle = new PostListStyle();
    const icon = new Icons();
    return (
        <div style={postListstyle.postListContainer().style} className={postListstyle.postListContainer().class}>
            <div style={postListstyle.postListHeader().style} className={postListstyle.postListHeader().class}>
                <div style={postListstyle.postHeaderOne().style} className={postListstyle.postHeaderOne().class} >
                    <p>Thumbnail</p>
                </div>
                <div style={postListstyle.postHeaderTwo().style} className={postListstyle.postHeaderTwo().class} >
                    <p>Title</p>
                </div>
                <div style={postListstyle.postHeaderThree().style} className={postListstyle.postHeaderThree().class} >
                    <p>Description</p>
                </div>
                <div style={postListstyle.postHeaderOne().style} className={postListstyle.postHeaderOne().class} >
                    <p>Comments</p>
                </div>
                <div style={postListstyle.postHeaderOne().style} className={postListstyle.postHeaderOne().class} >
                    <p>Traffic</p>
                </div>
                <div style={postListstyle.postHeaderOne().style} className={postListstyle.postHeaderOne().class} >
                    <p>Action</p>
                </div>
            </div>

           <div style={{height:'90%'}}  className={'relative  overflow-scroll' }>
               {props.posts.map((items: any,i: any) => {
                   return <div style={postListstyle.postListContent().style} className={postListstyle.postListContent().class}>

                       <div style={postListstyle.postHeaderOne().style} className={postListstyle.postHeaderOne().class} >
                           <img style={{width:'30%'}} src={items.thumbnail} alt=""/>
                       </div>
                       <div style={postListstyle.postHeaderTwo().style} className={postListstyle.postHeaderTwo().class} >
                           <p>{items.title}</p>
                       </div>
                       <div style={postListstyle.postHeaderThree().style} className={postListstyle.postHeaderThree().class} >
                           <p>{items.short}</p>
                       </div>
                       <div style={postListstyle.postHeaderOne().style} className={postListstyle.postHeaderOne().class} >
                           <p>{items.comment}</p>
                       </div>
                       <div style={postListstyle.postHeaderOne().style} className={postListstyle.postHeaderOne().class} >
                           <p>{items.traffic}</p>
                       </div>
                       <div style={postListstyle.postHeaderOne().style} className={postListstyle.postHeaderOne().class} >
                           <div style={{gap:'0.5vw'}} className={'flex d-flex flex-row items-center'}>
                               <button>
                               <icon.edit style={{fontSize:"1.2vw"}} />
                               </button>
                               <button>
                                   {/*    delete */}
                                   <icon.delete style={{fontSize:"1.2vw"}} className={'text-red-500'} />
                               </button>
                           </div>
                       </div>
                   </div>
               })}
           </div>

        </div>
    )
}
export default PostList;