import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Icons from "../../assets/icons";
import EditorBase from "../editor/editor";
import {useState} from "react";
// @ts-ignore
import draftToHtml from 'draftjs-to-html';
// @ts-ignore
import { EditorState,convertToRaw } from 'draft-js';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EditorDialog = (props: any) =>  {

    const icon = new Icons()

    const [data,setData] = useState(EditorState.createEmpty())
    const [raw,setRaw] = useState(data);

    const rawContentState = convertToRaw(raw?.getCurrentContent());
    const markup = draftToHtml(
        rawContentState
    );
    const onChangeEditor = (_data: any) => {
        setData(_data)
        setRaw(_data)
        console.log(markup)

    }


    return (
        <div>


            <Dialog
                fullScreen
                open={props.open}
                onClose={props.handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={props.handleClose}
                            aria-label="close"
                        >
                            <icon.close  style={{fontSize:'1.4vw'}} />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Title
                        </Typography>
                        <Button onClick={
                            ()=> {
                                props.addPost({html:markup,title:"John doe post"})
                                props.handleClose()
                            }
                        } autoFocus color="inherit" >
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
               <div>
                    <EditorBase  data={data} onChangeEditor={onChangeEditor}  />
               </div>
            </Dialog>
        </div>
    );
}

export default EditorDialog;