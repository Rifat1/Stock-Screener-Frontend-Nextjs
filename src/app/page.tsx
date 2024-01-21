
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from "react";
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import Link from 'next/link'
import {NextUIProvider} from "@nextui-org/react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function Home() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<string>('');

  const handleButtonClick = () => {
    console.log("Button clicked!");
    console.log(selectedIndex);
    if (selectedIndex) {
    router.push(`/stocks/${selectedIndex}`);
    // <Link href={`/stocks/${encodeURIComponent(selectedIndex)}`}></Link>
    }
  };

  return (
    <NextUIProvider>
      <Header/>
      <main >
        <div className="container mx-auto mt-20 text-center">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Welcome to StockDat, An index based stock market Screener
          </h1>
          <Select className="max-w-xs mb-6"
            label="Select country index"
            onChange={(event) => setSelectedIndex(event.target.value)}
          >
            <SelectItem
              key="SP500"
              value="SP500"
              startContent={<Avatar alt="usa" className="w-6 h-6" src="https://flagcdn.com/us.svg" />}
            >
              S&P500
            </SelectItem>
            <SelectItem
              key="TSX60"
              value="TSX60"
              startContent={<Avatar alt="canada" className="w-6 h-6" src="https://flagcdn.com/ca.svg" />}
            >
              TSX60
            </SelectItem>
          </Select>
        <div>
          <Button 
            radius="full" 
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            onPress={handleButtonClick}
          >
            View Stocks
          </Button>
        </div>
        
        </div>
      </main>
      <Footer/>
    </NextUIProvider>
  );
}
