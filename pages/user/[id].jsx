import { useRouter } from 'next/router';
import moment from 'moment';
import { useState } from 'react';

export default function UserPage(props) {
  const router = useRouter();
  const id = router.query.id;
  const [bookmarked, setBookmarked] = useState(false);
  const userPhotos = props.data.filter(
    (item) => String(item.userId) === String(id)
  );
  if (props.data && props.data.length && !userPhotos) {
    router.push('/');
  }
  if (userPhotos.length) {
    return (
      <>
        <div class='row text-white'>
          <div className='col-2'>
            <img
              src={userPhotos[0].authorLogo}
              className='img-fluid rounded-circle border-primary'
              alt=''
            />
          </div>
          <div className='col-3 text-center d-flex flex-column align-items-center'>
            <p className='m-0'>{userPhotos.length}</p>
            <p className='text-white-50'>Posts</p>
          </div>
          <div className='col-3 text-center d-flex flex-column align-items-center'>
            <p className='m-0'>{moment(userPhotos[0].createdAt).fromNow()}</p>
            <p className='text-white-50'>Active</p>
          </div>
          <div className='col-3 text-center d-flex flex-column align-items-center'>
            <button
              type='button'
              class={`btn btn-dark p-0 text-left ${bookmarked ? ' clicked' : ''}
              `}
              onClick={() => setBookmarked(true)}
            >
              Follow
            </button>
          </div>
        </div>
        <div className="text-white pt-4">
          <h3>{userPhotos[0].author}</h3>
          <p className="white-space-break">
            {userPhotos[0].authorDesc}
          </p>
        </div>
        <div className="p-5 py-1">
         <hr className="text-white"></hr>
        </div>
        <div className="row row-cols-2">
          {userPhotos.map(photo=><img className="p-1" src={photo.photo}/>)}
        </div>
      </>
    );
  } else {
    return <p>Loading</p>;
  }
}
