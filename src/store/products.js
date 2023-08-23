import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import clientStore from "./client";
import adminState from "./adminState";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../API/productsAPI";

class Products {
  products = [];
  editProduct = null;
  uploadedImages = null;
  selectedImageIdx = null;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "products",
      properties: ["products", "editProduct", "uploadedImages", "selectedImageIdx"],
      storage: window.localStorage,
    });
  }

  setEditProduct = (product) => (this.editProduct = product);
  unsetEditProduct = () => (this.editProduct = null);

  setUploadedImages = (imgUrl) => (this.uploadedImages = imgUrl);
  unsetUploadedImages = () => (this.uploadedImages = []);

  setSelectedImageIdx = (idx) => (this.selectedImage = idx);
  unsetSelectedImageIdx = () => (this.selectedImage = null);

  getProductsAction = async () => {
    clientStore.setIsLoading(true);
    const result = await getProducts();
    console.log("result", result);

    runInAction(() => {
      clientStore.setIsLoading(false);
      if (result.error) {
        clientStore.setError(result.error);
        return;
      }
      this.products = result.data;
    });
  };

  createProductAction = async (product) => {
    adminState.setIsLoading(true);
    try {
      const result = await createProduct(product);

      runInAction(() => {
        this.products.unshift(result.data.product);
      });
      adminState.setMessage("Продукт додан успішно");
      return true;
    } catch (error) {
      adminState.setError(error.response.data.message);
    } finally {
      adminState.setIsLoading(false);
    }
  };

  // updateProductAction = async (product) => {
  //   adminState.setIsLoading(true);
  //   const result = await updateProduct(product);

  //   runInAction(() => {
  //     adminState.setIsLoading(false);
  //     if (result.error) {
  //       adminState.setError(result.error);
  //       return;
  //     }
  //   });
  //   this.getProductsAction();
  //   adminState.setMessage("Продукт змінен успішно");
  //   return true;
  // };

  updateProductAction = async (id, product) => {
    adminState.setIsLoading(true);
    console.log("produectU: ", product);
    try {
      const result = await updateProduct(id, product);
      const updatedProduct = result.data.data;
      // console.log("updatedProduct: ", updatedProduct);
      runInAction(() => {
        const updatedProductIdx = this.products.findIndex((prod) => prod._id === updatedProduct._id);

        if (updatedProductIdx === -1) {
          throw Error(`Продукт с id ${updatedProduct._id} відсутній у списку продуктів!`);
        }
        // console.log("idx: ", updatedProductIdx);
        this.products[updatedProductIdx] = updatedProduct;
        adminState.setMessage("product updated successfully");
      });
      return true;
    } catch (err) {
      // console.log("Error: ", err.message);
      adminState.setError(err.message);
    } finally {
      adminState.setIsLoading(false);
    }
  };

  deleteProductAction = async (product) => {
    adminState.setIsLoading(true);
    const result = await deleteProduct(product);

    runInAction(() => {
      adminState.setIsLoading(false);
      if (result.error) {
        adminState.setError(result.error);
        return;
      }
    });
    this.getProductsAction();
    adminState.setMessage("Продукт змінен успішно");
    return true;
  };
}

export default new Products();
