export default async function ProgettiLayout({ children, params }) {
    // Remove navbar

    return (
        <main className="min-h-screen bg-background">
            {children}
        </main>
    );
}