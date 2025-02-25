
import useAuth from "./../../hooks/GetAuthInfo/useAuth";

const Home = () => {
 

  const { user, loading } = useAuth();

  

  if (loading) {
    return <p>loading.....</p>;
  }
  console.log(user);

  return (
    <div className="py-20">
        Home
      
    </div>
  );
};

export default Home;
