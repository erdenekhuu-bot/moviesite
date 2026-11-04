import { Layout, ConfigProvider, Menu, Button } from "antd";
import { Routes, Route, Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import EditorComponent from './component/editor';
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function ListComponent() {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '24px', background: '#fff', borderRadius: '8px', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.03)' }}>
      <h2>{t('list.title')}</h2>
      <p>{t('list.description')}</p>
      <Link to="/editor" style={{ color: '#1890ff', fontWeight: 'bold' }}>
        {t('list.goToEditor')} &rarr;
      </Link>
    </div>
  );
}

export default function App() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = async () => {
    const nextLang = i18n.resolvedLanguage === 'mn' ? 'en' : 'mn';

    await i18n.changeLanguage(nextLang);

    console.log('Current language:', i18n.language);
  };

  const selectedKey = location.pathname === "/editor" ? "editor" : "list";
  const APP_TITLE = import.meta.env.VITE_APP_TITLE || '';

  useQuery({
    queryKey: ['apiData'],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/vercel`);
      console.log(response.data);
      return response.data;
    },

  })
  return (
    <ConfigProvider>
      <Layout style={{ minHeight: "100vh" }}>
     
        <Layout.Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 2,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#001529",
            padding: "0 24px",
          }}
        >
          <div style={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}>
            {APP_TITLE}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, justifyContent: "flex-end" }}>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[selectedKey]}
              items={[
                {
                  key: "list",
                  label: <Link to="/">{t('nav.list')}</Link>,
                },
                {
                  key: "editor",
                  label: <Link to="/editor">{t('nav.editor')}</Link>,
                },
              ]}
              style={{ background: "transparent", borderBottom: "none", minWidth: 240 }}
            />

          <Button size="small" onClick={toggleLanguage}>
            {i18n.language === 'mn' ? 'EN' : 'MN'}
          </Button>
          </div>
        </Layout.Header>

    
        <Layout.Content style={{ padding: "24px", maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
          <Routes>
            <Route path="/" element={<ListComponent />} />
            <Route path="/editor" element={<EditorComponent />} />
          </Routes>
        </Layout.Content>

    
        <Layout.Footer style={{ textAlign: "center", padding: 16 }}>
          {t('footer.rights')}
        </Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
}