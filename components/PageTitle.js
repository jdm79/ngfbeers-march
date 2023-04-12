function PageTitle({ title }) {
  return (
    <h1 className="bg-[color:var(--bg-eggshell)] w-screen flex p-5 justify-center border-b-2 border-black">
      {title}
    </h1>
  );
}

export default PageTitle;
