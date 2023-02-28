import React from "react";
import bolsa from "../../img/bolsa.svg";

export const CartWidget = ({ cantidad }) => {
    return (
        <div className="banderin">
            <div className="iconoBolsa">
                <button>
                    <img src={bolsa} alt="logo bolsa de compra" />
                </button>
            </div>
            <p>{cantidad}</p>
        </div>
    );
};
