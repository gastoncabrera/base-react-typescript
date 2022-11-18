import ButtonLink from '../ButtonLink/ButtonLink';

interface NavbarProps {
  linkList: Array<{ title: String, path: string }>
}
function Navbar({ linkList }: NavbarProps): JSX.Element {
  return <>
    <nav>
      <ul className="w-full flex flex-col justify-center item-center">
        {linkList.map((item, index) =>
          <ButtonLink key={index} title={item.title} path={item.path} />
        )
        }
      </ul>
    </nav>
  </>;
}

export default Navbar