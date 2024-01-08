# コード規範

## DRY - Don't Repeat Yourself

## カプセル化

## 読みやすさを最優先にする

## props のなかに一行しか入れない

props に一行を超える内容を渡す場合は、必ず外に抽出してから封装し、それから渡します。

```jsx
<CustomButton
  isLoading={isGetLoading}
  isActive={
    selectedMethod === searchMethod.initial
      ? false
      : selectedMethod === searchMethod.duration
      ? !error.branch && !error.date && inputData.receivedAtSince !== null
      : !error.branch &&
        !error.brand &&
        !error.frameNumber &&
        inputData.brand !== "" &&
        inputData.frameNumber !== ""
  }
/>
```

```js
const isSearchButtonActive = useMemo(() => {
  if (selectedMethod === searchMethod.initial) {
    return false;
  }

  const isValidDuration =
    !error.branch && !error.date && inputData.receivedAtSince !== null;

  const isValidBrandFNo =
    !error.branch &&
    !error.brand &&
    !error.frameNumber &&
    inputData.brand !== "" &&
    inputData.frameNumber !== "";

  return selectedMethod === searchMethod.duration
    ? isValidDuration
    : isValidBrandFNo;
}, [error, selectedMethod, inputData]);

<CustomButton isLoading={isGetLoading} isActive={isSearchButtonActive} />;
```

## `{}` を書くべきか

`if else`文法を使うと、ぜひ`{}`を一緒に使ってください。

よく以下のようなコードが見られます。

```js
if (glossId === undefined) setGlossErrorMessage("入力値が不正です");
else setGlossErrorMessage(null);
```

```js
if (inputData.glossId) query = { ...durationQuery, glossId };
else query = { ...durationQuery, recipientCode: newRecipientCode };
```

```js
if (e.target.value === "") {
  setIsShowDropDown(false);
} else {
  setIsShowDropDown(true);
}
```

```js
if (!videoRef.current) return;
if (!computeRef.current) return;
if (!finderRef.current) return;
if (props.isCameraPaused) return;
```

大括号がない場合、コードの構造が一目で明確ではなくなります。

視覚的に同じ条件分岐に属しているように見えるコードが実際にはそうでない場合、

ロジックエラーを引き起こす可能性があるだけでなく、コードを読む人の読解速度も低下することがあります。

もし短い書き方が求められると、`?.`や`分割代入`や`条件 (三項) 演算子`などを利用してください。

### `?.` & `分割代入` & `条件 (三項) 演算子`の使い分け

#### 代入操作の時に、`条件 (三項) 演算子`を使う

```js
const errorMessage = !glossId ? "入力値が不正です" : null;
setGlossErrorMessage(errorMessage);
```

```js
const { glossId } = inputData;

query = glossId
  ? { ...durationQuery, glossId }
  : { ...durationQuery, recipientCode: newRecipientCode };
```

```js
if (inputData.glossId) query = { ...durationQuery, glossId };
else query = { ...durationQuery, recipientCode: newRecipientCode };'
```

### ESLint

```json
{
  "rules": {
    "curly": ["error", "all"]
  }
}
```
