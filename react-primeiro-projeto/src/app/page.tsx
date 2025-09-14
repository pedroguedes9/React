"use client"

const Subtitle = ({label} : {label:string}) => {
  return (
    <p>{label}</p>
  );
}

const Title = ({label} : {label:string}) => {
  return (
    <h1 className="font-bold text-2xl">{label}</h1>
  );
}

const Header = ({title, subtitle} : {title: string, subtitle: string}) =>  {
  return (
    <header>
      <Title label={title}/>
      <Subtitle label={subtitle}/>
    </header>
  );
}

function Page() {
const pageInfo = {
  title: "Título maroto",
  subtitle: "Suabsfjaldjo"
};
  return (
    <div className="container mx-auto " >
      <Header title={pageInfo.title} subtitle={pageInfo.subtitle} />
    </div>
  );
}
export default Page
