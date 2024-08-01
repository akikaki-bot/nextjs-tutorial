
export default function Layout({ children } : Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex min-h-screen w-full justify-center">
            <div className="prose sm:p-12 p-6"> {children} </div>
        </div>
    )
}