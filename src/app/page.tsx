"use client";

import getCollection from "@/functions/getCollection";
import { useState } from "react";

interface IProduct {
    id: string;
    title: string;
}

export default function Home() {
    const [items, setItems] = useState<IProduct[]>([]);

    const fetchData = async () => {
        const items = await getCollection<IProduct>("products");
        console.log(items);
        if (items) {
            setItems(items);
        }
    };

    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <h1>Hi</h1>
            <button onClick={fetchData}>Fetch Data</button>
            {items.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
}
