import React from "react";
import './JSX.css';

function JSX() {
    const name = "Shin Yoon Ho";

    const style = {
        backgroundColor: "black",
        color: "aqua",
        fontSize: 24,
        padding: "1rem",
    };

    return (
        <>
            <div style={style}>제 이름은 {name}입니다.</div>
            <div>안녕하세요.</div>
            <div>안녕히 가세요.</div>
            <div className="gray-box"></div>
        </>
    );
}

export default JSX;