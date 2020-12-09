import React from "react";
import "./profile.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Inventory from "../../components/Inventory";
import AvatarBlock from "../../components/AvatarBlock";


export default function Profile(){

    return(
        <div className="Profile">
            <Header fixed logado/>
            <div className="container profile-container banner">
                <AvatarBlock />
                <Inventory />
            </div>

            <Footer />
        </div>
    )
}