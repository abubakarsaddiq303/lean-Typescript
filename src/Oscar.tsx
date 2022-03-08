type OscarProps = {
  children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
};
