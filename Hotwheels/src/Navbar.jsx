const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl">HOT WHEELS</h1>
        <aside className="flex gap-5">
            <a href="#Body.jsx">Cars</a>
            <a href="#">Contact</a>
            <a href="#">Home</a>
        </aside>
    </nav>
  )
}

export default Navbar