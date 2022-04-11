import React, { useEffect, useState } from 'react'
import axios from "axios";
import Footer from '../components/footer';
import Body from '../components/body';
import Header from '../components/header';
import Link from 'next/link'

export default function Home() {
    return (

        <div>
            <div className="relative">
                <Header />
            </div>
            <Body />
            <Footer />
        </div>
    );
}
