import Link from 'next/link';
export default function Footer() {
  return (
    <nav class='navbar navbar-dark bg-dark fixed-bottom p-0'>
      <div class='container-md p-0'>
        <div
          class='btn-group float-right w-100'
          role='group'
          aria-label='Basic example'
        >
          <Link href="/">
          <button type='button' className='btn btn-dark'>
            <svg
              width='1em'
              height='2em'
              viewBox='0 0 16 16'
              class='bi bi-house-door-fill'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z' />
              <path
                fill-rule='evenodd'
                d='M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
              />
            </svg>
          </button>
          </Link>
          <Link href="/user/1">
          <button type='button' class='btn btn-dark'>
            <svg
              width='1em'
              height='2em'
              viewBox='0 0 16 16'
              class='bi bi-person-circle'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z' />
              <path fill-rule='evenodd' d='M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
              <path
                fill-rule='evenodd'
                d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z'
              />
            </svg>
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
