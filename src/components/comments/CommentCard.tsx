import replyIcon from '../../assets/icon-reply.svg'
import { CommentVote } from './CommentVote'
import { CommentAuthor } from './CommentAuthor'

type CommentCardProps = {
  toggleReplyForm?: () => void;
}

export const CommentCard = ({ toggleReplyForm }: CommentCardProps) => {
  return (
    <div className='flex bg-white p-4 rounded-md gap-4 items-start my-4'>
        <CommentVote />

        <div>
            <div className="flex justify-between mb-3">
                <CommentAuthor />

                {
                  toggleReplyForm &&                  
                  <button className='text-moderate-blue font-bold text-sm flex items-center gap-2' onClick={toggleReplyForm}>
                    <img src={replyIcon} />
                    Reply
                </button>
                }
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, qui modi? Nostrum nemo laborum architecto excepturi placeat, molestias exercitationem consectetur dolores quo, pariatur vel aliquam sequi harum non repellendus iure!</p>
        </div>
    </div>
  )
}
