const logotext = "Sheraz";
const meta = {
    title: "Sheraz Qamar",
    description: "I’m Sheraz _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Sheraz Qamar",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop Custom Apps",
    },
    description: "Building Solutions, Empowering Growth — Your Full Stack Development Partner",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about my self",
    aboutme: "As a passionate Full Stack Web Developer, I specialize in creating dynamic, user-friendly, and scalable solutions that help businesses thrive online. With expertise in both front-end and back-end technologies, I bring a holistic approach to web development, ensuring seamless functionality and an intuitive user experience. My goal is to simplify complex challenges and deliver results that exceed expectations, acting as a reliable partner in your digital journey.",
};

const worktimeline = [{
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
},
{
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
},
{
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
},
];

const skills = [{
    name: "React JS / Next JS",
    value: 90,
},
{
    name: "Tailwind, Ant Design, Material UI",
    value: 85,
},
{
    name: "Node JS",
    value: 85,
},
{
    name: "OPENAI API",
    value: 80,
},
{
    name: "No SQL",
    value: 90,
},
{
    name: "SQL",
    value: 75,
},
{
    name: "Firebase",
    value: 80,
},
{
    name: "Supabase",
    value: 60,
},
{
    name: "AWS",
    value: 80,
},
{
    name: "Docker",
    value: 75,
},
{
    name: "GIT",
    value: 90,
},
];

const services = [{
    title: "Custom Web Development",
    description: "Build responsive, high-performance web applications using ReactJS, NextJS, and TailwindCSS to provide modern, fast-loading, and visually appealing user experiences.",
}, {
    title: "Full Stack Development",
    description: "Leverage the power of Node.js and Express.js for back-end development, coupled with robust front-end technologies to create end-to-end solutions for scalable applications.",
}, {
    title: "Payment Gateway Integration",
    description: "Seamlessly integrate secure payment methods like Stripe and PayPal into your website or application, ensuring smooth transactions for your customers.",
}, {
    title: "API Integration Services",
    description: "Expertise in integrating any third-party API on the frontend, enabling your web application to communicate effectively with external services and platforms.",
},{
    title: "Database and Cloud Solutions",
    description: "Provide database management and cloud-based solutions using AWS Cloud Base, ensuring data scalability, security, and accessibility.",
  },{
    title: "AI-Powered Applications",
    description: "Integrate OpenAI's powerful APIs to bring AI capabilities into your applications, enhancing user interaction and automating processes.",
  },{
    title: "Containerized Deployment",
    description: "Use Docker to build, deploy, and manage containerized applications, ensuring efficiency, consistency, and portability across environments.",
  },
];

const dataportfolio = [{
    img: require('./assets/images/nft1.png'),
    description: "NFT Market Place",
    link: "https://nft-marketplace.hashmakersol.net/",
},
{
    img: require('./assets/images/logomoto1.png'),
    description: "Logomoto - Strapi CMS with NextJS App.",
    link: "https://logomoto.netlify.app/",
},
{
    img: require('./assets/images/r1.png'),
    description: "Resumer - A Resume Building application based on pre-defined templates.",
    link: "https://resumer-stage.vercel.app/",
},
{
    img: require('./assets/images/di2.png'),
    description: "di-workspace - A German SaaS Product for different Role based Users with Stripe Subscription.",
    link: "https://di-workspace.com/",
},
{
    img: require('./assets/images/muyasr1.png'),
    description: "Muyasr - A B2B Ecommerce App solution for Raw Material.",
    link: "https://muyasr.vercel.app/",
},
{
    img: require('./assets/images/muyasradmin1.png'),
    description: "Ecommerce Admin Panel - An Admin Panel for Ecommerce to manage Users, Products, Selling etc.",
    link: "https://muyasr-admin.vercel.app/",
},

{
    img: require('./assets/images/raven1.png'),
    description: "Raven Games - An Admin Panel for Gaming company to manage their Game Resources and manage Adds.",
    link: "https://raven-dashboard.vercel.app/",
},
{
    img: require('./assets/images/hms1.png'),
    description: "HMS Marketing - A Prototype for email Marketing tool.",
    link: "https://hms-marketing-pro.vercel.app/",
},
{
    img: require('./assets/images/luxuri1.png'),
    description: "Luxuri - A Property, Cars and Yachts Rental Site.",
    link: "https://luxuri.com/",
},
{
    img: require('./assets/images/wd1.png'),
    description: "Woodendoor - Admin Panel for Luxuri.com .",
    link: "https://woodendoorpm.com/",
},
{
    img: require('./assets/images/autoigdm1.png'),
    description: "AutoIGDM - An Instagram marketing campaign system.",
    link: "https://www.autoigdm.com/pro",
},
{
    img: require('./assets/images/aws1.png'),
    description: "AWS Leadfinder - An Serverless Automated Architecture solution for AutoIGDM on AWS.",
    link: "#",
},
];

const contactConfig = {
    YOUR_EMAIL: "qsheraz390@gmail.com",
    YOUR_FONE: "+92302-1848158",
    description: "Have questions or need assistance with your project? We're here to help! Reach out to us using the form below, and we'll get back to you as soon as possible. Whether you're looking for expert advice or a tailored web solution, we're ready to turn your ideas into reality.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/sherazmaker",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/sheraz-qamar-farooqi-570592147/",
    // twitter: "https://twitter.com",
    upwork: "#",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};