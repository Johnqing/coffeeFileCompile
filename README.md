coffee文件编译到其他文件夹
=================

*注意：*cfc.js请放在编译文件的根目录下

## 使用方法：
1. 修改cfc文件内
```
//public_dir：文件路径
//produce：编译到的目录
new CoffeeCompile({
	public_dir: '/src/www/front/',
	produce: 'js'
})
```
2. 修改cfc.bat
```
node cfc文件目录\cfc.js
```

