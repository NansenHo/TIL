# The second parameter `scheduler` of `effect`

## Description of Functionality

1. A function is passed as the second parameter of the `effect`, and it is commonly referred to as the `scheduler`.

2. The first parameter `fn` of the `effect` will be called upon initialization (first execution).

3. When the reactive object updates (`set`), the function `fn` will not be executed directly; instead, the `scheduler` will be invoked.

4. When the `runner` function is called, it will execute the function `fn` again.
