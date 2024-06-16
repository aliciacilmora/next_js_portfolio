import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: " ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/Designer.jpeg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a GO based Network Scanner",
      description: "Creating now",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/go_lang.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "CASCA - Coflow Aware Selective Compression Accelarator",
      des: "A selective compression system for backbone networks.",
      img: "/casca.gif",
      iconLists: ["/Wireshark.svg", "/zstd.svg", "/scapy.svg", "/gns3.svg", "/dock.svg"],
      link: "https://medium.com/spidernitt/casca-coflow-aware-selective-compression-accelerator-c32020e4d6fd/",
    },
    {
      id: 2,
      title: "AstroTinker Bot",
      des: "AstroTinker Bot is designed to navigate through various modules of a space station, responding to wireless alerts, it locates faulty or missing components, communicates the issue.",
      img: "/astro.jpeg",
      iconLists: ["/solidworks.svg", "/Quartus.svg", "/ubuntu.svg", "/intel_fpga.svg", "/c.svg"],
      link: "https://github.com/aliciacilmora/riscv/tree/main",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Network Security and DevOps",
      desc: "Working at Spider R&D, the Research and Development Club of NIT Trichy.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
    id: 2,
    title: "Security Researcher",
    desc: "Passionate about exploring and understanding cybersecurity in spare time.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/aliciacilmora/aliciacilmora"
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://twitter.com/akashutosh659"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/ashutoshanand-work/"
    },
  ];