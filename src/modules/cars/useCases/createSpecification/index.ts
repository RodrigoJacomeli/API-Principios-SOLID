import { SpecificationsRepository } from "../../repositories/implementarions/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateEspcificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateEspcificationUseCase(
  specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
