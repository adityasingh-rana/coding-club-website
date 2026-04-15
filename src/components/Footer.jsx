function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 right-0 bg-linear-to-b from-background/60 to-black/60 text-center text-sm text-muted-foreground flex justify-between items-center h-12 px-5 z-50 animate-[fadeIn_1s_ease-in-out]'>

        {/* Icons */}
        <div className="flex justify-center gap-6 ">

          <a href="https://github.com/adityasingh-rana/coding-club-website" target="_blank" rel="noopener noreferrer"
            className="hover:text-primary transition duration-300">
            <i className="ri-github-line text-xl"></i>
          </a>

          <a href="https://www.linkedin.com/company/ietrmlau" target="_blank" rel="noopener noreferrer"
            className="hover:text-primary transition duration-300">
            <i className="ri-linkedin-box-line text-xl"></i>
          </a>

          <a href="mailto:adityasinghk099@gmail.com"
            className="hover:text-primary transition duration-300">
            <i className="ri-mail-line text-xl"></i>
          </a>

        </div>

        {/* Copyright */}
        <div>
          © {new Date().getFullYear()} IET Students Community. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;