import { useState } from 'react'
import { CommentCard } from './CommentCard'
import { AddCommentForm } from './AddCommentForm'
import { Comment } from '../../contexts/CommentsContext/CommentsContext'

type CommentThreadProps = {
  comment: Comment
}

export const CommentThread = ({ comment }: CommentThreadProps) => {
  const [showReplyForm, setShowReplyForm] = useState(false)

  const toggleReplyForm = () => {
    setShowReplyForm( prev => ! prev )
  }

  return (
    <>
      <CommentCard 
        toggleReplyForm={toggleReplyForm} 
        content={comment.content} 
        user={comment.user} 
        score={comment.score}
        createdAt={comment.createdAt} 
      />

      <div className='ms-12 ps-12 border-s border-solid border-light-grayish-blue'>
        { 
          comment.replies &&
          comment.replies.map(reply => <CommentThread key={reply.id} comment={reply} />)
        }

        {
          showReplyForm && <AddCommentForm />
        }
      </div>
    </>
  )
}
