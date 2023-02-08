import { stringify } from "querystring";
import { BadRequestError } from "../errors/BadRequestError";
import { Product } from "../models/Product";

export interface CreateProductInputDTO {
  id: string;
  name: string;
  price: number;
}

export interface CreateProductOutputDTO {
  message: string;
  product: {
    id: string;
    name: string;
    price: number;
    createAt: string;
  };
}

export interface UpdateProductInputDTO {
  idToEdit: string;
  newId: string | undefined;
  newName: string | undefined;
  newPrice: number | undefined;
  newCreatedAt: string | undefined;
}

export interface UpdateProductOutputDTO {
  message: string;
  product: {
    id: string;
    name: string;
    price: number;
    createAt: string;
  };
}
export class ProductDTO {
  // propriedades

  // métodos
  public createProductInput(
    id: unknown,
    name: unknown,
    price: unknown
  ): CreateProductInputDTO {
    if (typeof id !== "string") {
      throw new BadRequestError("'id' deve ser string");
    }

    if (typeof name !== "string") {
      throw new BadRequestError("'name' deve ser string");
    }

    if (typeof price !== "number") {
      throw new BadRequestError("'price' deve ser number");
    }

    const dto: CreateProductInputDTO = {
      id,
      name,
      price,
    };

    return dto;
  }

  public createProductOutput(product: Product) {
    const dto: CreateProductOutputDTO = {
      message: "Produto registrado com sucesso",
      product: {
        id: product.getId(),
        name: product.getName(),
        price: product.getPrice(),
        createAt: product.getCreatedAt(),
      },
    };

    return dto;
  }

  public updateProductInput(
    idToEdit: string,
    newId: unknown,
    newName: unknown,
    newPrice: undefined,
    newCreatedAt: unknown
  ) {
    if (typeof idToEdit !== "string") {
      throw new BadRequestError("'idToEdit' deve ser string");
    }

    if (newId !== undefined) {
      if (typeof newId !== "string") {
        throw new BadRequestError("'id' deve ser string");
      }
    }

    if (newName !== undefined) {
      if (typeof newName !== "string") {
        throw new BadRequestError("'name' deve ser string");
      }
    }

    if (newPrice !== undefined) {
      if (typeof newPrice !== "number") {
        throw new BadRequestError("'price' deve ser number");
      }
    }

    if (newCreatedAt !== undefined) {
      if (typeof newCreatedAt !== "string") {
        throw new BadRequestError("'createdAt' deve ser string");
      }

      // outras validações de data
    }

    const dto: UpdateProductInputDTO = {
      idToEdit,
      newId,
      newName,
      newPrice,
      newCreatedAt,
    };

    return dto;
  }

  public updateProductOutput(product: Product) {
    const dto: CreateProductOutputDTO = {
      message: "Produto atualizado com sucesso",
      product: {
        id: product.getId(),
        name: product.getName(),
        price: product.getPrice(),
        createAt: product.getCreatedAt(),
      },
    };

    return dto
  }
}
