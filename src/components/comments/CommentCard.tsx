import replyIcon from '../../assets/icon-reply.svg'
import editIcon from '../../assets/icon-edit.svg'
import deleteIcon from '../../assets/icon-delete.svg'
import { CommentVote } from './CommentVote'
import { CommentAuthor } from './CommentAuthor'
import { User } from '../../types/user.types';
import { useUserData } from '../../contexts';

type CommentCardProps = {
  user: User;
  createdAt: string;
  content: string;
  score: number;
  toggleReplyForm: () => void;
}

export const CommentCard = ({ user, createdAt, content, score, toggleReplyForm }: CommentCardProps) => {

  const { currentUser } = useUserData();

  const cardActions = () => {
  
    if (currentUser.username === user.username) {
      return (
        <div className='flex gap-4'>
          <button className='text-soft-red font-bold text-sm flex items-center gap-2' onClick={toggleReplyForm}>
            <img src={deleteIcon} />
            Delete
          </button>
          <button className='text-moderate-blue font-bold text-sm flex items-center gap-2' onClick={toggleReplyForm}>
            <img src={editIcon} />
            Edit
          </button>
        </div>
      )
    } else {
      return (
        <button className='text-moderate-blue font-bold text-sm flex items-center gap-2' onClick={toggleReplyForm}>
          <img src={replyIcon} />
          Reply
        </button>
      )
    }
  }


  return (
    <div className='flex bg-white p-4 rounded-md gap-4 items-start my-4'>
      <CommentVote score={score} />

      <div>
        <div className="flex justify-between mb-3">
          <CommentAuthor user={user} createdAt={createdAt} />

          {cardActions()}
        </div>

        <p>{content}</p>
      </div>
    </div>
  )
}
