import type { Metadata } from 'next';
import '~/styles/globals.css';

export const metadata: Metadata = {
  title: 'Mirfayz Karimov',
  description: 'Personal portfolio of Mirfayz Karimov',
  icons: [
    {
      rel: 'icon',
      url: '/photo1.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
