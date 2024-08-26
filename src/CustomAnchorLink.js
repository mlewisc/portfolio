export default function CustomAnchorLink({ href, children, ...props }) {
  const path = window.location.href;
  console.log(path);
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
