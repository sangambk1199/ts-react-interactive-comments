import { useState } from 'react'

export const AddCommentForm = () => {
  const [commentText, setCommentText] = useState('')
  return (
    <div className='flex flex-col bg-white p-4 rounded-md gap-4 items-end my-4'>
        <textarea className='w-full p-2 border-solid border' value={commentText} onChange={e => setCommentText(e.target.value)} />
        <button className='btn-primary'>Post comment</button>
    </div>
  )
}
