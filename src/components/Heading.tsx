type HeadingProps = {
  children: string;
};

export const Heading = (props: HeadingProps) => {
  return (
    <h1>
      {props.children} <span style={{ color: "red" }}>PESHAWAR</span>
    </h1>
  );
};
