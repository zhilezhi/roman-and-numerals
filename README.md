# roman-and-numerals
> This is a tool for converting between Roman numerals and Arabic numerals.
> 这是一个罗马数字和阿拉伯数字互相转换的工具.
## 如何使用

###安装
```
npm i roman-and-numerals
```
* 或者
```
yarn add roman-and-numerals
```
### 使用方法
* 项目中引用
>```bazaar
> import {transNumber,checkRoman,transRoman} from 'roman-and-numerals'
>```

* 验证罗马数字是否合法
> ```
> checkRoman('IIII') //false
> checkRoman('IV') //true
> ```

* 罗马数字转换成数字
> ```
> transNumber('III') //3
> ```

* 数字转换成罗马数字
> ```
> transRoman(99) //XCIX
> ```
## 更新日志
### v1.0.0
* 增加罗马数字转换成数字
* 增加正则验证罗马数字是否合法
* 增加数字转换成罗马数字
