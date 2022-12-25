export default function Header() {
  return (
    <header className='flex justify-between items-center'>
      <h1 className='tracking-widest'>LUCAS ARIETA</h1>

      <nav>
        <ul className='flex gap-5 text-bold text-gray-600 hover:text-black'>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/blog'>Blog</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/lucas-arieta/' target='_blank'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
