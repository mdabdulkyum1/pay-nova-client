
import useAuth from "./../../hooks/GetAuthInfo/useAuth";
import Banner from "./Banner";

const Home = () => {
 

  const { user, loading } = useAuth();

  

  if (loading) {
    return <p>loading.....</p>;
  }
  console.log(user);

  return (
    <div className="py-16">
       <Banner></Banner>
      
    </div>
  );
};

export default Home;
