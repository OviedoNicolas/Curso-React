import React from "react";
import bolsa from "../img/bolsa.svg";

export const CartWidget = ({ cantidad }) => {
    return (
        <div className="banderin">
            <div className="iconoBolsa">
                <img src={bolsa} alt="logo bolsa de compra" />
            </div>
            <p>{cantidad}</p>
        </div>
    );
};
