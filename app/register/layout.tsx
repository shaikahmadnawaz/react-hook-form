import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Using register in react hook form",
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex w-full items-center justify-center">{children}</div>;
}
