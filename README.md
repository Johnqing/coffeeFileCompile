coffee文件批量编译到其他文件夹
=================

*注意：*cfc.js请放在编译文件的根目录下

## 使用方法：
1. 修改cfc文件内
<pre>
//public_dir：文件路径
//produce：编译到的目录
new CoffeeCompile({
	public_dir: '/src/www/front/',
	produce: 'js'
})
</pre>
2. 修改cfc.bat
<pre>
node cfc文件目录\cfc.js
</pre>
3. 双击cfc.bat

