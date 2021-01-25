import InstructorTag from "./components/InstructorTag.js";
import { AppWrapper } from "./components/styles.js";

const instrocturs = [
  {
    id: 1,
    Emoji: "🌚",
    Name: "Hamza",
    github: "DarthHamza",
  },
  {
    id: 2,
    Emoji: "🐥",
    Name: "Laila",
    github: "Lailz",
  },
  {
    id: 3,
    Emoji: "🦍",
    Name: "Hasan",
    github: "thehasanas",
  },
];

const App = () => {
  const instroctors = data.map((Instructor) => (
    <InstructorTag
      key={Instructor.id}
      name={Instructor.name}
      github={Instructor.github}
      emoji={Instructor.emoji}
    />
  ));
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      <div>{instroctors}</div>
    </AppWrapper>
  );
};

export default instrocturs;

{
  /* <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/DarthHamza`)}
      >
        <span className="Emoji">🌚</span>
        <span className="Name">Hamza</span>
        <span className="GoToGithub">Go to GitHub</span>
      </div>

      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/Lailz`)}
      >
        <span className="Emoji">🐥</span>
        <span className="Name">Laila</span>
        <span className="GoToGithub">Go to GitHub</span>
      </div>

      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/thehasanas`)}
      >
        <span className="Emoji">🦍</span>
        <span className="Name">Hasan</span>
        <span className="GoToGithub">Go to GitHub</span>
      </div> */
}
