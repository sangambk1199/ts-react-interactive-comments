import replyIcon from '../../assets/icon-reply.svg'
import { CommentVote } from './CommentVote'
import { CommentAuthor } from './CommentAuthor'
import { User } from '../../types/user.types';

type CommentCardProps = {
  user: User;
  createdAt: string;
  content: string;
  score: number;
  toggleReplyForm?: () => void;
}

export const CommentCard = ({ user, createdAt, content, score, toggleReplyForm }: CommentCardProps) => {
  return (
    <div className='flex bg-white p-4 rounded-md gap-4 items-start my-4'>
        <CommentVote score={score} />

        <div>
            <div className="flex justify-between mb-3">
                <CommentAuthor user={user} createdAt={createdAt} />

                {
                  toggleReplyForm &&                  
                  <button className='text-moderate-blue font-bold text-sm flex items-center gap-2' onClick={toggleReplyForm}>
                    <img src={replyIcon} />
                    Reply
                </button>
                }
            </div>

            <p>{content}</p>
        </div>
    </div>
  )
}
