**vitepress-ssg** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: isDate()

### 判断是否为时间对象

<a id="undefined" name="undefined"></a>

> **isDate**(`value`): `value is Date`

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` |  |

## 返回值类型

`value is Date`

boolean

## 方法名称

判断是否为时间对象

## 示例

```ts
isDate(new Date()) // true
isDate(new Date('2020-01-01')) // true
isDate('2020-01-01') // false
```

## 查看源码

[date/index.ts:13](https://github.com/Misyan-03/vitepress-template/blob/73a09b8ae33d9dd69c8bfde25db7705182967418/src/date/index.ts#L13)
