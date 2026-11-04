import {
  Layout,
  ConfigProvider,

} from "antd";
import EditorComponent from './component/editor';

export default function App() {

  return (
    <ConfigProvider>
      <Layout>
        <Layout.Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 2,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
         
        </Layout.Header>
       <EditorComponent />
        <Layout.Footer style={{ padding: 8 }}>
           
        </Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
}
