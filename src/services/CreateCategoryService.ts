import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * [X] - Define type of return
 * [X] - Fix error return
 * [X] - Access repository
 * [X] - Return something(message, object)
 */

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description })

  }
}

export { CreateCategoryService }