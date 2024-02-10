import { useState } from 'react'
import { CommentCard } from './CommentCard'
import { AddCommentForm } from './AddCommentForm'

export const CommentThread = () => {
  const [showReplyForm, setShowReplyForm] = useState(false)

  const toggleReplyForm = () => {
    setShowReplyForm( prev => ! prev )
  }

  return (
    <>
      <CommentCard toggleReplyForm={toggleReplyForm} />

      <div className='ms-12 ps-12 border-s border-solid border-light-grayish-blue'>
        <CommentCard />
        {
            showReplyForm &&
            <AddCommentForm />
        }
      </div>
    </>
  )
}
