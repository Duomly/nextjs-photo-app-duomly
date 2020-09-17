import Link from 'next/link';

export default function Header() {

  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid justify-content-center">
      <Link class="navbar-brand p-0" href="/">
        <img src="/logo.svg" width="150" height="30" class="d-inline-block align-top" alt="" loading="lazy"/>
      </Link>
    </div>
  </nav>
  );
}
