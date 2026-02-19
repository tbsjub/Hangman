function TheMan({ WrongCount }) {
  return (
    <div className="hangman-drawing">
     <div className="rope" />
     <div className="handle" />
     <div className="pole" />
     <div className="base" />


      {WrongCount > 0 && <div className="head" />}
      {WrongCount > 1 && <div className="body" />}
      {WrongCount > 2 && <div className="left-arm" />}
      {WrongCount > 3 && <div className="right-arm" />}
      {WrongCount > 4 && <div className="left-leg" />}
      {WrongCount > 5 && <div className="right-leg" />}
    </div>
  );
}


export default TheMan