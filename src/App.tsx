import { CommentSection } from "./components/comments/CommentSection"
import { AddComment } from "./components/comments/AddComment"
import { UserDataProvider } from "./contexts/UserContext/UserProvider";
import { CommentsDataProvider } from "./contexts/CommentsContext/CommentsProvider";

function App() {

  return (
    <UserDataProvider>
      <CommentsDataProvider>
        <div className="container max-w-screen-md mx-auto px-4 my-24">
          <CommentSection />
          <AddComment />
        </div>
      </CommentsDataProvider>
    </UserDataProvider>
  )
}

export default App
