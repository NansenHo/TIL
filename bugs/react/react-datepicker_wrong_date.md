# React-datepicker Wrong Date

## Bug 描述

有一个日期选择器（只选日期，不选几点钟），在选到第三次的时候，选中的日期就会自己增长一天。

比如，我选了 2023/10/10， 实际组件展示的数据是 2023/10/10，
2023/10/09，实际组件展示的数据是 2023/10/09，
2023/10/08，实际组件展示的数据是 2023/10/09。

## 解决过程

1. **熟悉 DatePicker 组件的写法**

   由于不熟悉 DatePicker 组件的写法，所以先去找了它的 Github 仓库，看看官方的使用用例。

   - [react-datepicker - Github](https://github.com/Hacker0x01/react-datepicker)
   - [react-datepicker - NPM](https://www.npmjs.com/package/react-datepicker)

   我发现并没有什么问题。

2. **通过打印日期，发现小小端倪**

   ```tsx
   // 并不是完整代码，只是包含了 Bug 相关逻辑的代码。
   export default function DateRange() {
     const [startDate, setStartDate] = useState<Date | null>(null);

     // 開始時刻を入力する
     function handleChangeStart(date: Date) {
       console.log(date, "original value");
       setStartDate(date);
     }

     console.log(startDate, "startDate");

     return (
       <DatePicker
         isClearable
         selected={startDate}
         onChange={handleChangeStart}
         locale={ja}
         dateFormat="yyyy/MM/dd"
         id={`start${id}`}
         customInput={
           <button
             className="customDateInputButton cursor-pointer h-[3rem]"
             style={{ width: `${width}rem` }}
           >
             {startDate?.toLocaleDateString("ja-JP", {
               year: "numeric",
               month: "2-digit",
               day: "2-digit",
             }) || "開始日時"}
           </button>
         }
       />
     );
   }
   ```

   通过打印 `original date` 和 `startDate`，

   ```bash
   Wed Oct 11 2023 00:00:00 GMT+0900 (Japan Standard Time) 'original value'
   Wed Oct 11 2023 09:00:00 GMT+0900 (Japan Standard Time) 'startDate'

   Tue Oct 10 2023 09:00:00 GMT+0900 (Japan Standard Time) 'original value'
   Tue Oct 10 2023 18:00:00 GMT+0900 (Japan Standard Time) 'startDate'

   Mon Oct 09 2023 18:00:00 GMT+0900 (Japan Standard Time) 'original value'
   Tue Oct 10 2023 03:00:00 GMT+0900 (Japan Standard Time) 'startDate'
   ```

   我发现每次 `startDate` 都比 `original date` 多 9 个小时。

   这样点击三次之后，就会多出来 27 个小时，最终 `startDate` 也就会在被选中的 `original date` 的基础上增加一天。

   我们选中的 `original date` 是 UTC 时间，日本在东 9 区，UTC 时间转成日本本地时间后，才 `setStartDate(date)`，

   所以 `startDate` 每次都要比实际选中的增加 9 个小时，选三次之后就会自增一天零三个小时。

   > 我也找到了 react-datepicker 仓库里的相关讨论：
   >
   > 相关 issue：[Hacker0x01 / react-datepicker - Function bound to onChange receives wrong date #226](https://github.com/Hacker0x01/react-datepicker/issues/226)

3. **选择解决方案**

    
