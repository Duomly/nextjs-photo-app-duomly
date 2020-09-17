import moment from 'moment';
import { useState } from 'react';
import Link from 'next/link';

export default function Card(props) {
  const [photo, setPhoto] = useState(props.photo);

  return (
    <div class='card text-white bg-dark mb-3'>
      <div class='card-header pl-2'>
      <Link href={'/user/'+photo.userId}>
        <div className='row'>
          <div className='col-1'>
            <img
              src={photo.authorLogo}
              alt=''
              className='img-fluid rounded-circle border-primary'
            />
          </div>

          <div className='col-11'>{photo.author}</div>
        </div>
        </Link>
      </div>
      <img src={photo.photo} class='card-img-top' alt='...' />
      <div class='card-body'>
        <div className='row justify-content-between'>
          <div className='col-2'>
            <div
              class='btn-group float-right w-100'
              role='group'
              aria-label='Basic example'
            >
              <button
                type='button'
                className={`btn btn-dark pl-0 pt-0 text-left ${
                  photo.liked ? ' clicked' : ''
                }
                `}
                onClick={() => {
                  if (!photo.liked) {
                    setPhoto({ ...photo, liked: true, likes: photo.likes + 1 });
                  }
                }}
              >
                <svg
                  width='1em'
                  height='2em'
                  viewBox='0 0 16 16'
                  class='bi bi-heart'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'
                  />
                </svg>
              </button>
              <Link href={'/user/' + photo.userId}>
                <button type='button' class='btn btn-dark pt-0 text-left'>
                  <svg
                    width='1em'
                    height='2em'
                    viewBox='0 0 16 16'
                    class='bi bi-person-circle'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z' />
                    <path
                      fill-rule='evenodd'
                      d='M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
                    />
                    <path
                      fill-rule='evenodd'
                      d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z'
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className='col-1'>
            <button
              type='button'
              class={`btn btn-dark pt-0 text-left ${
                photo.bookmarked ? ' clicked' : ''
              }
              `}
              onClick={() => setPhoto({ ...photo, bookmarked: true })}
            >
              <svg
                width='1em'
                height='2em'
                viewBox='0 0 16 16'
                class='bi bi-bookmark'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z'
                />
              </svg>
            </button>
          </div>
        </div>
        <p class='card-title font-weight-bolder'>Likes: {photo.likes}</p>
        <p class='card-title font-weight-bolder'>
          <Link href={'/user/' + photo.userId}>{photo.author}</Link>{' '}
          <span className='font-weight-normal'>{photo.location}</span>
        </p>
        <p class='card-text'>{photo.description}</p>
        <p className='card-text tags'>{photo.tags}</p>
        <p class='card-text'>
          <small class='text-muted'>{moment(photo.createdAt).fromNow()}</small>
        </p>
      </div>
    </div>
  );
}
