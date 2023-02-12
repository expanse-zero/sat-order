# Sat order
The sat order module provides the type, schema and functions required for using orders in the expanse project.

## The module exports the following:
- Order: the type created based on the order schema
- createOrder: a function to validate your order, and add default values
- orderScheme: the schema of the orders
- statusScheme: the schema for the order status - just makes sure its one of the enum values

## Testing
The test script uses vitest.

## Schema validation
Uses zod as a dependency.

## Install
```sh
npm i -S sat-order
```

## Contributors
<a href="https://github.com/expanse-zero/sat-order/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=expanse-zero/sat-order" />
</a>
