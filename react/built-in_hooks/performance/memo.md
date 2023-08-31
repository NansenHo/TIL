# memo

```tsx
import { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void;
}

function Search({ onChange }: SearchProps) {
  console.log("Search rendered!")
  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

// exported wrapped in memo 
export default memo(Search);
```

memo is a hook that is used for **performance** reasons.

what it does: 

1. it wraps the component that you're trying to export.
2. it intercepts the render of this component.
3. it checks if the props are different from one render to the next.
   it's just the onChange in this case.
   it will check if the onChange props is different from the previous render to this render.
   if it is, it's going to re-render the component.
   if it isn't, it's going to skip rendering the component.

some components we don't want to re-render them **unless some of the props changes**.
