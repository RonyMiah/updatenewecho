import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers/providers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TopHeader from "./components/Header/TopHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const APP_NAME = "Anigram";
const APP_DEFAULT_TITLE =
  "Building Cleaning Services Malaysia | NEC Cleaning Services – Cleaning Is What We Do Best !";
const APP_DESCRIPTION =
  "Professional cleaning services tailored to your needs! Our expert team provides reliable, top-quality residential and commercial cleaning solutions, ensuring spotless spaces and peace of mind. Book today for a cleaner, healthier environment!";

export const metadata: Metadata = {
  metadataBase: new URL("https://newecocleaning.com"),
  applicationName: APP_NAME,
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  keywords: [
    "Cleaning Services",
    "Residential Cleaning",
    "Commercial Cleaning",
    "House Cleaning",
    "Office Cleaning",
    "Deep Cleaning",
    "Move In Cleaning",
    "Move Out Cleaning",
    "Post-Construction Cleaning",
    "Eco-Friendly Cleaning",
    "Professional Cleaners",
    "Maid Services",
    "Janitorial Services",
    "Carpet Cleaning",
    "Window Cleaning",
    "Cleaning Company",
    "Sanitization Services",
    "Home Organization",
    "Recurring Cleaning Services",
    "One-Time Cleaning",
    "Affordable Cleaning Services",
    "Cleaning Packages",
    "Expert Cleaning Team",
    "Custom Cleaning Plans",
    "Local Cleaning Services",
    "Reliable Cleaners",
  ],
  openGraph: {
    title: "Top Cleaning Services | Spotless Spaces for Home & Office",
    description:
      "Get exceptional cleaning services for your home or office! Our trusted team ensures thorough cleaning, leaving every corner spotless. Book now!",
    url: "https://newecocleaning.com",
    siteName: "Your Cleaning Service",
    images: [
      {
        url: "https://newecocleaning.com/seo.jpg",
        width: 1200,
        height: 630,
        alt: "Professional cleaning service in action",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Cleaning Services | Spotless Spaces for Home & Office",
    description:
      "Experience the difference with our professional cleaning services for residential and commercial spaces. Satisfaction guaranteed!",
    images: ["https://newecocleaning.com/seo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <TopHeader />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
