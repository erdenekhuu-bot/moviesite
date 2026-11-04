import { CKEditor } from '@ckeditor/ckeditor5-react';
import { 
    ClassicEditor, 
    Bold, 
    Italic, 
    Essentials, 
    Paragraph, 
    Autoformat, 
    Heading 
} from 'ckeditor5';

// Import CKEditor 5 styles
import 'ckeditor5/ckeditor5.css';

export default function EditorComponent() {
    return (
        <div>
            <h2>Vite + React + TypeScript + CKEditor 5</h2>
            <CKEditor
                editor={ ClassicEditor }
                config={ {
                    plugins: [ 
                        Essentials, 
                        Paragraph, 
                        Autoformat, 
                        Bold, 
                        Italic, 
                        Heading 
                    ],
                    toolbar: [ 
                        'undo', 'redo', '|', 
                        'heading', '|', 
                        'bold', 'italic' 
                    ],
                    initialData: '<p>Hello from CKEditor 5 in Vite and TypeScript!</p>',
                } }
                onChange={ (event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                } }
            />
        </div>
    );
}