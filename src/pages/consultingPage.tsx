import Consulting from "../components/consulting";
import Footer from "../components/footer";
import Header from "../components/header";

type Props = {};

const ConsultingPage = (props: Props) => {
  return (
    <div>
      <Header />
      <Consulting />
      <Footer />
    </div>
  );
};

export default ConsultingPage;
