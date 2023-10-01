# Updating Arrays in State

Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in store.

---

| | avoid (mutates the array) | prefer (returns a new array) |
| --- | --- | --- |
| adding | `push`, `unshift` | `concat`, `[...arr]` |
| removing | `pop`, `shift`, `splice` | `filter`, `slice` |
| replacing | `splice`, `arr[i] = ...` | `map` |
| sorting | `reverse`, `sort` | copy the array first |

---

> **Pitfall**
> 
> Unfortunately, `slice` and `splice` are named similarly but are very different: 
> 
> - `slice` lets you copy an array or a part of it.
> 
> - `splice` mutates the array (to insert or delete items).

---

To replace an item, create a new array with `map`.

---

```js
function handleClick() {
  const insertAt = 1; // Could be any index
  const nextArtists = [
    // Items before the insertion point:
    ...artists.slice(0, insertAt),
    // New item:
    { id: nextId++, name: name },
    // Items after the insertion point:
    ...artists.slice(insertAt)
  ];
  setArtists(nextArtists);
  setName('');
}
```

To insert an item at a particular position, you can use the `...` array spread syntax together with the `slice()` method.

---

Even if you copy an array, you can't mutate existing items inside of it directly.

This is because copying is shallow —— the new array will contain the same items as the original one.

So if you modify an object inside the copied array, you are mutating the existing state.

```js
const nextList = [...list];
nextList[0].seen = true; // Problem: mutates list[0]
setList(nextList);
```

Although, `nextList` and `list` are two different arrays, but `nextList[0]` and `list[0]` point to the same object.

So by changing `nextList[0].seen`, you are also changing `list[0].seen`. 

This is a state mutation, which you should avoid.

---

When updating nested state, you need to create copies that from the point where you want to update, and all the way up to the top level.

```js
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

const [myList, setMyList] = useState(initialList);

setMyList(myList.map(artwork => {
  if (artwork.id === artworkId) {
    // Create a *new* object with changes
    return { ...artwork, seen: nextSeen };
  } else {
    // No changes
    return artwork;
  }
}));
```

You can use `map` to substitute an old item with its updated version without mutation.

---

You can use Immer to keep your code concise.
