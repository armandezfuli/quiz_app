export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
            <p className="mt-4 text-xl font-medium">
                The page you’re looking for doesn’t exist 😕
            </p>
            <a
                href="/"
                className="inline-block mt-8 px-6 py-3 bg-blue-600 font-semibold rounded-lg hover:bg-blue-700 transition">
                Go Back Home 🏠
            </a>
        </main>
    )
}
