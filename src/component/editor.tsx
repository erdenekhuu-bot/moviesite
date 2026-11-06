import {Form, Input, Button, Select} from 'antd';
import axios from 'axios';
import {useQuery,useMutation} from "@tanstack/react-query";
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
    const [form]= Form.useForm();

    const mutation = useMutation({
        mutationFn: async (values) => {
             const response = await axios.post(`${import.meta.env.VITE_API_URL}/vercel`, values);
             return response.data;
        }
    });

    const handleSubmit = async (values: any) => {
        try {
            await mutation.mutateAsync(values);
            
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <Form form={form} initialValues={form.getFieldsValue()} layout="vertical" onFinish={handleSubmit}>
             <Form.Item label="Language" name="language" rules={[{ required: true, message: 'Please select a language!' }]}>
                <Select
                    placeholder="Select a language"
                    style={{ width: '100%' }}
                    options={[
                        { value: 'EN', label: 'English' },
                        { value: 'MN', label: 'Mongolian' },
                    ]}
                    
                />
            </Form.Item>
            <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input the title!' }]}>
                <Input placeholder="Enter title" />
            </Form.Item>
            <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Please input the content!' }]}>
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
                        const data = editor.getData();
                        console.log({ event, editor });
                        form.setFieldValue('content', data);
                    }}
                />
            </Form.Item>
            <Button size="large" type="primary" htmlType="submit" loading={mutation.isPending} onSubmit={form.submit}>
                Submit
            </Button>
           
        </Form>
    );
}