export interface Skill {
  name: string;
  src?: string;
  display?: boolean;
}

export const skillImageSrc = (skill: Skill): string | undefined =>
  skill.src === undefined ? undefined : "img/technologies/" + skill.src;

export const shouldDisplaySkill = (skill: Skill): boolean =>
  skill.display !== false;

export const skillInitials = (skill: Skill): string =>
  skill.name
    .split(/[\s/+.-]+/)
    .filter((part) => part.length > 0)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

// Skills

export class Language implements Skill {
  static readonly Typescript = new Language({
    name: "Typescript",
    src: "typescript.png",
  });
  static readonly Java = new Language({ name: "Java", src: "java.png" });
  static readonly C = new Language({ name: "C", src: "c.png" });
  static readonly Cpp = new Language({ name: "C++", src: "cpp.png" });
  static readonly Rust = new Language({ name: "Rust", src: "rust.png" });
  static readonly R = new Language({ name: "R", src: "r.png" });
  static readonly Python = new Language({ name: "Python", src: "python.png" });
  static readonly Kotlin = new Language({ name: "Kotlin", src: "kotlin.png" });
  static readonly JavaScript = new Language({
    name: "JavaScript",
    src: "js.png",
  });
  static readonly HTML = new Language({ name: "HTML", src: "html5.svg.png" });
  static readonly CSS = new Language({ name: "CSS", src: "css.svg.png" });
  static readonly CSharp = new Language({ name: "C#", src: "csharp.svg.png" });
  static readonly Swift = new Language({ name: "Swift", src: "swift.png" });

  static readonly All: Array<Language> = Object.values(this).filter(
    (x) => x instanceof Language,
  );

  name: string;
  src?: string;
  display?: boolean;

  private constructor(args: Skill) {
    this.name = args.name;
    this.src = args.src;
    this.display = args.display;
  }
}

export class Technology implements Skill {
  static readonly Git = new Technology({
    name: "Git",
    src: "git.png",
    display: false,
  });
  static readonly React = new Technology({ name: "React", src: "react.png" });
  static readonly AWS = new Technology({ name: "AWS", src: "aws.png" });
  static readonly Firebase = new Technology({
    name: "Firebase",
    src: "firebase.png",
  });
  static readonly DotNet = new Technology({
    name: ".NET",
    src: "dotnet.svg.png",
  });
  static readonly Maven = new Technology({
    name: "Maven",
    src: "maven.png",
    display: false,
  });
  static readonly Gradle = new Technology({
    name: "Gradle",
    src: "gradle.png",
  });
  static readonly Arduino = new Technology({
    name: "Arduino",
    src: "arduino.png",
  });
  static readonly OpenGL = new Technology({
    name: "OpenGL",
    src: "opengl.png",
  });
  static readonly WASM = new Technology({
    name: "WebAssembly",
    src: "wasm.svg.png",
  });
  static readonly Jupyter = new Technology({
    name: "Jupyter Notebook",
    src: "jupyter.png",
  });
  static readonly CMake = new Technology({ name: "CMake", src: "cmake.png" });
  static readonly AIML = new Technology({ name: "AI/ML", src: "ai-ml.png" });
  static readonly RAG = new Technology({ name: "RAG", src: "rag.png" });
  static readonly MCP = new Technology({ name: "MCP", src: "mcp.png" });
  static readonly A2A = new Technology({ name: "A2A", src: "a2a.png" });
  static readonly Numpy = new Technology({ name: "NumPy", src: "numpy.webp" });
  static readonly Pandas = new Technology({ name: "Pandas", src: "pandas.svg" });
  static readonly PyTorch = new Technology({
    name: "PyTorch",
    src: "pytorch.webp",
    display: false,
  });
  static readonly XGBoost = new Technology({
    name: "XGBoost",
    src: "xgboost.png",
    display: false,
  });
  static readonly ScikitLearn = new Technology({
    name: "scikit-learn",
    src: "scikit-learn.svg",
    display: false,
  });
  static readonly Tidyverse = new Technology({
    name: "Tidyverse",
    src: "tidyverse.webp",
    display: false,
  });
  static readonly OpenAI = new Technology({
    name: "OpenAI",
    src: "openai.png",
    display: false,
  });
  static readonly NextJS = new Technology({
    name: "Next.js",
    src: "next.webp",
    display: false,
  });
  static readonly FastAPI = new Technology({
    name: "FastAPI",
    src: "fastapi.webp",
    display: false,
  });
  static readonly ThreeJS = new Technology({
    name: "Three.js",
    src: "three.webp",
    display: false,
  });
  static readonly Bluetooth = new Technology({
    name: "Bluetooth",
    src: "bluetooth.webp",
    display: false,
  });
  static readonly ESPIDF = new Technology({
    name: "ESP-IDF",
    src: "esp-idf.webp",
    display: false,
  });
  static readonly FreeRTOS = new Technology({
    name: "FreeRTOS",
    src: "freertos.png",
  });
  static readonly JetpackCompose = new Technology({
    name: "Jetpack Compose",
    src: "jetpackcompose.png",
    display: false,
  });
  static readonly GitHubActions = new Technology({
    name: "GitHub Actions",
    src: "github-actions.webp",
    display: false,
  });
  static readonly Docker = new Technology({ name: "Docker", src: "docker.webp" });
  static readonly Jenkins = new Technology({ name: "Jenkins", src: "jenkins.svg" });
  // static readonly Make = new Technology({ name: "Make", src: "make.png" });

  static readonly All: Array<Technology> = Object.values(this).filter(
    (x) => x instanceof Technology,
  );

  name: string;
  src?: string;
  display?: boolean;

  private constructor(args: Skill) {
    this.name = args.name;
    this.src = args.src;
    this.display = args.display;
  }
}

export class OtherSkill implements Skill {
  static readonly Linux = new OtherSkill({ name: "Linux", src: "linux.png" });
  static readonly Android = new OtherSkill({
    name: "Android",
    src: "android.png",
  });
  static readonly OOP = new OtherSkill({ name: "OOP", src: "oop.png" });
  static readonly TestDrivenDevelopment = new OtherSkill({
    name: "Test-Driven Development",
    src: "testdrivendev.png",
  });
  static readonly TechnicalCommunication = new OtherSkill({
    name: "Technical Communication",
    src: "communicate.png",
    display: false,
  });
  static readonly DesignPatterns = new OtherSkill({
    name: "Design Patterns",
    src: "blocks.png",
    display: false,
  });
  static readonly FunctionalProgramming = new OtherSkill({
    name: "Functional Programming",
    src: "lambda.png",
  });
  static readonly UIUX = new OtherSkill({ name: "UI Design", src: "uiux.png" });
  static readonly CAD = new OtherSkill({
    name: "CAD (Autodesk Fusion 360)",
    src: "f360.png",
  });
  static readonly PCBDesign = new OtherSkill({
    name: "PCB Design",
    src: "pcb-design.png",
  });
  static readonly Networking = new OtherSkill({
    name: "Networking",
    src: "networking.png",
  });
  static readonly CICD = new OtherSkill({ name: "CI/CD", src: "ci-cd.png" });
  static readonly DistributedSystems = new OtherSkill({
    name: "Distributed Systems",
    src: "distributed-systems.png",
  });
  static readonly EmbeddedSystems = new OtherSkill({
    name: "Embedded Systems",
    src: "embeddedsystems.png",
  });

  static readonly All: Array<OtherSkill> = Object.values(this).filter(
    (x) => x instanceof OtherSkill,
  );

  name: string;
  src?: string;
  display?: boolean;

  private constructor(args: Skill) {
    this.name = args.name;
    this.src = args.src;
    this.display = args.display;
  }
}

export interface SkillCategory {
  name: string;
  skills: Array<Skill>;
}

export const SkillCategories: Array<SkillCategory> = [
  {
    name: "Languages",
    skills: Language.All,
  },
  {
    name: "AI & Data",
    skills: [
      Technology.AIML,
      Technology.RAG,
      Technology.MCP,
      Technology.A2A,
      Technology.Numpy,
      Technology.Pandas,
      Technology.PyTorch,
      Technology.XGBoost,
      Technology.ScikitLearn,
      Technology.Tidyverse,
      Technology.OpenAI,
      Technology.Jupyter,
    ],
  },
  {
    name: "Platforms & Tooling",
    skills: [
      Technology.Git,
      Technology.React,
      Technology.AWS,
      Technology.Firebase,
      Technology.DotNet,
      Technology.Maven,
      Technology.Gradle,
      Technology.Arduino,
      Technology.OpenGL,
      Technology.WASM,
      Technology.CMake,
      Technology.Docker,
      Technology.Jenkins,
      Technology.GitHubActions,
      Technology.NextJS,
      Technology.FastAPI,
      Technology.ThreeJS,
      Technology.Bluetooth,
      Technology.ESPIDF,
      Technology.FreeRTOS,
      Technology.JetpackCompose,
      OtherSkill.Android,
    ],
  },
  {
    name: "Engineering Domains",
    skills: [
      OtherSkill.Linux,
      OtherSkill.Networking,
      OtherSkill.CICD,
      OtherSkill.DistributedSystems,
      OtherSkill.EmbeddedSystems,
      OtherSkill.OOP,
      OtherSkill.TestDrivenDevelopment,
      OtherSkill.DesignPatterns,
      OtherSkill.FunctionalProgramming,
      OtherSkill.TechnicalCommunication,
      OtherSkill.UIUX,
      OtherSkill.CAD,
      OtherSkill.PCBDesign,
    ],
  },
];

export const AllSkills: Array<Skill> = SkillCategories.reduce<Array<Skill>>(
  (skills, category) => skills.concat(category.skills),
  [],
);

// EMPLOYMENT

export class EmploymentRole {
  static readonly AmazonSdeIntern: EmploymentRole = new EmploymentRole({
    company: "Amazon",
    role: "Software Development Engineer Intern",
    dates: "May 2026 - Present",
    location: "Vancouver, BC, Canada",
    logoSrc: "/img/companylogos/amazon.webp",
    bullets: [
      "Building a self-improving agentic AI platform on AWS for ticket analysis, historical retrieval, and root-cause feedback loops",
      "Delivered RAG, source attribution, Bedrock Knowledge Base integration, auto-improving CTI suggestions, learning commands, and ticket knowledge management to 5 teams",
      "Implementing MCP/A2A configuration, Slack actions, auto-execution, metrics dashboards, and model fine-tuning",
    ],
    skills: [
      Language.Python,
      Language.Typescript,
      Technology.AWS,
      Technology.RAG,
      Technology.MCP,
      Technology.A2A,
      Technology.AIML,
      Technology.Git,
      OtherSkill.TechnicalCommunication,
    ],
  });

  static readonly GeneralDynamicsEmbeddedCoop: EmploymentRole =
    new EmploymentRole({
      company: "General Dynamics",
      role: "Embedded Software Engineer Co-op",
      dates: "Jan 2025 - May 2026",
      location: "Calgary, AB, Canada / Remote",
      logoSrc: "/img/companylogos/gd.webp",
      bullets: [
        "Designed software for tactical communications systems on a defense R&D team",
        "Developed 3 Linux device drivers and daemons in C/C++ for distributed embedded platforms",
        "Saved customers $20k+ per vehicle platform by enabling additional users on existing hardware resources",
        "Implemented configurable networking functionality for distributed systems using layer 3/4/5 protocols",
        "Resolved 30+ defects in embedded projects, improving reliability in safety-critical environments",
        "Reduced CI/CD pipeline runtime by 50% across multiple pipelines with Docker, Python, and Jenkins",
        "Built and integrated AI infrastructure and tooling supporting 20+ engineers and 3 build pipelines",
        "Shipped client functionality in .NET apps interfacing with embedded devices & AI services",
      ],
      skills: [
        Language.C,
        Language.Cpp,
        Language.CSharp,
        Language.Python,
        Technology.DotNet,
        Technology.Docker,
        Technology.Jenkins,
        Technology.AIML,
        Technology.Git,
        OtherSkill.Linux,
        OtherSkill.Networking,
        OtherSkill.CICD,
        OtherSkill.DistributedSystems,
        OtherSkill.EmbeddedSystems,
        OtherSkill.TechnicalCommunication,
      ],
    });

  static readonly All: Array<EmploymentRole> = [
    this.AmazonSdeIntern,
    this.GeneralDynamicsEmbeddedCoop,
  ];

  static withSkill(skill: Skill | undefined): Array<EmploymentRole> {
    if (skill === undefined) return [];
    return this.All.filter((role) => role.skills.includes(skill));
  }

  static skillsUsedWith(skill: Skill | undefined): Array<Skill> {
    if (skill === undefined) return [];
    const rolesUsingSkill = this.withSkill(skill);
    const skills = new Set<Skill>();
    rolesUsingSkill.forEach((role) =>
      role.skills.forEach((roleSkill) => skills.add(roleSkill)),
    );
    skills.delete(skill);
    return Array.from(skills);
  }

  company: string;
  role: string;
  dates: string;
  location: string;
  logoSrc: string;
  bullets: Array<string>;
  skills: Array<Skill>;

  private constructor(args: {
    company: string;
    role: string;
    dates: string;
    location: string;
    logoSrc: string;
    bullets: Array<string>;
    skills: Array<Skill>;
  }) {
    this.company = args.company;
    this.role = args.role;
    this.dates = args.dates;
    this.location = args.location;
    this.logoSrc = args.logoSrc;
    this.bullets = args.bullets;
    this.skills = args.skills;
  }
}

// PROJECTS

export class Project {
  static readonly Callumployed: Project = new Project({
    name: "callumployed",
    date: "Jul 2026",
    description: [
      "Local-first Python job-search automation tool with a CLI, web tracker, and FastMCP agent interface",
      "Built a LangGraph scan workflow that renders career pages, extracts candidates, scores links, classifies ambiguous postings, visits selected roles, and persists scan artifacts",
      "Implemented webscraping with Playwright, Browserbase fallback, BeautifulSoup link extraction, schema.org JobPosting parsing, ATS heuristics, location parsing, and cleaned role descriptions",
      "Designed deterministic scoring agents plus LangChain-based LLM classifiers to separate job postings from career navigation and merge heuristic/agent discoveries",
      "Integrated Turso-compatible storage with vectorized resume-feedback and cover-letter-example retrieval for agent-assisted application prep",
    ],
    links: [
      {
        link: "https://github.com/CallumMackenzie/callumployed",
        name: "GitHub Repository",
      },
    ],
    imageBasePath: "/img/callumployed/",
    images: ["home.png", "prepresume.png", "prepcl.png"],
    skills: [
      Language.Python,
      Language.JavaScript,
      Language.HTML,
      Language.CSS,
      Technology.AIML,
      Technology.RAG,
      Technology.MCP,
      Technology.OpenAI,
      Technology.Git,
      OtherSkill.TestDrivenDevelopment,
      OtherSkill.UIUX,
    ],
  });

  static readonly FindMyForce: Project = new Project({
    name: "Find My Force",
    date: "Mar 2026",
    description: [
      "An application for soldiers to identify and track radio frequency (RF) identities on the battlefield",
      "Classified signal type from raw RF IQ data",
      "Integrated a convolutional neural net (via PyTorch) and XGBoost together with logistic regression, achieving 89% accuracy",
      "Engineered spectral features from RF data in the complex plane. Ie. phase jump frequency, amplitude variance, etc",
      "CNN had 4 1D convolutional layers and 2 fully connected layers, with 80% accuracy",
      "XGBoost model with feature selection featured 82% accuracy",
      "Created for the Red Team Hacks Defence Hackathon",
    ],
    links: [
      {
        link: "https://github.com/Eroxl/Find-My-Force-Research",
        name: "GitHub Repository",
      },
    ],
    imageBasePath: "/img/findmyforce/",
    images: ["one.png", "two.png", "three.png"],
    skills: [
      Language.Python,
      Language.Typescript,
      Technology.AIML,
      Technology.Numpy,
      Technology.PyTorch,
      Technology.XGBoost,
      Technology.ScikitLearn,
      Technology.Jupyter,
      Technology.React,
      Technology.Git,
      OtherSkill.TechnicalCommunication,
    ],
  });

  static readonly Gregor: Project = new Project({
    name: "TBI Motor Recovery",
    date: "Jan 2026",
    description: [
      "A web application for individuals with traumatic brain injury (TBI) to perform recovery drills",
      "Leverages generative AI to modify drills and plans in accordance with recovery metrics",
      "Utilizes data-driven UI to inform treatment-involved individuals",
      "Uses eye-tracking and physical device orientation tracking for drills",
      "Principal component analysis to score 3-dimensional motor exercises",
      "Visualize exercises in-browser with three js and web bluetooth for external controls",
      "Created for the 2026 Telus AI at the Edge of Innovation Hackathon",
    ],
    links: [
      {
        link: "https://github.com/EricBalanecki/Telus-Hack-TBI-Gregor",
        name: "GitHub Repository",
      },
      {
        link: "https://camackenzie.com/TBIRecoverySlideDeck.pdf",
        name: "Slide Deck",
      },
    ],
    imageBasePath: "/img/gregor/",
    images: ["home.jpeg", "eye.jpeg", "3d.png"],
    skills: [
      Language.Typescript,
      Language.Python,
      Technology.AIML,
      Technology.NextJS,
      Technology.FastAPI,
      Technology.OpenAI,
      Technology.ThreeJS,
      Technology.Bluetooth,
      Technology.React,
      Technology.Git,
      OtherSkill.TechnicalCommunication,
    ],
  });

  static readonly Fitnet: Project = new Project({
    name: "FITNET",
    date: "Feb 2025 - Dec 2025",
    description: [
      "A system of nodes placed across the body to read EMG and motion data in order to record and analyze movement",
      "Utilized ESP-IDF with C to work with the ESP32-S3 to integrate IMU, EMG, and thermistor sensor data",
      "Used ESP32-S3 Bluetooth Low Energy to connect data to iOS",
      "Created custom PCB with Autodesk Fusion360, designing a power system providing +9V, -9V, 3.3V, 5V from 1S LIPO",
      "Integrated battery protection and charging into electronics design",
      "Visualized cost with with Fusion360 BOM, DigiKey API, Python, and Jupyter Notebooks",
      "Synchronized data between host and nodes with sub-millisecond accuracy over Bluetooth",
      "Streamed data live from device to iOS to Firebase, using Python for data analysis",
      "Implemented on-device Mahony Attitude and Heading Reference System (AHRS) for accurate orientation calculation",
      "Utilized Dynamic Time Warping (DTW) for KNN classification of motion patterns",
      // TODO: add more
      " *** More info to come *** ",
    ],
    links: [
      { link: "https://github.com/Fitintel/biodyn-100", name: "Firmware" },
      { link: "https://github.com/Fitintel/biohub-ios", name: "iOS App" },
      { link: "https://github.cmm/Fitintel", name: "GitHub Organization" },
    ],
    imageBasePath: "/img/fitnet/",
    images: [
      "v64render.png",
      "ui1.jpg",
      "real1.jpg",
      "pcbv1.jpeg",
      "emgdev1real.png",
      "emgdev1render.png",
    ],
    skills: [
      Language.C,
      Language.Swift,
      Language.Python,
      Technology.CMake,
      Technology.ESPIDF,
      Technology.FreeRTOS,
      Technology.Jupyter,
      Technology.Numpy,
      Technology.Pandas,
      Technology.PyTorch,
      Technology.ScikitLearn,
      Technology.Firebase,
      Technology.Bluetooth,
      Technology.Git,
      OtherSkill.PCBDesign,
      OtherSkill.CAD,
      OtherSkill.Networking,
      OtherSkill.DistributedSystems,
      OtherSkill.EmbeddedSystems,
      OtherSkill.TechnicalCommunication,
    ],
  });

  static readonly Drone: Project = new Project({
    name: "Drone from Scratch",
    date: "Apr 2022 - Aug 2024",
    description: [
      "Utilized a variety of low-level communication protocols such as SPI, PWM, I2C",
      "Researched components based on electrical requirements (FPGA vs microprocessor, voltages, PWM channels, camera interface)",
      "Designed custom chassis and elecrical diagram with Autodesk Fusion 360",
      "Ran no-std Rust on microprocessors for memory safety and speed",
      "Designing flight controller and remote-drone commincation protocols",
      "Creating iOS app to connect via bluetooth to ground station which communicates with drone",
      "Read a variety of sensor feeds on an embedded device (accelerometer, barometer, magnetometer, camera, ultrasonic)",
    ],
    links: [
      { link: "https://a360.co/3AnnJ8f", name: "CAD Model Link" },
      {
        link: "https://github.com/CallumMackenzie/rc-plane",
        name: "GitHub Repository",
      },
    ],
    imageBasePath: "/img/drone/",
    images: [
      "inside top.jpeg",
      "chassis.jpeg",
      "drone realistic angle.png",
      "drone realistic top.png",
      "circuit overview.png",
      "drone realistic bottom.png",
    ],
    skills: [
      Language.C,
      Language.Cpp,
      Language.Rust,
      Technology.Arduino,
      Technology.Git,
      OtherSkill.CAD,
      OtherSkill.Linux,
      OtherSkill.Networking,
      OtherSkill.DistributedSystems,
      OtherSkill.EmbeddedSystems,
    ],
  });

  static readonly Vitalert: Project = new Project({
    name: "VitAlert",
    date: "Jan 2024",
    description: [
      "Submission for NWHacks 2024, a 24 hour hackathon focusing on health",
      "Worked on collaborative coding skills with 3 group members",
      "Developed React skills with a responsive UI that adapts to screen size",
      "Utilized R for webscraping and data tidying",
      "Linked in APIs from several services",
    ],
    links: [
      { link: "https://nw-hackers.web.app", name: "Live Demo" },
      {
        link: "https://github.com/CallumMackenzie/vitalert",
        name: "GitHub Repository",
      },
    ],
    imageBasePath: "/img/vitalert/",
    images: ["home.png", "login.png", "nutrient.png"],
    skills: [
      Language.Typescript,
      Language.JavaScript,
      Language.CSS,
      Language.HTML,
      Language.R,
      Technology.Tidyverse,
      Technology.React,
      Technology.Firebase,
      Technology.Git,
      OtherSkill.TechnicalCommunication,
    ],
  });

  static readonly VirtualCloset: Project = new Project({
    name: "Virtual Closet",
    date: "Jan 2023 - Apr 2023",
    description: [
      "Users organize closets, individual pieces of clothing, and outfits to track their style",
      "Practiced imperative UI development with Java Swing",
      "Leveraged Java's inherant OOP to enforce SOLID design principles",
      "Has 100% model LOC test coverage to ensure a bug-free user experience",
      "Created UML diagrams for both the model and user interface class structures",
      "Term project for CPSC 210 (Software Construction) at UBC",
    ],
    links: [
      {
        link: "https://github.com/CallumMackenzie/VirtualCloset",
        name: "Virtual Closet",
      },
    ],
    imageBasePath: "/img/virtualcloset/",
    images: [
      "home.png",
      "closets.png",
      "clothing.png",
      "outfit.png",
      "search.png",
      "package-diagram.png",
    ],
    skills: [
      Language.Java,
      Technology.Git,
      OtherSkill.OOP,
      OtherSkill.TestDrivenDevelopment,
      OtherSkill.DesignPatterns,
      OtherSkill.TechnicalCommunication,
      OtherSkill.FunctionalProgramming,
    ],
  });

  static readonly ThinkTech: Project = new Project({
    name: "Deloitte ThinkTECH",
    date: "Sep 2022 - Nov 2022",
    description: [
      "Created for the Deloitte ThinkTECH business case competition",
      "Improved technical communication by presenting to 100+ individuals at the Deloitte summit building in Vancouver",
      "Safely managed sensetive medical forms with cryptographic principles",
      "Integrated online form APIs to track information",
      "Set up webhooks to quickly notify and store input data",
      "Placed top 4 of 160+ candidates",
    ],
    links: [],
    imageBasePath: "/img/thinktech/",
    images: ["title.png", "impl.png", "dataflow.png"],
    skills: [
      Language.Typescript,
      Language.CSS,
      Language.HTML,
      Technology.AWS,
      Technology.React,
      Technology.Git,
      OtherSkill.TechnicalCommunication,
    ],
  });

  static readonly ExviFitness: Project = new Project({
    name: "Exvi Fitness",
    date: "Dec 2021 - Jun 2022",
    description: [
      "Serverless backend android and desktop fitness tracking app",
      "Used AWS for hosting, database, cloud functions, and a RESTful API",
      "Created user system from scratc with dynamic salting and hashing, and two factor authentication",
      "Implemented custom serialization scheme for quick and accurate data saving",
      "Leveraged Java and Kotlin together via JVM for cloud and client code",
    ],
    links: [
      {
        link: "https://camackenzie.com/ExviPosterReport.pdf",
        name: "Poster Report",
      },
      { link: "https://github.com/CallumMackenzie/exvi-client", name: "Exvi" },
    ],
    imageBasePath: "/img/exvi/",
    images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
    skills: [
      Language.Kotlin,
      Language.Java,
      Language.Typescript,
      Technology.AWS,
      Technology.Gradle,
      Technology.Maven,
      Technology.JetpackCompose,
      Technology.GitHubActions,
      Technology.Git,
      OtherSkill.OOP,
      OtherSkill.UIUX,
      OtherSkill.DesignPatterns,
      OtherSkill.TechnicalCommunication,
      OtherSkill.Android,
      OtherSkill.CICD,
      OtherSkill.Linux,
    ],
  });

  static readonly RenderingEngines: Project = new Project({
    name: "Rendering Engines",
    date: "Feb 2021 - Dec 2023",
    description: [
      "A series of 3D & 2D rendering engines created from scratch",
      "Implemented the entire render pipeline to draw to a console window with ASCII",
      "Used OpenGL bindings in various languages to utilize GPU power",
      "Implemented in C++ (with CMake), Java, Rust (Desktop & WASM), and Typescript (WebGL)",
      "Used PBR techniques, a variety of light types, specular/diffuse/ambient lighting, and normal mapping",
      "Implemented linear algebra libraries for quick transformation calculations",
    ],
    links: [
      {
        link: "https://github.com/CallumMackenzie/IngeniumLatte",
        name: "Java",
      },
      {
        link: "https://github.com/CallumMackenzie/kvasir",
        name: "C++ with physics & multiple platforms",
      },
      {
        link: "https://github.com/CallumMackenzie/Ingenium",
        name: "C++ 2D & 3D with lua scripting",
      },
      {
        link: "https://github.com/CallumMackenzie/IngeniumWeb",
        name: "Typescript",
      },
      { link: "https://github.com/CallumMackenzie/charengine", name: "Rust" },
      {
        link: "https://github.com/CallumMackenzie/RayTracingTest",
        name: "Raytracer",
      },
    ],
    imageBasePath: "/img/render/",
    images: [
      { src: "ingeniumlatte.png", desc: "Java" },
      { src: "ts.png", desc: "Typescript" },
      { src: "text.jpeg", desc: "C++ (text rendering)" },
      { src: "cards.png", desc: "Java with multiple render views" },
      { src: "browser.png", desc: "Typescript" },
      { src: "ingenium.png", desc: "C++ (OpenGL)" },
    ],
    skills: [
      Language.C,
      Language.Cpp,
      Language.Typescript,
      Language.Java,
      Language.Rust,
      Technology.OpenGL,
      Technology.WASM,
      Technology.CMake,
      Technology.Git,
      OtherSkill.Linux,
      OtherSkill.OOP,
    ],
  });

  static readonly Nexus: Project = new Project({
    name: "Nexus",
    date: "Jan 2022",
    description: [
      "Created with Windows WPF, .NET, and C#",
      "A center for common actions which I used frequently such as wallpapers and apps",
      "Allowed animated wallpapers in the form of GIFs or MP4s to be set",
      "Let users launch single apps, groups, or all",
      "Allowed disabling of certain Microsoft tracking features",
    ],
    links: [
      {
        link: "https://github.com/CallumMackenzie/Nexus",
        name: "GitHub Repository",
      },
    ],
    imageBasePath: "/img/nexus/",
    images: ["homepage.PNG", "desktop.PNG", "desktop2.PNG"],
    skills: [Language.CSharp, Technology.DotNet, OtherSkill.UIUX],
  });

  static readonly ClassificationOfHeartDisease = new Project({
    name: "Classification of Heart Disease",
    date: "Feb 2023 - Apr 2023",
    description: [
      "Trained KNN classification model on whether patients are likely to have heart disease",
      "Used R and Jupyter notebook",
      "Created data visualizations for ease of understanding",
      "Performed exploratory data analysis (EDA) to give insights to variable selection",
      "Researched possible links between variables",
      "Created step-by-step report with rationale, and formed a conclusion based on data",
    ],
    links: [
      {
        link: "https://github.com/CallumMackenzie/dsci100-group-project/blob/fix-edits/final.ipynb",
        name: "Report",
      },
      {
        link: "https://github.com/CallumMackenzie/dsci100-group-project/",
        name: "GitHub Repository",
      },
    ],
    imageBasePath: "/img/dsci100/",
    images: ["ecg.png", "scatter.png", "accuracy.png"],
    skills: [
      Language.R,
      Technology.AIML,
      Technology.Tidyverse,
      Technology.Jupyter,
      Technology.Git,
      OtherSkill.TechnicalCommunication,
    ],
  });

  static readonly All: Array<Project> = [
    this.Callumployed,
    this.FindMyForce,
    this.Gregor,
    this.Fitnet,
    this.Drone,
    this.Vitalert,
    this.VirtualCloset,
    this.ClassificationOfHeartDisease,
    this.ThinkTech,
    this.ExviFitness,
    this.RenderingEngines,
    this.Nexus,
  ];

  // Returns all projects using the given skill
  static withSkill(skill: Skill | undefined): Array<Project> {
    if (skill === undefined) return [];
    let projects: Array<Project> = [];
    for (let i = 0; i < this.All.length; ++i) {
      if (this.All[i].skills.includes(skill)) {
        projects = projects.concat(this.All[i]);
        continue;
      }
    }
    return projects;
  }

  // Returns all skills used in projects that the given skill is also used
  static skillsUsedWith(skill: Skill | undefined): Array<Skill> {
    if (skill === undefined) return [];
    const projectsUsingSkill = this.withSkill(skill);
    let skills = new Set<Skill>();
    projectsUsingSkill.forEach((project) =>
      project.skills.forEach((pSkill) => skills.add(pSkill)),
    );
    skills.delete(skill);
    return Array.from(skills);
  }

  name: string;
  date: string;
  description: Array<string>;
  links: Array<{ name: string; link: string }>;
  imageBasePath: string;
  images: Array<{ desc: string; src: string } | string>;
  skills: Array<Skill>;

  private constructor(args: {
    name: string;
    date: string;
    description: Array<string>;
    links: Array<{ name: string; link: string }>;
    imageBasePath: string;
    images: Array<{ desc: string; src: string } | string>;
    skills: Array<Skill>;
  }) {
    this.name = args.name;
    this.date = args.date;
    this.description = args.description;
    this.links = args.links;
    this.imageBasePath = args.imageBasePath;
    this.images = args.images;
    this.skills = args.skills;
  }

  public urlHash = (): string => {
    return `#${this.name.replace(/\s+/g, "").toLowerCase()}`;
  };
}

const currentYear = (): number => new Date().getFullYear();

export const lastYearInDateRange = (date: string): number => {
  const years = (date.match(/\b(?:19|20)\d{2}\b/g) ?? []).map(Number);
  if (/present|current/i.test(date)) years.push(currentYear());
  return years.length === 0 ? 0 : Math.max(...years);
};

export const skillUsageStats = (
  skill: Skill,
): { usageCount: number; weightedUsageCount: number; lastUsedYear: number } => {
  const projects = Project.withSkill(skill);
  const roles = EmploymentRole.withSkill(skill);
  const years = projects
    .map((project) => lastYearInDateRange(project.date))
    .concat(roles.map((role) => lastYearInDateRange(role.dates)));
  const lastUsedYear = years.length === 0 ? 0 : Math.max(...years);
  const usageCount = projects.length + roles.length;
  return {
    usageCount,
    weightedUsageCount: projects.length + roles.length * 3,
    lastUsedYear,
  };
};

export const sortSkillsByUsage = (skills: Array<Skill>): Array<Skill> =>
  [...skills].sort((a, b) => {
    const aStats = skillUsageStats(a);
    const bStats = skillUsageStats(b);
    return (
      bStats.weightedUsageCount - aStats.weightedUsageCount ||
      bStats.usageCount - aStats.usageCount ||
      bStats.lastUsedYear - aStats.lastUsedYear ||
      a.name.localeCompare(b.name)
    );
  });
