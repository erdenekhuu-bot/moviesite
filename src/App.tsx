import {
  Layout,
  ConfigProvider,
  Menu,
  Flex,
  Input,
  Badge,
  Collapse,
} from "antd";
import type { CollapseProps } from "antd";
import Trend from "./components/Trends";
import Movie from "./components/Movies";
import Trailer from "./components/Trailer";
import {
  BellOutlined,
  UserOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "What is OMNI ?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "How do I Get Help If I Have Any Issues?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Is Omni Good For Kids & Families?",
    children: <p>{text}</p>,
  },
];

export default function App() {
  const checkout: boolean = false;
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
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                label: "Home",
              },
              {
                key: "2",
                label: "Pricing",
              },
              {
                key: "3",
                label: "Movies",
              },
              {
                key: "4",
                label: "Series",
              },
            ]}
            style={{ flex: 1, minWidth: 0 }}
          />
          <Flex gap={10} align="center">
            <Input.Search />
            <Badge count={0}>
              <BellOutlined className="text-2xl" />
            </Badge>
            <UserOutlined className="text-2xl" />
            {checkout ? (
              <MoonOutlined className="text-2xl" />
            ) : (
              <SunOutlined className="text-2xl" />
            )}
          </Flex>
        </Layout.Header>
        <Layout.Content style={{ padding: 8 }}>
          <Trend />
          <Movie />
          <Trailer width="500" height="400" />
        </Layout.Content>
        <Layout.Footer style={{ padding: 8 }}>
          <Collapse items={items} defaultActiveKey={["1"]} />
        </Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
}
