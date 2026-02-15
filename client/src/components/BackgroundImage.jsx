export default function BackgroundImage ({photo}) {

    return (
        <div className='background-image'
      style={{
        backgroundImage:`url(${photo.urls.regular})`,
        backgroundSize: "cover"
      }}
     /> 
    );
}
    