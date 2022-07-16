import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const menuItems = [
    {
        key: "home",
        label: "Home",
        path: "/home",
    }
];

function Navbar() {
    let navigate = useNavigate();

    const onClick = (e) => {
        switch (e.key) {
            case "home":
                navigate("/home");
                break;
            default:
                navigate("/home");
        }
    };
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    onClick={onClick}
                    theme="dark"
                    mode="horizontal"
                    items={menuItems}
                />
            </Header>
        </Layout>
    );
}

export default Navbar;
