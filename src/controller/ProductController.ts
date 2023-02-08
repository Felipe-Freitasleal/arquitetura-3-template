import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductDTO } from "../dtos/ProductDTO";
import { BaseError } from "../errors/BaseError";

export class ProductController {
  // propriedades
  constructor(
    // parâmetros
    private productDTO: ProductDTO,
    private productBusiness: ProductBusiness
  ) {}

  // métodos
  public getProducts = async (req: Request, res: Response) => {
    try {
      const input = {
        q: req.query.q,
      };

      const output = await this.productBusiness.getProducts(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public createProduct = async (req: Request, res: Response) => {
    try {
      const input = this.productDTO.createProductInput(
        req.body.id,
        req.body.name,
        req.body.price
      );

      const output = await this.productBusiness.createProduct(input);

      res.status(201).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public editProduct = async (req: Request, res: Response) => {
    try {

      const input = this.productDTO.updateProductInput(
        req.params.id,
        req.body.id,
        req.body.name,
        req.body.price,
        req.body.createdAt
      );

      const output = await this.productBusiness.editProduct(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public deleteProduct = async (req: Request, res: Response) => {
    try {
      const input = {
        idToDelete: req.params.id,
      };

      const output = await this.productBusiness.deleteProduct(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
}
