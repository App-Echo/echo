import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import './globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Echo',
  description: 'Generated by Alessandro & Ali',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} relative bg-diagonal`}>
        <div className="absolute inset-0">
          <Image src="/bgCircles.png" alt="Background image" className="object-contain" fill priority />
        </div>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
