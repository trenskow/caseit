@trenskow/caseit
----

A small library for changing the case of a string.

# Usage

Import using the following example.

````javascript
const caseit = require('@trenskow/caseit');
````

– or

````javascript
import caseit from '@trenskow/caseit'
````

## Converting

To convert from one case type to another use the following example.

```javascript
const myCamelCase = caseit('my_camel_case', 'camel'); // return 'myCamelCase';
```

You can convert from any format to any other format. Supported formats are.

 * `camel` - camelCase
 * `pascal` - PascalCase
 * `snake` - snake_case
 * `domain` - domain.case
 * `kebab` - kebab-case
 * `title` - Title Case
 * `http` - Http-Case

> Default format (if omitted) is `camel` (because it is the Javascript default).

## Detecting

To detect the casing of a string do as the following example.

````javascript
caseit.detect('MyCase'); // returns ['pascal']
caseit.detect('Hello'); // returns ['pascal', 'title', 'http']
````

## Getting the words

You can also get the lowercase variants of all the words in a string by using the following example.

````javascript
caseit.words('MyCase'); // returns ['my', 'case']
````

# LICENSE

3-Clause BSD (see LICENSE).
