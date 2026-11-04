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
       
        <Layout.Footer style={{ padding: 8 }}>
         <div className="App" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <EditorComponent />
    </div>
        </Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
}
