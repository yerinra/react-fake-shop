import {
  FaCcPaypal,
  FaCcMastercard,
  FaCcAmex,
  FaCcVisa,
  FaCcApplePay,
  FaCcAmazonPay,
} from "react-icons/fa";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-base-300 my-20 py-10 mb-0 justify-center gap-10">
      <div className="text-md">Zero Base</div>
      <section className="flex text-3xl gap-2">
        <FaCcVisa />
        <FaCcMastercard />
        <FaCcAmex />
        <FaCcPaypal />
        <FaCcApplePay />
        <FaCcAmazonPay />
      </section>
      <section className="flex text-2xl gap-2">
        <a
          className="tooltip"
          data-tip="facebook"
          href="https://www.facebook.com/0base"
        >
          <BsFacebook />
        </a>
        <a
          className="tooltip"
          data-tip="instagram"
          href="https://www.instagram.com/zerobase.official/"
        >
          <BsInstagram />
        </a>
        <a className="tooltip" data-tip="github" href="https://github.com/">
          <BsGithub />
        </a>
      </section>
      <div className="text-sm">Copyright © 2023 Zero Base</div>
    </footer>
  );
};

export default Footer;
