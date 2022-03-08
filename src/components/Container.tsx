type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return (
    <div>
      <h1 style={props.styles}>Text content goes here</h1>
    </div>
  );
};
