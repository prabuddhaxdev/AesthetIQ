import {Outfit} from 'next/font/google';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: "AesthetIQ",
  description: "AI Interior Design Generator",
};

const outfit =Outfit({subsets:['latin']});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
