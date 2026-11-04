// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import { 
//     ClassicEditor, 
//     Bold, 
//     Italic, 
//     Essentials, 
//     Paragraph, 
//     Autoformat, 
//     Heading 
// } from 'ckeditor5';

// // Import CKEditor 5 styles
// import 'ckeditor5/ckeditor5.css';

// export default function EditorComponent() {
//     return (
//         <div>
//             <h2>Vite + React + TypeScript + CKEditor 5</h2>
//             <CKEditor
//                 editor={ ClassicEditor }
//                 config={ {
//                     licenseKey: 'GPL',
//                     plugins: [ 
//                         Essentials, 
//                         Paragraph, 
//                         Autoformat, 
//                         Bold, 
//                         Italic, 
//                         Heading 
//                     ],
//                     toolbar: [ 
//                         'undo', 'redo', '|', 
//                         'heading', '|', 
//                         'bold', 'italic' 
//                     ],
//                     initialData: '<p>Hello from CKEditor 5 in Vite and TypeScript!</p>',
//                 } }
//                 onChange={ (event, editor) => {
//                     const data = editor.getData();
//                     console.log({ event, editor, data });
//                 } }
//             />
//         </div>
//     );
// }
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor,
    Alignment,
    Autoformat,
    AutoImage,
    AutoLink,
    Autosave,
    Base64UploadAdapter,
    BlockQuote,
    Bold,
    Bookmark,
    Code,
    CodeBlock,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    GeneralHtmlSupport,
    Heading,
    Highlight,
    HorizontalLine,
    HtmlComment,
    HtmlEmbed,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    MediaEmbed,
    PageBreak,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    SelectAll,
    ShowBlocks,
    SourceEditing,
    SpecialCharacters,
    SpecialCharactersEssentials,
    Strikethrough,
    Style,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    TodoList,
    Underline,
    WordCount,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

export default function EditorComponent() {
    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    licenseKey: 'GPL',
                    plugins: [
                        Alignment, Autoformat, AutoImage, AutoLink, Autosave,
                        Base64UploadAdapter, BlockQuote, Bold, Bookmark, Code,
                        CodeBlock, Essentials, FindAndReplace, FontBackgroundColor,
                        FontColor, FontFamily, FontSize, GeneralHtmlSupport, Heading,
                        Highlight, HorizontalLine, HtmlComment, HtmlEmbed, Image,
                        ImageCaption, ImageInsert, ImageResize, ImageStyle,
                        ImageToolbar, ImageUpload, Indent, IndentBlock, Italic, Link,
                        LinkImage, List, ListProperties, MediaEmbed, PageBreak,
                        Paragraph, PasteFromOffice, RemoveFormat, SelectAll,
                        ShowBlocks, SourceEditing, SpecialCharacters,
                        SpecialCharactersEssentials, Strikethrough, Style, Subscript,
                        Superscript, Table, TableCaption, TableCellProperties,
                        TableColumnResize, TableProperties, TableToolbar,
                        TextTransformation, TodoList, Underline, WordCount,
                    ],
                    toolbar: {
                        items: [
                            'undo', 'redo', '|',
                            'sourceEditing', 'showBlocks', 'findAndReplace', 'selectAll', '|',
                            'heading', 'style', '|',
                            'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', '|',
                            'bold', 'italic', 'underline', 'strikethrough',
                            'subscript', 'superscript', 'code', 'removeFormat', '|',
                            'specialCharacters', 'horizontalLine', 'pageBreak',
                            'link', 'bookmark', 'insertImage', 'mediaEmbed',
                            'insertTable', 'blockQuote', 'codeBlock', 'htmlEmbed', '|',
                            'alignment', '|',
                            'bulletedList', 'numberedList', 'todoList',
                            'outdent', 'indent', '|',
                            'highlight',
                        ],
                        shouldNotGroupWhenFull: true, // wrap onto multiple lines instead of "⋮"
                    },
                    heading: {
                        options: [
                            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                        ],
                    },
                    fontSize: {
                        options: [10, 12, 14, 'default', 18, 20, 24, 30],
                        supportAllValues: true,
                    },
                    list: {
                        properties: { styles: true, startIndex: true, reversed: true },
                    },
                    image: {
                        toolbar: [
                            'toggleImageCaption', 'imageTextAlternative', '|',
                            'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', '|',
                            'resizeImage',
                        ],
                    },
                    table: {
                        contentToolbar: [
                            'tableColumn', 'tableRow', 'mergeTableCells',
                            'tableProperties', 'tableCellProperties',
                        ],
                    },
                    link: {
                        addTargetToExternalLinks: true,
                        defaultProtocol: 'https://',
                    },
                    htmlSupport: {
                        allow: [{ name: /.*/, attributes: true, classes: true, styles: true }],
                    },
                    style: {
                        definitions: [
                            { name: 'Article category', element: 'h3', classes: ['category'] },
                            { name: 'Info box', element: 'p', classes: ['info-box'] },
                        ],
                    },
                    initialData: '',
                }}
                onChange={(event, editor) => {
                    console.log(editor.getData());
                }}
            />
        </div>
    );
}