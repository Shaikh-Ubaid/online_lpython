import { useEffect } from "react";

import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";

function TalkLayout({ children }) {

    useEffect(() => {
        let script = document.createElement("script");
        script.src = "//gc.zgo.at/count.js";
        script.async = true;
        script.setAttribute("data-goatcounter", "https://lpython.goatcounter.com/count")
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    });

    return (
        <Layout style={{backgroundColor: "inherit"}}>
            <Content style={{ padding: "10px 20px" }}>
                {children}
            </Content>
        </Layout>
    );
}

export default TalkLayout;
