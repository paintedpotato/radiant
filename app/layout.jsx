export const metadata = {
  title: "Radiant Church Replica",
  description: "A modern church website experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
