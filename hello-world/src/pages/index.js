import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default () => (
    <div>
        <Header />
        <div>
            <p>これはトップページです。</p>
            <div style={{ color: `purple` }}>
                <p>What a world.</p>
                <img src="https://contents.aokashi.net/refs/chashitsu_icon.png" alt="" />
            </div>
        </div>
        <Footer />
    </div>
)
