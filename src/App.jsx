import { store } from "./app/store"
import { Provider } from "react-redux"
import PostForm from "./components/post/PostForm"
import PostsContainer from "./components/post/PostsContainer"

function App() {

  return (
    <Provider store={store}>
      <main className=" w-full gap-[1rem] bg-[#1D2143] text-white flex justify-center items-center">
        <PostForm />
        <PostsContainer />
      </main>
    </Provider>
  )
}

export default App
