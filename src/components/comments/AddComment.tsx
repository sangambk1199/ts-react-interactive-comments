import { useState } from 'react'
import { AddCommentForm } from './AddCommentForm'

export const AddComment = () => {
  const [showCommentBox, setShowCommentBox] = useState(false)

  const handleClick = () => {
    setShowCommentBox( prev => !prev )
  }

  return (
    <>
      {
        showCommentBox &&
        <AddCommentForm />
      }

      {
        !showCommentBox &&
        <button className='btn-primary' onClick={ handleClick }>Write a Comment</button>
      }
    </>
  )
}
