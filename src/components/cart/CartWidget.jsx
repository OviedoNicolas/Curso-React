import React from "react";
import { Link } from "react-router-dom";
import bolsa from "../../img/bolsa.svg";

export const CartWidget = ({ cantidad }) => {
    return (
        <div className="banderin">
            <div className="iconoBolsa">
                <Link to={`bolsa`}>
                    <button>
                        <img src={bolsa} alt="logo bolsa de compra" />
                    </button>
                </Link>
            </div>
            <p>{cantidad}</p>
        </div>
    );
};
