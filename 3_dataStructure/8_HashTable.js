class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	// 1.
	set(key, value) {
		let i = this._hash(key);
		if (!this.keyMap[i]) {
			this.keyMap[i] = [];
		}
		this.keyMap[i].push([key, value]);
	}

	// 2.
	get(key) {
		let i = this._hash(key);
		if (this.keyMap[i]) {
			for (let j = 0; j < this.keyMap[i].length; j++) {
				if (this.keyMap[i][j][0] === key) {
					return this.keyMap[i][j][1];
				}
			}
		}
		return undefined;
	}

	// 3.
	keys() {
		let keyArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {	
            if (this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // no duplicate
                    if (!keyArr.includes(this.keyMap[i][j][0])){
                        keyArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
		}
		return keyArr;
	}

	// 4. 其實 values 跟 keys 邏輯幾乎一樣，只差輸出[1]
	values() {
		let valArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {	
            if (this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // no duplicate
                    if (!valArr.includes(this.keyMap[i][j][1])){
                        valArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
		}
		return valArr;
	}
}

/*
    1.
*/
let ht = new HashTable();
ht.set("hi", "bye");
ht.set("dog", "cute");
ht.set("cat", "cute");
ht.set("mouse", "cute2");
// console.log(ht);

/*
    2.
*/
// let d = ht.get("hi");
// console.log(d);

/*
    3. 4.
*/
console.log(ht.keys())
// console.log(ht.values())
