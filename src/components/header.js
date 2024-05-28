import Link from 'next/link'

const Header = () => (
  <header>
    <ul>
      <li>
        <Link legacyBehavior href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/products">
          <a>products</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/post/[id]" as="/post/first">
          <a>First Post</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/post/[id]" as="/post/second">
          <a>Second Post</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
