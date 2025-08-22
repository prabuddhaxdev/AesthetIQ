import {Outfit} from 'next/font/google';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Provider from '@/app/provider';

export const metadata = {
  title: "AesthetIQ",
  description: "AI Interior Design Generator",
};

const outfit =Outfit({subsets:['latin']});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className}`}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
