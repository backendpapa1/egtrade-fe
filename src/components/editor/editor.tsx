
import { EditorState,convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import {useState} from "react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';



// @ts-ignore
const EditorBase = (props) => {
    // const [data,setData] = useState(EditorState.createEmpty())
    // const [raw,setRaw] = useState(data);
    //
    // const rawContentState = convertToRaw(raw?.getCurrentContent());
    // const markup = draftToHtml(
    //     rawContentState
    // );
    // const onChangeEditor = (_data) => {
    //     setData(_data)
    //     setRaw(_data)
    //     console.log(markup)
    //
    // }

    return (
        <div style={{height:'60vh'}}>
            <Editor
                editorState={props.data}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                mention={{
                    separator: ' ',
                    trigger: '@',
                    suggestions: [
                        { text: 'APPLE', value: 'apple', url: 'apple' },
                        { text: 'BANANA', value: 'banana', url: 'banana' },
                        { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                        { text: 'DURIAN', value: 'durian', url: 'durian' },
                        { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                        { text: 'FIG', value: 'fig', url: 'fig' },
                        { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                        { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
                    ],
                }}
                onEditorStateChange={
                    (e) => {
                        props.onChangeEditor(e)
                    }
                }
            />
        </div>
    )
}
export default EditorBase;