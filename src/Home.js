import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isLoading, error} = useFetch(`blogs`);

    

    return ( 
        <div className="home">
           
                { error && <div className="errorMsg">{error}</div> }
           
            {isLoading && <div>Please wait ...</div>}
            {blogs && <BlogList blogs={blogs} title="All Posts" />}
           
        </div>
     );
}
 
export default Home;