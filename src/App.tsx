import { CommentSection } from "./components/comments/CommentSection"
import { UserDataProvider } from "./contexts/UserContext/UserProvider";
import { CommentsDataProvider } from "./contexts/CommentsContext/CommentsProvider";

function App() {

  return (
    <UserDataProvider>
      <CommentsDataProvider>
        <CommentSection />
      </CommentsDataProvider>
    </UserDataProvider>
  )
}

export default App
