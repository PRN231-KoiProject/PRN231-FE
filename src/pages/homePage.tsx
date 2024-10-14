import { Home } from "lucide-react";
import Footer from "../components/footer";
import Header from "../components/header";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default HomePage;
