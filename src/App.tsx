import { CommentSection } from "./components/comments/CommentSection"
import { AddComment } from "./components/comments/AddComment"
import commentData from './utils/data.json';

function App() {

  return (
    <div className="container max-w-screen-md mx-auto px-4 my-24">
      <CommentSection currentUser={commentData.currentUser} comments={commentData.comments} />
      <AddComment />
    </div>
  )
}

export default App
