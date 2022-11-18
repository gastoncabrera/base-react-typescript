interface BtnLinkProps {
  title: String ,
  path: string
}

function ButtonLink({ title, path }: BtnLinkProps): JSX.Element {
  return <li className="text-center py-4 hover:bg-gray-700">
    <a href={path}>
      {title}
    </a>
  </li>;
}

export default ButtonLink
