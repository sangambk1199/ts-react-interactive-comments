import { useState } from 'react'
import { useUserData } from './../../contexts/UserContext/UserContext';

export const AddCommentForm = () => {
  const { currentUser } = useUserData();

  const [commentText, setCommentText] = useState('')

  console.log( currentUser )

  return (
    <div className='flex flex-col bg-white p-4 rounded-md gap-4 items-end my-4'>
        <div className="flex items-start gap-3 w-full">
          <img src={currentUser.image.webp} className='w-12' />
          <textarea placeholder='Start writing...' className='w-full p-2 border-solid border' value={commentText} onChange={e => setCommentText(e.target.value)} />
        </div>
        <button className='btn-primary'>Post comment</button>
    </div>
  )
}
