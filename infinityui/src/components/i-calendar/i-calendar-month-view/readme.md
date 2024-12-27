# i-calendar-month-view



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute       | Description | Type                                                                          | Default     |
| --------------------- | --------------- | ----------- | ----------------------------------------------------------------------------- | ----------- |
| `color`               | `color`         |             | `"danger" \| "default" \| "primary" \| "secondary" \| "success" \| "warning"` | `'default'` |
| `handleDateSelection` | --              |             | `(date: string) => void`                                                      | `undefined` |
| `maxDate`             | `max-date`      |             | `string`                                                                      | `undefined` |
| `minDate`             | `min-date`      |             | `string`                                                                      | `undefined` |
| `monthInView`         | `month-in-view` |             | `number`                                                                      | `undefined` |
| `readOnly`            | `read-only`     |             | `boolean`                                                                     | `undefined` |
| `selected`            | `selected`      |             | `string`                                                                      | `undefined` |
| `yearInView`          | `year-in-view`  |             | `number`                                                                      | `undefined` |


## Dependencies

### Used by

 - [i-calendar](..)

### Depends on

- [i-button](../../i-button)

### Graph
```mermaid
graph TD;
  i-calendar-month-view --> i-button
  i-calendar --> i-calendar-month-view
  style i-calendar-month-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with InfinityUI*
