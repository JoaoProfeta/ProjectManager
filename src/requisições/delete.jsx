{nav1.map(({ to, name, id, key }) => {
    return (

      <li key={key} id={key}>
        <NavLink key={key}
          to={to}

          className={({ isActive }) =>
            isActive ? "active" : "link_style"
          }>
          {name}
        </NavLink>
      </li>

    );

  })}
  {logged && nav2.map(({ to, name, id, key }) => {
    return (

      <li key={key} id={key}>
        <NavLink key={key}
          to={to}
          className={({ isActive }) =>
            isActive ? "active" : "link_style"
          }>
          {name}
        </NavLink>
      </li>

    );

  })}
  {navLink.map(({ to, name, id, key }) => {
    return (

      <li key={key} id={key}>
        <NavLink key={key}
          to={to}
          className={({ isActive }) =>
            isActive ? "active" : "link_style"
          }>
          {name}
        </NavLink>
      </li>

    );

  })}