export default function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li>
      <a className={path === href ? "active" : ""} href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
