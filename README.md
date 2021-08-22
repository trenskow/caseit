@trenskow/caseit
----

A small library for changing the case of a string.

# Usage

    const caseit = require('caseit');
    
    const myCamelCase = caseit('my_camel_case', 'camel'); // myCamelCase;

You can convert from any format to any other format. Supported formats are.

 * `camel` - camelCase
 * `pascal` - PascalCase
 * `snake` - snake_case
 * `domain` - domain.case
 * `kebab` - kebab-case
 * `title` - Title Case
 * `http` - Http-Case

> Default format (if omitted) is `camel`.

# LICENSE

3-Clause BSD (see LICENSE).
