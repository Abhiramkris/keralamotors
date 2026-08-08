import "./globals.css";

export const metadata = {
  title: "Kerala Auto Motors | Premium Luxury Car Workshop Muscat, Oman",
  description: "Specialized maintenance and diagnostic services for European and American luxury vehicle brands in Al Wadi Al Kabir, Muscat.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
