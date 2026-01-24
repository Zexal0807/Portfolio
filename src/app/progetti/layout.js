export default async function ProgettiLayout({ children, params }) {
    // Remove navbar

    return (
        <html lang="it">
            <body className="min-h-screen bg-background">
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}