export const metadata = {
  title: "Hindi Morning Health Prompt | Agentic",
  description:
    "Copy an English prompt that makes AI reply in Hindi with 10 morning health tips.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          color: "#0f172a",
          background:
            "radial-gradient(1200px 600px at 80% -10%, #e0f2fe 10%, transparent 60%), radial-gradient(1000px 600px at -20% 30%, #fce7f3 10%, transparent 60%), #f8fafc",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
