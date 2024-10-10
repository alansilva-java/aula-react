import { usePosts } from "@/app/contexts/PostContext"


export const Footer = () => {
    const postCtx = usePosts();

    return (
        <footer>
            Total de Posts : {postCtx?.posts.length}
        </footer>
    )
}