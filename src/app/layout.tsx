"use client";

import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/styles/globalStyles";
import { Press_Start_2P } from "next/font/google";

const press_start = Press_Start_2P({
  weight: "400",
  display: "swap",
  subsets: ["latin-ext", "latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={press_start.className}>
      <body>
        <GlobalStyle />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
