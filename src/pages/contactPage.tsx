import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
