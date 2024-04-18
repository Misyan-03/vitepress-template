/**
 * @name 判断是否为时间对象
 * @group 时间
 * @param value
 * @returns boolean
 * @example 
 * ```ts
 * isDate(new Date()) // true
 * isDate(new Date('2020-01-01')) // true
 * isDate('2020-01-01') // false
 * ```
 */
export const isDate = (value: any): value is Date => {
    return value instanceof Date && !isNaN(value.getTime())
}
