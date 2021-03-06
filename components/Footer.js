export const Footer = () => {
  const navigation = {
    main: [
      { name: "Home", href: "#" },
      { name: "Doc", href: "#" },
      { name: "Prices", href: "#" },
      { name: "Contact", href: "#" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/iambrucekevin/",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Twitter",
        href: "https://twitter.com/BruceMulinda",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: "Linkedin",
        href:
          "https://www.linkedin.com/in/mulinda-kevin-bruce/?trk=public_profile_browsemap&original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr",
        icon: (props) => (
          <svg
            width="27"
            height="25"
            viewBox="0 0 27 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2125 0H6.76606C3.04044 0 0 2.81746 0 6.26984V18.75C0 22.1825 3.04044 25 6.76606 25H20.2339C23.9596 25 27 22.1825 27 18.7302V6.26984C26.9786 2.81746 23.9381 0 20.2125 0ZM8.99286 20.2381H5.13878V9.92064H8.99286V20.2381ZM7.04441 8.33333C5.95242 8.33333 5.07454 7.51984 5.07454 6.50794C5.07454 5.49603 5.95242 4.68254 7.04441 4.68254C8.1364 4.68254 9.01427 5.49603 9.01427 6.50794C8.99286 7.51984 8.11499 8.33333 7.04441 8.33333ZM21.8612 20.2381H21.8398H18.6281V15.2381C18.6281 14.0278 18.4568 12.4802 16.6796 12.4802C14.8596 12.4802 14.5599 13.7897 14.5599 15.1587V20.2381H11.3481V9.92064H14.3458V11.3095H14.4314C14.9025 10.5159 15.9944 9.90079 17.7074 9.90079C21.2403 9.90079 21.8612 11.7857 21.8612 14.5833V20.2381Z"
              fill="white"
            />
          </svg>
        ),
      },
      {
        name: "Gmail",
        href: "mailto:mulindakevin7@gmail.com",
        icon: (props) => (
          <svg
            width="27"
            height="25"
            viewBox="0 0 27 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6354 11.6688C21.444 11.3787 21.097 11.3339 20.8605 11.5687L20.6688 11.7589C20.4322 11.9937 20.3957 12.4191 20.5872 12.7091C20.6962 12.8741 20.8553 12.9597 21.0158 12.9597C21.1376 12.9597 21.2602 12.9104 21.3622 12.8092L21.5539 12.6189C21.7904 12.3842 21.8269 11.9588 21.6354 11.6688Z"
              fill="white"
            />
            <path
              d="M20.0582 13.2343C19.8668 12.9443 19.5197 12.8994 19.2833 13.1342L15.3436 16.9928C15.1071 17.2275 15.0706 17.6529 15.2621 17.9429C15.3709 18.1079 15.5301 18.1935 15.6906 18.1935C15.8124 18.1935 15.935 18.1442 16.037 18.043L19.9767 14.1845C20.2131 13.9497 20.2497 13.5244 20.0582 13.2343Z"
              fill="white"
            />
            <path
              d="M23.7169 0H3.28314C1.47282 0 0 1.80592 0 4.02561V20.9744C0 23.1941 1.47282 25 3.28314 25H23.7169C25.5272 25 27 23.1941 27 20.9744V4.02561C27 1.80592 25.5272 0 23.7169 0ZM22.1438 1.35122L13.4926 9.92581L4.84133 1.35122H22.1438ZM22.577 23.6487H4.40817V7.86907L13.1469 16.5007C13.3487 16.7 13.6365 16.7 13.8382 16.5007L22.5769 7.86907V23.6487H22.577ZM25.898 20.9743C25.898 22.449 24.9195 23.6486 23.7169 23.6486H23.6791V6.45719C23.6791 6.19706 23.5573 5.96008 23.3659 5.84776C23.1743 5.73538 22.9475 5.7679 22.7824 5.93104L13.4926 15.107L4.20277 5.93104C4.0375 5.7679 3.81053 5.73538 3.61927 5.84776C3.42784 5.96008 3.30608 6.19706 3.30608 6.45719V23.6486H3.28308C2.08048 23.6487 1.10204 22.449 1.10204 20.9744V4.02561C1.10204 2.62725 1.98207 1.4768 3.09862 1.36157L13.1462 11.3202C13.2472 11.4203 13.3699 11.4704 13.4926 11.4704C13.6153 11.4704 13.7379 11.4203 13.8389 11.3202L23.8878 1.36021C25.0108 1.46755 25.898 2.62156 25.898 4.02554V20.9743Z"
              fill="white"
            />
          </svg>
        ),
      },
    ],
  };
  return (
    <div>
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-lg text-white hover:text-brandSecondary-400"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-brandSecondary-400 "
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-white">
            &copy; 2022 Mulinda Kevin Bruce, All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
