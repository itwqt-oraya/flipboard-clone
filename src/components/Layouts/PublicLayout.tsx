import React from "react";

import { PublicNav } from "../Page";
import { PublicFooter } from "../Page";
import { Outlet } from "react-router";

export default function PublicLayout() {
    return (
        <>
            <PublicNav/>
            <Outlet/>
            <PublicFooter/>
        </>
        
    );
}