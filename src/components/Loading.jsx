const Loading = () => {

  return ( 
    <div style={{display: 'grid', placeItems: 'center', height: '100vh', backgroundColor: 'rgb(24, 24, 24)', width: '100vw'}}>
      <div className="lds-ripple"><div></div><div></div></div>
    </div>
  );
}

export default Loading;