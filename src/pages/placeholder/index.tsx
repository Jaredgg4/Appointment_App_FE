import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import FloatingNav from "@/components/sideBar";
import Sidebar from "@/components/sideBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <Sidebar></Sidebar>
    </>
  );
}
