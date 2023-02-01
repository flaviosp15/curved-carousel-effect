import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">furniture.com</a>
        </div>
        <ul>
          <li>
            <a href="/">Sofas</a>
          </li>
          <li>
            <a href="/">Lighting</a>
          </li>
          <li>
            <a href="/">Outdoor</a>
          </li>
          <li>
            <a href="/">Kitchen</a>
          </li>
          <li>
            <a href="/">Wall Decor</a>
          </li>
        </ul>
      </nav>
      <ul>
        <li>
          <form action="">
            <input type="text" placeholder="Search..." />
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
            </button>
          </form>
        </li>
        <li>
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
              <circle cx="10.5" cy="19.5" r="1.5"></circle>
              <circle cx="17.5" cy="19.5" r="1.5"></circle>
            </svg>
          </a>
        </li>
        <li>
          <a href="/" className="sign-in">
            Sign In
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
