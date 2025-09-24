
export interface Skill {
	name: string,
	src?: string
}

// Skills


export class Language implements Skill {
	static readonly Typescript = new Language({ name: "Typescript", src: "typescript.svg" });
	static readonly Java = new Language({ name: "Java", src: "java.webp" });
	static readonly C = new Language({ name: "C", src: "c.png" });
	static readonly Cpp = new Language({ name: "C++", src: "cpp.png" });
	static readonly Rust = new Language({ name: "Rust", src: "rust.png" });
	static readonly R = new Language({ name: "R", src: "r.png" });
	// static readonly Python = new Language({ name: "Python", src: "python.png" });
	static readonly Kotlin = new Language({ name: "Kotlin", src: "kotlin.png" });
	static readonly JavaScript = new Language({ name: "JavaScript", src: "js.png" });
	static readonly HTML = new Language({ name: "HTML", src: "html5.svg.png" });
	static readonly CSS = new Language({ name: "CSS", src: "css.svg.png" });
	static readonly CSharp = new Language({ name: "C#", src: "csharp.svg.png" });
	static readonly Swift = new Language({ name: "Swift", src: "swift.png" });

	static readonly All: Array<Language> = Object.values(this).filter(x => x instanceof Language);

	name: string;
	src?: string;

	private constructor(args: Skill) {
		this.name = args.name;
		this.src = args.src;
	}
}

export class Technology implements Skill {
	static readonly Git = new Technology({ name: "Git", src: "git.png" });
	static readonly React = new Technology({ name: "React", src: "react.png" });
	static readonly AWS = new Technology({ name: "AWS", src: "aws.png" });
	static readonly Firebase = new Technology({ name: "Firebase", src: "firebase.png" });
	static readonly DotNet = new Technology({ name: ".NET", src: "dotnet.svg.png" });
	static readonly Maven = new Technology({ name: "Maven", src: "maven.png" });
	static readonly Gradle = new Technology({ name: "Gradle", src: "gradle.png" });
	static readonly Arduino = new Technology({ name: "Arduino", src: "arduino.png" });
	static readonly OpenGL = new Technology({ name: "OpenGL", src: "opengl.png" });
	static readonly WASM = new Technology({ name: "WebAssembly", src: "wasm.svg.png" });
	static readonly Jupyter = new Technology({ name: "Jupyter Notebook", src: "jupyter.png" });
	static readonly CMake = new Technology({ name: "CMake", src: "cmake.png" });
	// static readonly Make = new Technology({ name: "Make", src: "make.png" });

	static readonly All: Array<Technology> = Object.values(this).filter(x => x instanceof Technology);

	name: string;
	src?: string;

	private constructor(args: Skill) {
		this.name = args.name;
		this.src = args.src;
	}
};

export class OtherSkill implements Skill {
	static readonly Linux = new OtherSkill({ name: "Linux", src: "linux.svg" });
	static readonly Android = new OtherSkill({ name: "Android", src: "android.png" });
	static readonly OOP = new OtherSkill({ name: "OOP", src: "oop.png" });
	static readonly TestDrivenDevelopment = new OtherSkill({ name: "Test-Driven Development", src: "testdrivendev.png" });
	static readonly TechnicalCommunication = new OtherSkill({ name: "Technical Communication", src: "communicate.png" });
	static readonly DesignPatterns = new OtherSkill({ name: "Design Patterns", src: "blocks.png" });
	static readonly FunctionalProgramming = new OtherSkill({ name: "Functional Programming", src: "lambda.png" });
	static readonly UIUX = new OtherSkill({ name: "UI Design", src: "uiux.png" });
	static readonly CAD = new OtherSkill({ name: "CAD (Autodesk Fusion 360)", src: "f360.png" });
	static readonly PCBDesign = new OtherSkill({ name: "PCB Design", src: "pcb.png" });

	static readonly All: Array<OtherSkill> = Object.values(this).filter(x => x instanceof OtherSkill);

	name: string;
	src?: string;

	private constructor(args: Skill) {
		this.name = args.name;
		this.src = args.src;
	}
};

export const AllSkills: Array<Skill> = Language.All.concat(Technology.All).concat(OtherSkill.All);

// PROJECTS

export class Project {

	static readonly CMotion: Project = {
		name: "FITNET",
		date: "Feb 2025 - Current",
		description: [
			"A system of nodes placed across the body to read EMG and motion data in order to record and analyze movement",
			"Utilized ESP-IDF with C to work with the ESP32-S3 to integrate IMU, thermistor, and EMG sensor data",
			"Used ESP32-S3 Bluetooth Low Energy to connect data to IOS",
			"Created custom PCB with Autodesk Fusion360",
			"Designed power system providing +9V, -9V, 3.3V, 5V from 1S LIPO",
			"Integrated battery protection and charging into electronics design",
			// TODO: add more
			" *** More info to come *** ",
		],
		links: [],
		imageBasePath: "/img/fitnet/",
		images: ["pcbv1.jpeg", "emgdev1real.png"/*, "proto1.png"*/, "emgdev1render.png"],
		skills: [Language.C, Language.Swift, Technology.CMake, Technology.Git, Technology.Arduino, OtherSkill.PCBDesign, OtherSkill.CAD, OtherSkill.TechnicalCommunication]
	};

	static readonly Drone: Project = {
		name: "Drone from Scratch",
		date: "Apr 2022 - Aug 2024",
		description: [
			"Utilized a variety of low-level communication protocols such as SPI, PWM, I2C",
			"Researched components based on electrical requirements (FPGA vs microprocessor, voltages, PWM channels, camera interface)",
			"Designed custom chassis and elecrical diagram with Autodesk Fusion 360",
			"Ran no-std Rust on microprocessors for memory safety and speed",
			"Designing flight controller and remote-drone commincation protocols",
			"Creating IOS app to connect via bluetooth to ground station which communicates with drone",
			"Read a variety of sensor feeds on an embedded device (accelerometer, barometer, magnetometer, camera, ultrasonic)",
		],
		links: [{ link: "https://a360.co/3AnnJ8f", name: "CAD Model Link" },
		{ link: "https://github.com/CallumMackenzie/rc-plane", name: "GitHub Repository" }],
		imageBasePath: "/img/drone/",
		images: ["inside top.jpeg",
			"chassis.jpeg",
			"drone realistic angle.png",
			"drone realistic top.png",
			"circuit overview.png",
			"drone realistic bottom.png",
		],
		skills: [Language.C, Language.Cpp, Language.Rust, Technology.Arduino, OtherSkill.CAD, OtherSkill.Linux]
	};

	static readonly Vitalert: Project = {
		name: "VitAlert",
		date: "Jan 2024",
		description: [
			"Submission for NWHacks 2024, a 24 hour hackathon focusing on health",
			"Worked on collaborative coding skills with 3 group members",
			"Developed React skills with a responsive UI that adapts to screen size",
			"Utilized R for webscraping and data tidying",
			"Linked in APIs from several services"
		],
		links: [{ link: "http://vitalert.tech", name: "Live Demo" },
		{ link: "https://github.com/CallumMackenzie/vitalert", name: "GitHub Repository" }],
		imageBasePath: "/img/vitalert/",
		images: ["home.png", "login.png", "nutrient.png"],
		skills: [
			Language.Typescript,
			Language.JavaScript,
			Language.CSS,
			Language.HTML,
			Language.R,
			Technology.React,
			Technology.Firebase,
			Technology.Git,
			OtherSkill.TechnicalCommunication
		]
	};

	static readonly VirtualCloset: Project = {
		name: "Virtual Closet",
		date: "Jan 2023 - Apr 2023",
		description: [
			"Users organize closets, individual pieces of clothing, and outfits to track their style",
			"Practiced imperative UI development with Java Swing",
			"Leveraged Java's inherant OOP to enforce SOLID design principles",
			"Has 100% model LOC test coverage to ensure a bug-free user experience",
			"Created UML diagrams for both the model and user interface class structures",
			"Term project for CPSC 210 (Software Construction) at UBC"
		],
		links: [{ link: "https://github.com/CallumMackenzie/VirtualCloset", name: "Virtual Closet" }],
		imageBasePath: "/img/virtualcloset/",
		images: ["home.png", "closets.png", "clothing.png", "outfit.png", "search.png", "package-diagram.png"],
		skills: [
			Language.Java,
			Technology.Git,
			OtherSkill.OOP,
			OtherSkill.TestDrivenDevelopment,
			OtherSkill.DesignPatterns,
			OtherSkill.TechnicalCommunication,
			OtherSkill.FunctionalProgramming,
		]
	};

	static readonly ThinkTech: Project = {
		name: "Deloitte ThinkTECH",
		date: "Sep 2022 - Nov 2022",
		description: [
			"Created for the Deloitte ThinkTECH business case competition",
			"Improved technical communication by presenting to 75+ individuals at the Deloitte summit building in Vancouver",
			"Safely managed sensetive medical forms with cryptographic principles",
			"Integrated online form APIs to track information",
			"Set up webhooks to quickly notify and store input data",
			"Placed top 4 of 32 teams, of which there was competitive participant selection"
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
		]
	};

	static readonly ExviFitness: Project = {
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
			{ link: "https://camackenzie.com/ExviPosterReport.pdf", name: "Poster Report" },
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
			OtherSkill.OOP,
			OtherSkill.UIUX,
			OtherSkill.DesignPatterns,
			OtherSkill.TechnicalCommunication,
			OtherSkill.Android,
			OtherSkill.Linux
		]
	};

	static readonly RenderingEngines: Project = {
		name: "Rendering Engines",
		date: "Feb 2021 - Dec 2021",
		description: [
			"A series of 3D & 2D rendering engines created from scratch",
			"Implemented the entire render pipeline to draw to a console window with ASCII",
			"Used OpenGL bindings in various languages to utilize GPU power",
			"Implemented in C++ (with CMake), Java, Rust (Desktop & WASM), and Typescript (WebGL)",
			"Used PBR techniques, a variety of light types, specular/diffuse/ambient lighting, and normal mapping",
			"Implemented linear algebra libraries for quick transformation calculations"
		],
		links: [{ link: "https://github.com/CallumMackenzie/IngeniumLatte", name: "Java" },
		{ link: "https://github.com/CallumMackenzie/kvasir", name: "C++ with physics & multiple platforms" },
		{ link: "https://github.com/CallumMackenzie/Ingenium", name: "C++ 2D & 3D with lua scripting" },
		{ link: "https://github.com/CallumMackenzie/IngeniumWeb", name: "Typescript" },
		{ link: "https://github.com/CallumMackenzie/charengine", name: "Rust" }],
		imageBasePath: "/img/render/",
		images: [{ src: "ingeniumlatte.png", desc: "Java" },
		{ src: "ts.png", desc: "Typescript" },
		{ src: "text.jpeg", desc: "C++ (text rendering)" },
		{ src: "cards.png", desc: "Java with multiple render views" },
		{ src: "browser.png", desc: "Typescript" },
		{ src: "ingenium.png", desc: "C++ (OpenGL)" }],
		skills: [
			Language.C,
			Language.Cpp,
			Language.Typescript,
			Language.Java,
			Language.Rust,
			Technology.OpenGL,
			Technology.WASM,
			Technology.CMake,
			OtherSkill.Linux,
			OtherSkill.OOP,
		]
	};

	static readonly Nexus: Project = new Project({
		name: "Nexus",
		date: "Jan 2022",
		description: [
			"Created with Windows WPF, .NET, and C#",
			"A center for common actions which I used frequently such as wallpapers and apps",
			"Allowed animated wallpapers in the form of GIFs or MP4s to be set",
			"Let users launch single apps, groups, or all",
			"Allowed disabling of certain Microsoft tracking features"
		],
		links: [{ link: "https://github.com/CallumMackenzie/Nexus", name: "GitHub Repository" }],
		imageBasePath: "/img/nexus/",
		images: ["homepage.PNG", "desktop.PNG", "desktop2.PNG"],
		skills: [
			Language.CSharp,
			Technology.DotNet,
			OtherSkill.UIUX,
		]
	});

	static readonly ClassificationOfHeartDisease = new Project({
		name: "Classification of Heart Disease",
		date: "Feb 2023 - Apr 2023",
		description: [
			"Trained classification model on whether patients are likely to have heart disease",
			"Used R and Jupyter notebook",
			"Created data visualizations for ease of understanding",
			"Performed preliminary data analysis to give insights to variable selection",
			"Researched possible links between variables",
			"Created step-by-step report with rationale, and formed a conclusion based on data",
		],
		links: [{ link: "https://github.com/CallumMackenzie/dsci100-group-project/blob/fix-edits/final.ipynb", name: "Report" },
		{ link: "https://github.com/CallumMackenzie/dsci100-group-project/", name: "GitHub Repository" }],
		imageBasePath: "/img/dsci100/",
		images: ["ecg.png", "scatter.png", "accuracy.png"],
		skills: [
			Language.R,
			Technology.Jupyter,
			Technology.Git,
			OtherSkill.TechnicalCommunication,
		]
	});

	static readonly All: Array<Project> = [
		this.CMotion,
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
		if (skill === undefined)
			return [];
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
		if (skill === undefined)
			return [];
		const projectsUsingSkill = this.withSkill(skill);
		let skills = new Set<Skill>();
		projectsUsingSkill.forEach(project =>
			project.skills.forEach(pSkill => skills.add(pSkill)));
		skills.delete(skill);
		return Array.from(skills);
	}

	name: string;
	date: string;
	description: Array<string>;
	links: Array<{ name: string, link: string }>;
	imageBasePath: string;
	images: Array<{ desc: string, src: string } | string>;
	skills: Array<Skill>;

	private constructor(args: {
		name: string,
		date: string,
		description: Array<string>,
		links: Array<{ name: string, link: string }>,
		imageBasePath: string,
		images: Array<{ desc: string, src: string } | string>,
		skills: Array<Skill>
	}) {
		this.name = args.name;
		this.date = args.date;
		this.description = args.description;
		this.links = args.links;
		this.imageBasePath = args.imageBasePath;
		this.images = args.images;
		this.skills = args.skills;
	}
}