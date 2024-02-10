import avatar from '../../assets/avatars/image-amyrobson.png'

export const CommentAuthor = () => {
    return (
        <div className="flex items-center gap-2">
            <img src={avatar} className='w-8' />
            <strong>sangambk1199</strong>
            <span className='text-gray-400 text-sm'>11 months ago</span>
        </div>
    )
}
