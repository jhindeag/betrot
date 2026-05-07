import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <nav className="w-screen bg-green-900">
        <ul className="flex flex-row justify-evenly">
          <li className="bg-green-700 hover:bg-amber-600">
            <Link href="/">Home</Link>
          </li>
          <li className="bg-green-700 hover:bg-amber-600">
            <Link href="/products">Products</Link>
          </li>
          <li className="bg-green-700 hover:bg-amber-600">
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
