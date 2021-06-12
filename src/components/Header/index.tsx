import ThemeToggle from '../Toggle'

function Header() {
    return (
        <header className="container h-32 px-5 m-auto overflow-hidden sm:px-12 md:px-20 max-w-screen-xl">
            <nav
                className="flex items-center justify-center h-full mt-auto text-sm space-x-6 md:justify-start"
                aria-label="Main Navigation"
            >
                <ThemeToggle className="hidden sm:block hover:text-accent transition duration-150" />
            </nav>
        </header>
    )
}

export default Header
