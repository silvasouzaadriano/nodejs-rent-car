import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadExists = this.specificationsRepository.findByName(name);

    if (specificationAlreadExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({ name, description })

  }
}

export { CreateSpecificationService }