# 用 style-components 给一个组件写样式

[给组件写样式——style-components官方文档](https://styled-components.com/docs/basics#styling-any-component)

1. 你的组件要接受一个 `className` props。
2. 然后按照官网实例来写就好了
   ```javascript
   // 组件要接受一个 className
   const Link = ({ className, children }) => (
    <a className={className}>
        {children}
    </a>
    );

    // 用 styled(ComponentName)`style` 的写法
    const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
    `;

    render(
    <div>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
    </div>
    );
   ```
