# `datetime` 模块

`datetime` 是 Python 处理日期和时间的标准库。

## 获取当前日期和时间

```python
from datetime import datetime
now = datetime.now() # 获取当前datetime

print(now)
# 2015-05-18 16:28:07.198690

print(type(now))
# <class 'datetime.datetime'>
```

注意到 `datetime` 是模块，`datetime` 模块还包含一个 `datetime` 类。

如果仅导入 `import datetime`，则必须引用全名 `datetime.datetime`。

`datetime.now()` 返回当前日期和时间，其类型是 `datetime`。

## 获取指定日期和时间

要指定某个日期和时间，我们直接用参数构造一个 `datetime`：

```python
from datetime import datetime
dt = datetime(2015, 4, 19, 12, 20) # 用指定日期时间创建 datetime
print(dt)
# 2015-04-19 12:20:00
```

## 日期格式转换

### 将 `datetime` 转换为时间戳 `timestamp`

> 在计算机中，时间实际上是用数字表示的。
>
> `epoch time`，即 `1970年1月1日 00:00:00 UTC+00:00` 是一个特殊的时刻。
>
> 这个时刻被称为 “UNIX 纪元时间”，被用作计算机系统中时间的基准。
>
> `timestamp` 是相对于 `epoch time` 的秒数，也就是，从 `epoch time` 到某个特定时刻之间经过的秒数。
>
> 当我们需要表示一个具体的时刻时，可以使用时间戳。
>
> 时间戳可以是正数或负数，分别表示比 `epoch time` 晚或早的时刻。
>
> 这种方式的好处是可以在不同计算机系统和编程语言中统一表示时间，避免了时区和格式的问题，使时间的处理更加方便和可靠。

把一个 `datetime` 类型转换为 `timestamp` 只需要简单调用 `timestamp()` 方法：

```python
from datetime import datetime
dt = datetime(2015, 4, 19, 12, 20) # 用指定日期时间创建 datetime
dt.timestamp() # 把 datetime 转换为 timestamp
# 1429417200.0
```

注意 Python 的 `timestamp` 是一个浮点数，整数位表示秒。

某些编程语言（如 Java 和 JavaScript）的 `timestamp` 使用整数表示毫秒数，这种情况下只需要把 `timestamp` 除以 `1000` 就得到 Python 的浮点表示方法。

### `timestamp` 转换为 `datetime`

要把 `timestamp` 转换为 `datetime`，使用 `datetime` 提供的 `fromtimestamp()` 方法：

```python
from datetime import datetime
t = 1429417200.0
print(datetime.fromtimestamp(t))
# 2015-04-19 12:20:00
```

`timestamp` 是没有时区概念的，而 `datetime` 是有时区的。

上述转换将 `timestamp` 根据当前操作系统设定的时区，转成了本地时间。

也可以用 `utcfromtimestamp()` 直接将 `timestamp` 转成 UTC 标准时区时间：

```python
from datetime import datetime
t = 1429417200.0

print(datetime.fromtimestamp(t)) # 本地时间
# 2015-04-19 12:20:00

print(datetime.utcfromtimestamp(t)) # UTC时间
# 2015-04-19 04:20:00
```

### `str` 转换为 `datetime`

很多时候，用户输入的日期和时间是字符串，要处理日期和时间，首先必须把 `str` 转换为 `datetime`。

转换方法是通过 `datetime.strptime()` 实现，需要一个日期和时间的格式化字符串：

```python
from datetime import datetime
cday = datetime.strptime('2015-6-1 18:19:59', '%Y-%m-%d %H:%M:%S')
print(cday)
# 2015-06-01 18:19:59
```

字符串 `'%Y-%m-%d %H:%M:%S'` 规定了日期和时间部分的格式。

注意，转换后的 `datetime` 是没有时区信息的。

### `datetime` 转换为 `str`

如果已经有了 `datetime` 对象，要把它格式化为字符串显示给用户，就需要转换为 `str`。

转换方法是通过 `strftime()` 实现的，同样需要一个日期和时间的格式化字符串：

```python
from datetime import datetime
now = datetime.now()

print(now.strftime('%a, %b %d %H:%M'))
# Mon, May 05 16:28
```

> [`strftime()` 和 `strptime()` 函数的占位符](https://docs.python.org/3/library/datetime.html#strftime-strptime-behavior)

### `datetime` 加减

对日期和时间进行加减实际上就是把 `datetime` 往后或往前计算，得到新的 `datetime`。

在导入 `timedelta` 这个类后，直接使用加减 `+` 和 `-` 运算符：

```python
from datetime import datetime, timedelta
now = datetime.now()
now
# datetime.datetime(2015, 5, 18, 16, 57, 3, 540997)

now + timedelta(hours=10)
# datetime.datetime(2015, 5, 19, 2, 57, 3, 540997)

now - timedelta(days=1)
# datetime.datetime(2015, 5, 17, 16, 57, 3, 540997)

now + timedelta(days=2, hours=12)
# datetime.datetime(2015, 5, 21, 4, 57, 3, 540997)
```

### 本地时间转换为 UTC 时间

一个 `datetime` 类型有一个时区属性 `tzinfo`，默认为 `None`。

除非强行给 `datetime` 设置一个时区，否则无法区分这个 `datetime` 到底是哪个时区。

```python
from datetime import datetime, timedelta, timezone

tz_utc_8 = timezone(timedelta(hours=8)) # 创建时区UTC+8:00
now = datetime.now()
now

dt = now.replace(tzinfo=tz_utc_8) # 强制设置为UTC+8:00
dt

print(dt.strftime('%a, %b %d %H:%M'))
```

如果系统时区恰好是 `UTC+8:00`，那么上述代码就是正确的，否则，不能强制设置为 `UTC+8:00` 时区。

## 时区转换

1. 先通过 `utcnow()` 拿到当前的 UTC 时间

2. 再转换为任意时区的时间

```python
# 拿到UTC时间，并强制设置时区为UTC+0:00:
utc_dt = datetime.utcnow().replace(tzinfo=timezone.utc)
print(utc_dt)

# astimezone()将转换时区为北京时间:
bj_dt = utc_dt.astimezone(timezone(timedelta(hours=8)))
print(bj_dt)

# astimezone()将转换时区为东京时间:
tokyo_dt = utc_dt.astimezone(timezone(timedelta(hours=9)))
print(tokyo_dt)

# astimezone()将bj_dt转换时区为东京时间:
tokyo_dt2 = bj_dt.astimezone(timezone(timedelta(hours=9)))
print(tokyo_dt2)

# 将 tokyo_dt2 转换成美国本土东部标准时
us_dt = tokyo_dt2.astimezone(timezone(timedelta(hours=-5)))
print(us_dt)
```

不是必须从 `UTC+0:00` 时区转换到其他时区，任何带时区的 `datetime` 都可以正确转换，例如上述 `bj_dt` 到 `tokyo_dt` 的转换。

> `datetime` 表示的时间需要时区信息才能确定一个特定的时间，否则只能视为本地时间。

如果要存储 `datetime`，最佳方法是将其转换为 `timestamp` 再存储，因为 `timestamp` 的值与时区完全无关。

## 练习

```python
import re
from datetime import datetime, timezone, timedelta

def to_timestamp(dt_str, tz_str):
    cday = datetime.strptime(dt_str, '%Y-%m-%d %H:%M:%S')
    zone = re.match(r'UTC([+-]\d{1,2}):(\d+)', tz_str)
    tz_hours = int(zone.group(1))
    tz_minutes = int(zone.group(2))

    # 计算时区偏移
    tz_offset = timezone(timedelta(hours=tz_hours, minutes=tz_minutes))

    # 使用时区信息将日期时间转换为时间戳
    dt = cday.replace(tzinfo=tz_offset)
    timestamp = dt.timestamp()
    return timestamp

# TEST
t1 = to_timestamp('2015-6-1 08:10:30', 'UTC+7:00')
assert t1 == 1433121030.0, t1

t2 = to_timestamp('2015-5-31 16:10:30', 'UTC-09:00')
assert t2 == 1433121030.0, t2

print('ok')
```
