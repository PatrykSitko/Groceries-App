⌨

# [Front-end Project - Groceries](https://www.notion.so/c6bc7c1460134ecca7524fd5fa337fc9)

## Grocery

### Goal

The goal is to provide a simple but complete app for managing groceries of a company. Basically, a list that everyone in the company can contribute to or check.

### Requirements

- Add new items to the shopping list
- Mark an item as bought and specify its cost
- Browse through the shopping list
- Browse through the list of completed items
- View some kind of statistics (e.g. how much money was spent this month, how much each user spent, ...)
- The app has some kind of concept of groups or categories
- Remainders can be added to specific items (e.g using google calendar API)
- The app suggests recipes based on your shopping list
- if you think a feature is missing from this list to make the application complete, or that something should be done differently, reach out to us to discuss it

### Expectations

#### Design

- The app has a good UX and follows the given wireframes
- Nicely designed app (You're not a designer, but are expected to make basic decisions on that field while developing)

#### Release

- Public Github repo (if you prefer a private one, invite us (`StanBoyet` , `nicmosc`) on it beforehand)

#### Code Structure

- The project includes the described features but must be open to extension quickly (think about how to abstract common aspects [API calls, Logs, authenticated views, etc.])

#### Documentation

- Although code should be self explanatory, a good documentation explaining the most important aspect of the project is required.
- The documentation includes a point about how to run the project.
- Especially interesting:

  - Where do you think we could put more effort reviewing the code
  - Which parts are you especially proud about

#### Tools

- Whatever you need
- For the language you'll use JavaScript using any framework of your preference (use what you're the most efficient with, through we <b>strongly encourage</b> the use of React since we use it internally).

#### Bonus

- Hosted project

  - Heroku or other (if you need a paid tier, ask us to create one for you and to invite you in)

### Notes

if you have any questions regarding the project (design/engineering decisions ect.) let us know!

### Wireframes

![product list display](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9e528bb6-762b-4874-adde-5922d5fcec5c/untitled?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45LLBVSGSE%2F20191018%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191018T124137Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcetQBHqK3QNhnwK1XkPiGQEsXxwnjpzzExJN7Wsgq0AIgHScOyFkj%2B3G4Fcrn3pPVvI%2BdsGxvWuKUVuWWrMs0fzYq4wMIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzQ1NjcxNDkzNzAiDAa5cXZAteXWWXRB%2Byq3A%2Bt5WPNsVcivhJkDubdJQfEAbqDEhmA1GNLiUTLsxof0QXRiw3dhWIi37Z87k4dhkT9IY%2B6kI6U1F0D68i2toy9ADCqvkmy8Jh13Ye%2FNBFJr57Of60K0Gj7JyaCwLoz%2FKG4WqQAE5qa%2BWfE%2FgIhIkaDpjZ181cUOmSIRIuoFyD0QvUhtam8FmozKltYCjmgnB5Fp9hehIOLRqmeagzNVUrXbOH1G3z3QXP1iF4OqYNpoaCvTPwbGgEEhdRnEa7L8pKkKbw1dIf%2FPdBeakrwLbOjJu5SQBxwBWmAC%2BnT1cePNnme3B74S3qF6HwihMkkeE0JytJ%2BF%2FL4VbAVKTP6R1H%2Byke%2Fn0pMWCw802HVyuNM3lncUbXtCBPZFJNK%2FmHG%2FvNQhsXHuuJEVT9IvN70I971nRa2fQDvFWWujqh1P0qAQKXPkIwOqwQp26NyhMBXbk325sBM77KVhODps2dXjkkXJ8%2BPFUqjxnW%2B2FffHpRZUe5PqjeEcodlFbNaFF3zK3rai36FJoTmqCWc6zFlqadjVORAxi5gQnToHlzME8fgjSLmeSrYmSPU%2BrmrG5i85lH11SCx8%2BCMwrtGm7QU6tAFcWPFWiKMSN7DGWSn8X%2FIgU7shucfWHVZyRnpynyWxKfI2jbBC%2FRzjJ8TIpsmBi2nKJPpoyQ%2FZE9GcOH0RtKZ6j8Q5%2BkhitPEKRxDbF7oijj7COPa08oAJKVvDHG%2Bkp%2FEoqgKgQvZgwNcaiOwdZ%2FGzxbEszd%2FF89ihs6HMxroj5BrH6NER5z9%2BwOLC%2Fb60Pe2c%2BC84WFLXJzldhXPZlR%2BxCcCv0L8nnC1YKq4%2F54jOT7BCsS0%3D&X-Amz-Signature=18b6d70f12f0ae6888a898fcfafe63009ae709a4fd7794b56b95c248b4f74c6e&X-Amz-SignedHeaders=host)

![product list display](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e64dbf88-950d-4ed6-8b43-ffe8d8924d91/untitled?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45LLBVSGSE%2F20191018%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191018T124137Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcetQBHqK3QNhnwK1XkPiGQEsXxwnjpzzExJN7Wsgq0AIgHScOyFkj%2B3G4Fcrn3pPVvI%2BdsGxvWuKUVuWWrMs0fzYq4wMIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzQ1NjcxNDkzNzAiDAa5cXZAteXWWXRB%2Byq3A%2Bt5WPNsVcivhJkDubdJQfEAbqDEhmA1GNLiUTLsxof0QXRiw3dhWIi37Z87k4dhkT9IY%2B6kI6U1F0D68i2toy9ADCqvkmy8Jh13Ye%2FNBFJr57Of60K0Gj7JyaCwLoz%2FKG4WqQAE5qa%2BWfE%2FgIhIkaDpjZ181cUOmSIRIuoFyD0QvUhtam8FmozKltYCjmgnB5Fp9hehIOLRqmeagzNVUrXbOH1G3z3QXP1iF4OqYNpoaCvTPwbGgEEhdRnEa7L8pKkKbw1dIf%2FPdBeakrwLbOjJu5SQBxwBWmAC%2BnT1cePNnme3B74S3qF6HwihMkkeE0JytJ%2BF%2FL4VbAVKTP6R1H%2Byke%2Fn0pMWCw802HVyuNM3lncUbXtCBPZFJNK%2FmHG%2FvNQhsXHuuJEVT9IvN70I971nRa2fQDvFWWujqh1P0qAQKXPkIwOqwQp26NyhMBXbk325sBM77KVhODps2dXjkkXJ8%2BPFUqjxnW%2B2FffHpRZUe5PqjeEcodlFbNaFF3zK3rai36FJoTmqCWc6zFlqadjVORAxi5gQnToHlzME8fgjSLmeSrYmSPU%2BrmrG5i85lH11SCx8%2BCMwrtGm7QU6tAFcWPFWiKMSN7DGWSn8X%2FIgU7shucfWHVZyRnpynyWxKfI2jbBC%2FRzjJ8TIpsmBi2nKJPpoyQ%2FZE9GcOH0RtKZ6j8Q5%2BkhitPEKRxDbF7oijj7COPa08oAJKVvDHG%2Bkp%2FEoqgKgQvZgwNcaiOwdZ%2FGzxbEszd%2FF89ihs6HMxroj5BrH6NER5z9%2BwOLC%2Fb60Pe2c%2BC84WFLXJzldhXPZlR%2BxCcCv0L8nnC1YKq4%2F54jOT7BCsS0%3D&X-Amz-Signature=f7b5de1d6587eec0ef38c08387eeeea7a0cff50ec42582f149ce8bf01db45bbe&X-Amz-SignedHeaders=host)

![list display add purchased product](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c7357451-33b9-4ce0-8881-16fc96d3ee98/untitled?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45GAVQ7AL7%2F20191027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191027T122913Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCxPDnvCRfWwFZI%2FniKC5%2BLPmtlXV7YFcG56cUhC2C11gIhANQrZf4rQJ5zgx29wuEagdnN1IKO21sWg2z3ktpXgY4pKvwDCHEQABoMMjc0NTY3MTQ5MzcwIgy7Em5aOUnHhReouYsq2QO%2F%2FJKFJoEqmU7aEE39eifCpE%2BzQLny38Azg8N1qvc4NtqdBU%2FUOFi8H3YwZGfRGJ69SZeltAH1juywmzc4WApLAvvdnSYKTo7HG%2FXjT6pQM%2FtSZepk8GsGCxTnayGh9uHR4PFXLuceo%2B86Y7ECr9jZxPf94zbN4Bg%2B9IUgvY%2BFW5khiga3%2FwU1xu33WqO9eimTLIXY2faiu%2Fviov34zuPANU63jDaP8Z5CM3nJ4HGUYKJC2HCqc%2BOpDY5oKgpWmRgy%2B9T4K9Qtuk6OYXghtN1puLeTrcZ%2BqgARtnnt0RiS04pjsLVsc29coqtG1M1ZjWflPFgLXKzNU7I1e8fPs2vIfYo3yZyQMIU9tN6gDahMBbYyR%2FbzB8r3ZFmGYJ1PEfAOmMvWHCp3z%2BIJI7vWXhNax60kWGP9rnZKtfkWsy0IuQaOS6qzryHriThPOP2y4sH%2FQ5yqltxondXDriMhDFTpYC3jFMBQ1yurRmB1PyXvUIU803v%2BmF6szUPt1RDfsVgnAAovjWspm9y53VKigdkIRq91m6g3HrIHnWUjoWnHG9viwGzwxhnq%2Bv2Vo2YVtkSviZX18RLLXfzkMvMRgycdzvNjRbaz4A2heA4Q5o1tMgtF0W22ELUGiTCojtXtBTqzAQREKcBYPWXMcq9gMMWJY9VTQW293iDIOFQIt8ibM%2BcqFSK4oKzG3nA19vuJs1hqDTQKTeHckDSQB5NDYGOEiEf1Ulazyz%2FPWF0rD2060g1AjntqlXXjSRruOEUuGClyRkl2ZzLttPFeMQoygcSQzx38Vr%2FxQQYVqqgshVSHxEk9zA53Dl38MG3bs5Fx6bw9LEbmmhSBpjeb%2BWYlh7HFIJBNBQXb4Eq%2BUPicsK%2BjXl9GI1Ou&X-Amz-Signature=50dcb5d5e80760f5041a92bef9bb0de78970c0fbbde4bfd2540b72c8780814a0&X-Amz-SignedHeaders=host)

![stats display](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/59d3d3ed-d510-4f92-bfa6-fc0b55b84992/untitled?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45LLBVSGSE%2F20191018%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191018T124137Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcetQBHqK3QNhnwK1XkPiGQEsXxwnjpzzExJN7Wsgq0AIgHScOyFkj%2B3G4Fcrn3pPVvI%2BdsGxvWuKUVuWWrMs0fzYq4wMIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzQ1NjcxNDkzNzAiDAa5cXZAteXWWXRB%2Byq3A%2Bt5WPNsVcivhJkDubdJQfEAbqDEhmA1GNLiUTLsxof0QXRiw3dhWIi37Z87k4dhkT9IY%2B6kI6U1F0D68i2toy9ADCqvkmy8Jh13Ye%2FNBFJr57Of60K0Gj7JyaCwLoz%2FKG4WqQAE5qa%2BWfE%2FgIhIkaDpjZ181cUOmSIRIuoFyD0QvUhtam8FmozKltYCjmgnB5Fp9hehIOLRqmeagzNVUrXbOH1G3z3QXP1iF4OqYNpoaCvTPwbGgEEhdRnEa7L8pKkKbw1dIf%2FPdBeakrwLbOjJu5SQBxwBWmAC%2BnT1cePNnme3B74S3qF6HwihMkkeE0JytJ%2BF%2FL4VbAVKTP6R1H%2Byke%2Fn0pMWCw802HVyuNM3lncUbXtCBPZFJNK%2FmHG%2FvNQhsXHuuJEVT9IvN70I971nRa2fQDvFWWujqh1P0qAQKXPkIwOqwQp26NyhMBXbk325sBM77KVhODps2dXjkkXJ8%2BPFUqjxnW%2B2FffHpRZUe5PqjeEcodlFbNaFF3zK3rai36FJoTmqCWc6zFlqadjVORAxi5gQnToHlzME8fgjSLmeSrYmSPU%2BrmrG5i85lH11SCx8%2BCMwrtGm7QU6tAFcWPFWiKMSN7DGWSn8X%2FIgU7shucfWHVZyRnpynyWxKfI2jbBC%2FRzjJ8TIpsmBi2nKJPpoyQ%2FZE9GcOH0RtKZ6j8Q5%2BkhitPEKRxDbF7oijj7COPa08oAJKVvDHG%2Bkp%2FEoqgKgQvZgwNcaiOwdZ%2FGzxbEszd%2FF89ihs6HMxroj5BrH6NER5z9%2BwOLC%2Fb60Pe2c%2BC84WFLXJzldhXPZlR%2BxCcCv0L8nnC1YKq4%2F54jOT7BCsS0%3D&X-Amz-Signature=89eb1f190b1e1a8b096a616c6d9718890401aa5174e6fe6c6f152d3b5bb3fd49&X-Amz-SignedHeaders=host)

![recipes display](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bf4b88f8-ebb9-4392-95f9-97a417b2f2d0/untitled?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45LLBVSGSE%2F20191018%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191018T124137Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcetQBHqK3QNhnwK1XkPiGQEsXxwnjpzzExJN7Wsgq0AIgHScOyFkj%2B3G4Fcrn3pPVvI%2BdsGxvWuKUVuWWrMs0fzYq4wMIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzQ1NjcxNDkzNzAiDAa5cXZAteXWWXRB%2Byq3A%2Bt5WPNsVcivhJkDubdJQfEAbqDEhmA1GNLiUTLsxof0QXRiw3dhWIi37Z87k4dhkT9IY%2B6kI6U1F0D68i2toy9ADCqvkmy8Jh13Ye%2FNBFJr57Of60K0Gj7JyaCwLoz%2FKG4WqQAE5qa%2BWfE%2FgIhIkaDpjZ181cUOmSIRIuoFyD0QvUhtam8FmozKltYCjmgnB5Fp9hehIOLRqmeagzNVUrXbOH1G3z3QXP1iF4OqYNpoaCvTPwbGgEEhdRnEa7L8pKkKbw1dIf%2FPdBeakrwLbOjJu5SQBxwBWmAC%2BnT1cePNnme3B74S3qF6HwihMkkeE0JytJ%2BF%2FL4VbAVKTP6R1H%2Byke%2Fn0pMWCw802HVyuNM3lncUbXtCBPZFJNK%2FmHG%2FvNQhsXHuuJEVT9IvN70I971nRa2fQDvFWWujqh1P0qAQKXPkIwOqwQp26NyhMBXbk325sBM77KVhODps2dXjkkXJ8%2BPFUqjxnW%2B2FffHpRZUe5PqjeEcodlFbNaFF3zK3rai36FJoTmqCWc6zFlqadjVORAxi5gQnToHlzME8fgjSLmeSrYmSPU%2BrmrG5i85lH11SCx8%2BCMwrtGm7QU6tAFcWPFWiKMSN7DGWSn8X%2FIgU7shucfWHVZyRnpynyWxKfI2jbBC%2FRzjJ8TIpsmBi2nKJPpoyQ%2FZE9GcOH0RtKZ6j8Q5%2BkhitPEKRxDbF7oijj7COPa08oAJKVvDHG%2Bkp%2FEoqgKgQvZgwNcaiOwdZ%2FGzxbEszd%2FF89ihs6HMxroj5BrH6NER5z9%2BwOLC%2Fb60Pe2c%2BC84WFLXJzldhXPZlR%2BxCcCv0L8nnC1YKq4%2F54jOT7BCsS0%3D&X-Amz-Signature=1c50a743fc3b9b2b49afdb36febd6c7ed509b4a66994ca8a0e9ebca09c06f056&X-Amz-SignedHeaders=host)
