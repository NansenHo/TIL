# Currying - Reuse Parameter

```js
function uri(protocol, hostname, pathname) {
  return `${protocol}${hostname}${pathname}`;
}

const uri_youtube = uri("https://", "www.youtube.com", "/watch");
console.log(uri_youtube);
```

We can use currying to optimize the code above:

We can reuse the `protocol` parameter and set it to `'https://'`.

```js
function uri(protocol) {
  return function (hostname, pathname) {
    return `${protocol}${hostname}${pathname}`;
  };
}
const https_uri = uri("https://");

const url_youtube = https_uri("www.youtube.com", "/watch");

console.log(url_youtube);
```

This can be used to optimize **scenarios with repeated parameters**.
