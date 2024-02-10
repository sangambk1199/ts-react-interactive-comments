import { User } from '../../types/user.types';

type CommentAuthorProps = {
    user: User;
    createdAt: string;
}

export const CommentAuthor = ({ user, createdAt }: CommentAuthorProps) => {
    return (
        <div className="flex items-center gap-2">
            <img src={user.image.webp} className='w-8' />
            <strong>{user.username}</strong>
            <span className='text-gray-400 text-sm'>{createdAt}</span>
        </div>
    )
}
