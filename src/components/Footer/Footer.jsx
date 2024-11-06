const Footer = () => {
  return (
    <div className="bg-slate-50 py-10">
      <div className="text-center py-5 space-y-5">
        <h1 className="text-5xl font-bold mb-4">Gadget Heaven</h1>
        <p className="text-xl ">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr className="w-8/12 mx-auto" />
      <footer className="flex items-center justify-center gap-60  text-black p-10 container mx-auto text-center">
        <nav className="flex flex-col space-y-3 font-xl">
          <h6 className="footer-title font-2xl">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="flex flex-col space-y-3 font-xl">
          <h6 className="footer-title  font-2xl">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav className="flex flex-col space-y-3 font-xl">
          <h6 className="footer-title  font-2xl">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
