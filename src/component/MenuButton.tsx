import '../css/MenuButton.css';

const MenuButton = (name: string) => {
  return ( 
    <>
    <div className="MenuButton" key={name}>
      <a href={"#"+name}>{name}</a>
    </div>

    </>
  );
}

export default MenuButton;