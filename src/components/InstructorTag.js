import { TagWrapper, Emoji, Name, GoToGithub } from "../styles";
const InstructorTag = (props) => {
  return (
    <TagWrapper
      onClick={() => window.open(`https://github.com/${props.github}`)}
    >
      <Emoji>{instructor.emoji}</Emoji>
      <Name>{instructor.name}</Name>
      <GoToGithub>{instructor.github}</GoToGithub>
    </TagWrapper>
  );
};

export default InstructorTag;
