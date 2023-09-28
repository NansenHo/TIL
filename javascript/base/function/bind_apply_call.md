# The differences between `bind` and `apply` and `call`

```js
// steven has a power bank.
const steven = {
	name: 'steven',
	phoneBattery: 70,
	powerBank: function (level) {
		this.phoneBattery += level
	}
}

const becky = {
	name: 'becky',
	phoneBattery: 15,
	reset: function () {
		this.phoneBattery = 15
	}
}

// The battery level of Steven's phone is now at 90 percent.
steven.powerBank(20)
console.log(steven.phoneBattery)

// The battery level of Becky's phone is now at 90 percent. 
// call()
steven.powerBank.call(becky, 75)
console.log(becky.phoneBattery)

becky.reset()
// apply()
steven.powerBank.apply(becky, [75])
console.log(becky.phoneBattery)

becky.reset()
// bind()
const chargerBeckyPhone = steven.powerBank.bind(becky)
chargerBeckyPhone(75)
console.log(becky.phoneBattery)
```