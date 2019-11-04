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

![product list display](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9e528bb6-762b-4874-adde-5922d5fcec5c/untitled?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45AMGBVNUB%2F20191104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191104T100332Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDxEblfziBGnq8YHO3hkKdJAU7J2WDot2mvh0lejo4BYAIhAJc9GlOArH4w2PyjUTItaWeymPecDoGlTrfuBns7%2F0RwKvwDCEMQABoMMjc0NTY3MTQ5MzcwIgysM86VCScebsq6dOoq2QO4j5VIlVJnNYXi2XD6K%2F29%2FK8f8YYi%2Fo7SY0hP2t0wyuNM9CgC64veW%2B%2B4Zq%2B1EG9Wz%2B8y5ZqLLKzALmaEY1Zlvzdt%2BbSWXZo6KdBj2zWLW9NC%2BKuG%2Btgw1VNHjnH5zv64am2hSP1ku8cdfO5r93CUzWqCtg7CcqYySE79cGfHFhyt4RAsX6ZcKf9USRO1gsylnz0hYZgbwSJ5Pu5xYyuxGxz%2FAwqq0JoHoXpllHa7PUZCruUkgM%2Bsw9fzur%2Bco5seG3Tqb4%2BDSl%2F%2BBVWwkGeUtwaeukEJuNSYhfB3nbbsIUIDM8UrSBskOENkWNJOCDbzLwIYesBCSqL5keBrtt3uyZWm%2F2jMJrNQubFHLDzp%2B%2BSfIYWTfg4R%2ByDr%2B8j1S1fxYEBVgQRvqZHmL1tpFLBbnIaQq7tTGyPIUwZis4%2FCZx8sffXd04P6bYw9tN4ePEHuLMoRpOO0MXg8LzzFGxngPn1pyDD4DTFO8gzL3AP4R1ZCNmlUzVTGcFViiZ7D10eHR%2FKuvibuKIsYzT53YmgnH4Q28rVVGkGyAr2fPAgQEdzbQS%2BVY3FzW83bgm8SnQx9AsTRTXfbW83GpiK%2FEOvb9ZT1JzJcnh%2B5wqOtQk%2Bs0p8%2F%2Beb0875lIjDp2%2F%2FtBTqzAbo6KvOK5VVs9JrIKyHVQwERPwiTIL0yMYadcCptc7WJTrCUdsGrUHdXaCOUBPiuNP0j4UgADh0Di%2F9lbT9de7%2FJ2fvGO0GMdwmvKabgvWx%2F2ShOIjP5B5rZiNA%2FWXW2KSo8nruyJG3DVzI2340XFoMlmiO1eP12EHdaEo1ZkuoPzQTKXakA2jx%2FK8Nj5ZAIdnm%2Bz9QRfG6RiWLfLQP7sgjFZ9xLmSQOT%2BHcasvixOQDj14i&X-Amz-Signature=1cd000c90836b80946fcdf890070e5cfc9d65b5fc943735f0b3573da31acd807&X-Amz-SignedHeaders=host)

![product list display](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e64dbf88-950d-4ed6-8b43-ffe8d8924d91/untitled?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45AMGBVNUB%2F20191104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191104T100332Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDxEblfziBGnq8YHO3hkKdJAU7J2WDot2mvh0lejo4BYAIhAJc9GlOArH4w2PyjUTItaWeymPecDoGlTrfuBns7%2F0RwKvwDCEMQABoMMjc0NTY3MTQ5MzcwIgysM86VCScebsq6dOoq2QO4j5VIlVJnNYXi2XD6K%2F29%2FK8f8YYi%2Fo7SY0hP2t0wyuNM9CgC64veW%2B%2B4Zq%2B1EG9Wz%2B8y5ZqLLKzALmaEY1Zlvzdt%2BbSWXZo6KdBj2zWLW9NC%2BKuG%2Btgw1VNHjnH5zv64am2hSP1ku8cdfO5r93CUzWqCtg7CcqYySE79cGfHFhyt4RAsX6ZcKf9USRO1gsylnz0hYZgbwSJ5Pu5xYyuxGxz%2FAwqq0JoHoXpllHa7PUZCruUkgM%2Bsw9fzur%2Bco5seG3Tqb4%2BDSl%2F%2BBVWwkGeUtwaeukEJuNSYhfB3nbbsIUIDM8UrSBskOENkWNJOCDbzLwIYesBCSqL5keBrtt3uyZWm%2F2jMJrNQubFHLDzp%2B%2BSfIYWTfg4R%2ByDr%2B8j1S1fxYEBVgQRvqZHmL1tpFLBbnIaQq7tTGyPIUwZis4%2FCZx8sffXd04P6bYw9tN4ePEHuLMoRpOO0MXg8LzzFGxngPn1pyDD4DTFO8gzL3AP4R1ZCNmlUzVTGcFViiZ7D10eHR%2FKuvibuKIsYzT53YmgnH4Q28rVVGkGyAr2fPAgQEdzbQS%2BVY3FzW83bgm8SnQx9AsTRTXfbW83GpiK%2FEOvb9ZT1JzJcnh%2B5wqOtQk%2Bs0p8%2F%2Beb0875lIjDp2%2F%2FtBTqzAbo6KvOK5VVs9JrIKyHVQwERPwiTIL0yMYadcCptc7WJTrCUdsGrUHdXaCOUBPiuNP0j4UgADh0Di%2F9lbT9de7%2FJ2fvGO0GMdwmvKabgvWx%2F2ShOIjP5B5rZiNA%2FWXW2KSo8nruyJG3DVzI2340XFoMlmiO1eP12EHdaEo1ZkuoPzQTKXakA2jx%2FK8Nj5ZAIdnm%2Bz9QRfG6RiWLfLQP7sgjFZ9xLmSQOT%2BHcasvixOQDj14i&X-Amz-Signature=73e6b6d794c6fae3d4cf4ca5925f8b58880c2acb7c26b30a2b1bdcdaae356bde&X-Amz-SignedHeaders=host)

![list display add purchased product](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c7357451-33b9-4ce0-8881-16fc96d3ee98/untitled?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45AMGBVNUB%2F20191104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191104T100332Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDxEblfziBGnq8YHO3hkKdJAU7J2WDot2mvh0lejo4BYAIhAJc9GlOArH4w2PyjUTItaWeymPecDoGlTrfuBns7%2F0RwKvwDCEMQABoMMjc0NTY3MTQ5MzcwIgysM86VCScebsq6dOoq2QO4j5VIlVJnNYXi2XD6K%2F29%2FK8f8YYi%2Fo7SY0hP2t0wyuNM9CgC64veW%2B%2B4Zq%2B1EG9Wz%2B8y5ZqLLKzALmaEY1Zlvzdt%2BbSWXZo6KdBj2zWLW9NC%2BKuG%2Btgw1VNHjnH5zv64am2hSP1ku8cdfO5r93CUzWqCtg7CcqYySE79cGfHFhyt4RAsX6ZcKf9USRO1gsylnz0hYZgbwSJ5Pu5xYyuxGxz%2FAwqq0JoHoXpllHa7PUZCruUkgM%2Bsw9fzur%2Bco5seG3Tqb4%2BDSl%2F%2BBVWwkGeUtwaeukEJuNSYhfB3nbbsIUIDM8UrSBskOENkWNJOCDbzLwIYesBCSqL5keBrtt3uyZWm%2F2jMJrNQubFHLDzp%2B%2BSfIYWTfg4R%2ByDr%2B8j1S1fxYEBVgQRvqZHmL1tpFLBbnIaQq7tTGyPIUwZis4%2FCZx8sffXd04P6bYw9tN4ePEHuLMoRpOO0MXg8LzzFGxngPn1pyDD4DTFO8gzL3AP4R1ZCNmlUzVTGcFViiZ7D10eHR%2FKuvibuKIsYzT53YmgnH4Q28rVVGkGyAr2fPAgQEdzbQS%2BVY3FzW83bgm8SnQx9AsTRTXfbW83GpiK%2FEOvb9ZT1JzJcnh%2B5wqOtQk%2Bs0p8%2F%2Beb0875lIjDp2%2F%2FtBTqzAbo6KvOK5VVs9JrIKyHVQwERPwiTIL0yMYadcCptc7WJTrCUdsGrUHdXaCOUBPiuNP0j4UgADh0Di%2F9lbT9de7%2FJ2fvGO0GMdwmvKabgvWx%2F2ShOIjP5B5rZiNA%2FWXW2KSo8nruyJG3DVzI2340XFoMlmiO1eP12EHdaEo1ZkuoPzQTKXakA2jx%2FK8Nj5ZAIdnm%2Bz9QRfG6RiWLfLQP7sgjFZ9xLmSQOT%2BHcasvixOQDj14i&X-Amz-Signature=b7752aea86ac0f297cc0e8d126329ed179668154af7526d6f80e1a8efd70aea7&X-Amz-SignedHeaders=host)

![stats display](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/59d3d3ed-d510-4f92-bfa6-fc0b55b84992/untitled?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45AMGBVNUB%2F20191104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191104T100332Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDxEblfziBGnq8YHO3hkKdJAU7J2WDot2mvh0lejo4BYAIhAJc9GlOArH4w2PyjUTItaWeymPecDoGlTrfuBns7%2F0RwKvwDCEMQABoMMjc0NTY3MTQ5MzcwIgysM86VCScebsq6dOoq2QO4j5VIlVJnNYXi2XD6K%2F29%2FK8f8YYi%2Fo7SY0hP2t0wyuNM9CgC64veW%2B%2B4Zq%2B1EG9Wz%2B8y5ZqLLKzALmaEY1Zlvzdt%2BbSWXZo6KdBj2zWLW9NC%2BKuG%2Btgw1VNHjnH5zv64am2hSP1ku8cdfO5r93CUzWqCtg7CcqYySE79cGfHFhyt4RAsX6ZcKf9USRO1gsylnz0hYZgbwSJ5Pu5xYyuxGxz%2FAwqq0JoHoXpllHa7PUZCruUkgM%2Bsw9fzur%2Bco5seG3Tqb4%2BDSl%2F%2BBVWwkGeUtwaeukEJuNSYhfB3nbbsIUIDM8UrSBskOENkWNJOCDbzLwIYesBCSqL5keBrtt3uyZWm%2F2jMJrNQubFHLDzp%2B%2BSfIYWTfg4R%2ByDr%2B8j1S1fxYEBVgQRvqZHmL1tpFLBbnIaQq7tTGyPIUwZis4%2FCZx8sffXd04P6bYw9tN4ePEHuLMoRpOO0MXg8LzzFGxngPn1pyDD4DTFO8gzL3AP4R1ZCNmlUzVTGcFViiZ7D10eHR%2FKuvibuKIsYzT53YmgnH4Q28rVVGkGyAr2fPAgQEdzbQS%2BVY3FzW83bgm8SnQx9AsTRTXfbW83GpiK%2FEOvb9ZT1JzJcnh%2B5wqOtQk%2Bs0p8%2F%2Beb0875lIjDp2%2F%2FtBTqzAbo6KvOK5VVs9JrIKyHVQwERPwiTIL0yMYadcCptc7WJTrCUdsGrUHdXaCOUBPiuNP0j4UgADh0Di%2F9lbT9de7%2FJ2fvGO0GMdwmvKabgvWx%2F2ShOIjP5B5rZiNA%2FWXW2KSo8nruyJG3DVzI2340XFoMlmiO1eP12EHdaEo1ZkuoPzQTKXakA2jx%2FK8Nj5ZAIdnm%2Bz9QRfG6RiWLfLQP7sgjFZ9xLmSQOT%2BHcasvixOQDj14i&X-Amz-Signature=8d38dcb9b5cf6f991fa98e5b9378d6a5ccf4d4aed070ed5cbb2085ceb3f0a94b&X-Amz-SignedHeaders=host)

![recipes display](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bf4b88f8-ebb9-4392-95f9-97a417b2f2d0/untitled?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45AMGBVNUB%2F20191104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20191104T100332Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDxEblfziBGnq8YHO3hkKdJAU7J2WDot2mvh0lejo4BYAIhAJc9GlOArH4w2PyjUTItaWeymPecDoGlTrfuBns7%2F0RwKvwDCEMQABoMMjc0NTY3MTQ5MzcwIgysM86VCScebsq6dOoq2QO4j5VIlVJnNYXi2XD6K%2F29%2FK8f8YYi%2Fo7SY0hP2t0wyuNM9CgC64veW%2B%2B4Zq%2B1EG9Wz%2B8y5ZqLLKzALmaEY1Zlvzdt%2BbSWXZo6KdBj2zWLW9NC%2BKuG%2Btgw1VNHjnH5zv64am2hSP1ku8cdfO5r93CUzWqCtg7CcqYySE79cGfHFhyt4RAsX6ZcKf9USRO1gsylnz0hYZgbwSJ5Pu5xYyuxGxz%2FAwqq0JoHoXpllHa7PUZCruUkgM%2Bsw9fzur%2Bco5seG3Tqb4%2BDSl%2F%2BBVWwkGeUtwaeukEJuNSYhfB3nbbsIUIDM8UrSBskOENkWNJOCDbzLwIYesBCSqL5keBrtt3uyZWm%2F2jMJrNQubFHLDzp%2B%2BSfIYWTfg4R%2ByDr%2B8j1S1fxYEBVgQRvqZHmL1tpFLBbnIaQq7tTGyPIUwZis4%2FCZx8sffXd04P6bYw9tN4ePEHuLMoRpOO0MXg8LzzFGxngPn1pyDD4DTFO8gzL3AP4R1ZCNmlUzVTGcFViiZ7D10eHR%2FKuvibuKIsYzT53YmgnH4Q28rVVGkGyAr2fPAgQEdzbQS%2BVY3FzW83bgm8SnQx9AsTRTXfbW83GpiK%2FEOvb9ZT1JzJcnh%2B5wqOtQk%2Bs0p8%2F%2Beb0875lIjDp2%2F%2FtBTqzAbo6KvOK5VVs9JrIKyHVQwERPwiTIL0yMYadcCptc7WJTrCUdsGrUHdXaCOUBPiuNP0j4UgADh0Di%2F9lbT9de7%2FJ2fvGO0GMdwmvKabgvWx%2F2ShOIjP5B5rZiNA%2FWXW2KSo8nruyJG3DVzI2340XFoMlmiO1eP12EHdaEo1ZkuoPzQTKXakA2jx%2FK8Nj5ZAIdnm%2Bz9QRfG6RiWLfLQP7sgjFZ9xLmSQOT%2BHcasvixOQDj14i&X-Amz-Signature=75bef2dd01a52d230ab0c910995e3558d6ce373652ea6aa23b5f22c7be32a338&X-Amz-SignedHeaders=host)
