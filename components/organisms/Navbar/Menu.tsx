import cx from 'classnames';
import Link from 'next/dist/client/link';

interface MenuProps {
    title: String;
    active?: boolean;
    href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = '/' } = props;

  const classTitle = cx({
    'nav-link': true,
    active,
  });

  return (
    <li className='nav-item my-auto'>
      <Link href={href}>
        <a className={classTitle} aria-current='page'>{title}</a>
      </Link>
    </li>
  );
}
